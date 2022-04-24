// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("blog-post/blogData.json", (err, data) => {
    if(err) {
        res.send(err);
    }
    res.status(200).json(data);
  });
}
