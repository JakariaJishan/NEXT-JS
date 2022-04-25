// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  const data = await fs.promises.readdir("blog-post");
  const resultData = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const myfile = await fs.promises.readFile("blog-post/" + element, "utf8");
    resultData.push(JSON.parse(myfile));
  }
  // console.log((typeof resultData));
  res.status(200).json(resultData);
}
