const sqlite3 = require('sqlite3')

function createDatabase() {
  let newdb = new sqlite3.Database('video-metadata.db', (err) => {
    if (err) {
      console.error(`Error creating db:${err}`)
    }
    newdb.exec(`
    create table video_metadata (
      video_title text primary key not null,
      filepath_1080p text,
      filepath_720p text,
      filepath_360p text,
      filepath_144p text
    )
  `)
  })
  newdb.close()
}

createDatabase()