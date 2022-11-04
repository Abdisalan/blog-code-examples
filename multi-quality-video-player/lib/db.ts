import sqlite3 from 'sqlite3'

const DATABASE_FILE = "video-metadata.db"

function openDatabase(): sqlite3.Database {
  let db = new sqlite3.Database(DATABASE_FILE, sqlite3.OPEN_READWRITE, (err: any) => {
    if (err) {
      console.error(`Error opening db: ${err}`)
    }
  })
  return db
}

const db = openDatabase()

export type Resolution = {
  filePath: string
  size: string
}

export type Video = {
  title: string
  resolutions: Resolution[]
}

export interface VideoDb {
  getAllVideos(): Promise<Video[]>
  insertVideo(video: Video): Promise<void>
}

class SqliteVideoDb implements VideoDb {
  private formatVideo({ video_title, filepath_1080p, filepath_720p, filepath_360p, filepath_144p }: any): Video {
    const resolutions: Resolution[] = []
    filepath_1080p && resolutions.push({ filePath: filepath_1080p, size: "1080p" })
    filepath_720p && resolutions.push({ filePath: filepath_720p, size: "720p" })
    filepath_360p && resolutions.push({ filePath: filepath_360p, size: "360p" })
    filepath_144p && resolutions.push({ filePath: filepath_144p, size: "144p" })
    return {
      title: video_title,
      resolutions
    } as Video
  }

  getAllVideos(): Promise<Video[]> {
    return new Promise<Video[]>(resolve => {
      db.all(`select * from video_metadata`, (err, rows) => {
        resolve(rows.map(this.formatVideo))
      })
    })
  }

  async insertVideo(video: Video): Promise<void> {
    const videosPaths = video.resolutions.map(({ filePath }) => `"${filePath}"`).join(",")

    await new Promise<void>((resolve, reject) => {
      db.exec(`
        insert into video_metadata
        (video_title, filepath_1080p, filepath_720p, filepath_360p, filepath_144p)
        values ("${video.title}", ${videosPaths})
      `, (err) => {
        if (err) {
          console.log(err)
          reject()
        }
        resolve()
      })
    })
  }
}

export default new SqliteVideoDb()