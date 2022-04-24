// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("../about.js", (err, data) => {
    console.log(JSON.stringify(data));
  });
  res.status(200).json({ name: "John Doe" });
}
