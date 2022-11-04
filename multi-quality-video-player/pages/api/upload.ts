import type { NextApiRequest, NextApiResponse } from 'next'
import { promises } from 'fs'
import { IncomingForm } from 'formidable'
import { convertVideo, RESOLUTIONS } from '../../lib/ffmpeg';
import InMemoryVideoDb, { Video } from '../../lib/db'

export const config = {
  api: {
    bodyParser: false,
  },
}

type ProcessFileResult = {
  status: number
  response: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const form = new IncomingForm({ uploadDir: 'public' })

  const { status, response } = await new Promise<ProcessFileResult>(resolve => form.parse(req, async (err, fields, files) => {
    if (err) {
      resolve({ status: 500, response: `${err}` })
      return
    }
    // type check
    if (!Array.isArray(files.video)) {
      resolve({ status: 400, response: `Give a file` })
      return
    }
    const { filepath, originalFilename } = files.video[0]
    // type check
    if (!originalFilename) {
      resolve({ status: 500, response: `There's no originalFilename...?` })
      return
    }

    // rename file to its original name
    const publicFolder = `${process.cwd()}/public/`
    const originalFilePath = `${publicFolder}${originalFilename}`
    const [originalFileBase, originalFileExt] = originalFilename?.split('.')
    await promises.rename(filepath, originalFilePath)

    // convert video to 720p & 360p & 144p (assuming its 1080p)
    const resolutionPaths = RESOLUTIONS.map(({ size, dimensions }) => {
      return { size, dimensions, filePath: `${originalFileBase}__${size}.${originalFileExt}` }
    })
    await Promise.all(resolutionPaths.map(({ filePath, dimensions }) =>
      convertVideo(originalFilePath, `${publicFolder}${filePath}`, dimensions)
    ))
    InMemoryVideoDb.insertVideo({
      title: originalFileBase, resolutions: [
        { filePath: originalFilename, size: '1080p' },
        ...resolutionPaths
      ]
    } as Video)
    resolve({ status: 200, response: `Done.` })
  }))

  res.status(status).json(response)
}