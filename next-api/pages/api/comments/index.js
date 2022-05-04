import { commnets } from "../../../data/commnets";

export default function handler(req, res) {
    res.status(200).json(commnets);
  }
  