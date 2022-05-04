import { commnets } from "../../../data/commnets";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(commnets);
  } else if (req.method === "POST") {
    const {comment} = req.body;
    const newComment = {
      id: new Date().getTime(),
      title: comment,
    };
    commnets.push(newComment);
    res.status(201).json(newComment);
  }
}
