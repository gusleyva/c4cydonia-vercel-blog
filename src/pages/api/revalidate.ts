import { NextApiRequest, NextApiResponse } from "next"
import { getPosts } from "../../apis"
import { CONFIG } from "site.config"

// for all path revalidate, https://<your-site.com>/api/revalidate?secret=<token>
// for specific path revalidate, https://<your-site.com>/api/revalidate?secret=<token>&path=<path>
// example, https://<your-site.com>/api/revalidate?secret=이것은_키&path=feed
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret, path } = req.query
  // let revalidationToken = CONFIG.notionConfig.revalidationToken as string
  // console.log("secret: " + secret)
  // console.log("revalidationToken: " + revalidationToken)
  if (secret !== process.env.TOKEN_FOR_REVALIDATE) {
    let msg = "Invalid token, secret: " + secret
    return res.status(401).json({ message: msg })
  }

  try {
    if (path && typeof path === "string") {
      await res.revalidate(path)
    } else {
      const posts = await getPosts()
      const revalidateRequests = posts.map((row) =>
        res.revalidate(`/${row.slug}`)
      )
      await Promise.all(revalidateRequests)
    }

    res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send("Error revalidating")
  }
}
