import { NextApiRequest, NextApiResponse } from "next";
import { contactDetails } from "../../../data/contact";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(contactDetails);
    }
}