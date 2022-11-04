import { useRouter } from "next/router"
import Image from "next/image"
import { useRef, MouseEvent, useState } from "react"
import styles from '../styles/Upload.module.css'
import InfiniteLoading from '../components/InfiniteLoading.svg'

export default function UploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: MouseEvent<HTMLInputElement>) => {
    if (!(inputFileRef.current instanceof HTMLInputElement)) return
    if (!inputFileRef.current.files?.length) return

    event.preventDefault()
    const formData = new FormData()
    formData.append('video', inputFileRef.current.files[0])

    setLoading(true)
    await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    // redirect to home page to watch video
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Upload + Convert</h1>
        <form>
          <input ref={inputFileRef} type="file" />
          <input type="button" value="Do it!" onClick={handleSubmit} />
        </form>
        {loading ? <Image src={InfiniteLoading} alt="Loading..." /> : null}
      </div>
    </div>
  )
}