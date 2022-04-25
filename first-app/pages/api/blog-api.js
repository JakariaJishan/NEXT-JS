import * as fs from "fs";

export default function handler(req, res) {
  const slug = req.query.slug;
  fs.readFile(`blog-post/${slug}.json`, "utf8", (err, data) => {
   
    res.status(200).json(data);
  });
}
