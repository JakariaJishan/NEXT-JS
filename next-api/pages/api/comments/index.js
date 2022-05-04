import { commnets } from "../../../data/commnets";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(commnets);
  } else if (req.method === "POST") {
    const {comment} = req.body;
    const newComment = {
      name: comment,
      title: comment,
    };
    console.log(comment);
    commnets.push(newComment);
    res.status(201).json(newComment);
  }
}
