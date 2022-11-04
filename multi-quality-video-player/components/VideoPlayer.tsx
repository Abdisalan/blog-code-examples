import { useRef, SyntheticEvent, useState } from "react"
import styles from "../styles/VideoPlayer.module.css"
import { Video } from "../lib/db"

const VideoPlayer = ({ video }: { video: Video }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sourceRef = useRef<HTMLSourceElement>(null)
  const [playText, setPlayText] = useState("Play")

  type SelectHandler = (a: SyntheticEvent<HTMLSelectElement, Event>) => void
  const onSelectHandler: SelectHandler = (event) => {
    // get rid of the warnings
    if (videoRef.current == null) return
    if (sourceRef.current == null) return
    if (!(event.target instanceof HTMLSelectElement)) return

    // Remember what timestamp the video is at
    const timestamp = videoRef.current.currentTime
    // Get the new source filename
    const src = event.target.value
    // Change the source of the video
    const wasPlaying = playText === "Pause"
    videoRef.current.pause()
    sourceRef.current.src = src
    videoRef.current.load()
    videoRef.current.currentTime = timestamp

    // resume the video if it was playing
    if (wasPlaying) {
      videoRef.current.play()
    }
  }

  const onPlayHandler = (event: SyntheticEvent<HTMLButtonElement, Event>) => {
    if (videoRef.current == null) return
    const video = videoRef.current
    // check if playing
    if (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2) {
      setPlayText("Play")
      video.pause()
    } else {
      setPlayText("Pause")
      video.play()
    }
  }

  return (
    <div>
      <div className={styles.videoContainer}>
        <video ref={videoRef} className={styles.video} muted loop>
          <source ref={sourceRef} src={video.resolutions[0].filePath} type="video/mp4" />
        </video>
        <button onClick={onPlayHandler} className={styles.play}>{playText}</button>
        <select name="video_source" onChange={onSelectHandler} className={styles.select}>
          {video.resolutions.map(
            res => <option key={res.size} value={res.filePath}>{res.size}</option>
          )}
        </select>
      </div>
    </div>
  )
}

export default VideoPlayer