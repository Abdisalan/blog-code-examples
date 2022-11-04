import type { NextApiRequest, NextApiResponse } from 'next'
import SqliteVideoDb, { Video } from '../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Video[]>) {
  const videos = await SqliteVideoDb.getAllVideos()
  res.status(200).json(videos)
}