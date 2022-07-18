import { NextApiRequest, NextApiResponse } from "next"
import data from "@public/data.json"
import { Artist } from "types"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Artist | { error: string }>
) {
  try {
    if (req.method !== "GET") throw new Error("Method not allowed")
    return res
      .status(200)
      .json(data.artists.find((artist) => artist.id === req.query.id) as Artist)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message })
    } else {
      return res.status(500).json({ error: "Internal server error" })
    }
  }
}
