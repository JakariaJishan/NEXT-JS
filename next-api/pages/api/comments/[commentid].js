import { commnets } from "../../../data/commnets";

export default function handler(req, res) {
  const { commentid } = req.query;
  if (req.method === "GET") {
    const data = commnets.find((item) => item.id === parseInt(commentid));
    res.status(200).json(data);
  } else if (req.method === "DELETE") {
    const data = commnets.find((item) => item.id === parseInt(commentid));
    const index = commnets.findIndex(
      (comment) => (comment.id === parseInt(commentid))
    );
    commnets.splice(index, 1);
    res.status(200).json(data);
  }
}
