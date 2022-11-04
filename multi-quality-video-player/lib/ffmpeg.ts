import { execFile } from "child_process"

const FFMPEG_PATH = '/usr/bin/ffmpeg'

export function convertVideo(src: string, out: string, resolution: string): Promise<string> {

  const args = [
    "-i", src, // input video
    "-c:v", "libx264", // copy video with codec h264
    "-crf", "26", // quality, the higher the worse (but better compression), 51 max
    "-s", resolution, // convert resolution
    "-pix_fmt", "yuv420p", // pixel color format
    "-map", "0", // include all streams from the input into the output
    out // output file
  ]

  return new Promise((resolve, reject) => {
    execFile(FFMPEG_PATH, args, (error, stdout, stderr) => {
      if (error) {
        reject(error)
        return
      }
      // I haven't looked into why but it always shows up in stderr
      resolve(stderr)
    })
  })
}

export const RESOLUTIONS = [
  { size: "720p", dimensions: "1280x720" },
  { size: "360p", dimensions: "640x360" },
  { size: "144p", dimensions: "256x144" }
]