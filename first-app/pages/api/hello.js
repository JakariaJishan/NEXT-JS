// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("../about.js", (err, data) => {
    if (err) {
      res.status(500).json(err);

    }
    console.log(JSON.stringify(data));
  });
  res.status(200).json({ name: "John Doe" });
}
