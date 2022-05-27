import { lookup } from 'fast-geoip';
import { NextApiRequest, NextApiResponse } from 'next';

// @route   GET api/getLocation
// @desc    Get user's location
// @access  Public

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const forwarded = req.headers['x-forwarded-for'];
  //   const ip = forwarded
  //     ? Array.isArray(forwarded)
  //       ? forwarded[0].split(/, /)[0]
  //       : forwarded.split(/, /)[0]
  //     : req.socket.remoteAddress;
  const clientIp =
    (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
    req.socket.remoteAddress;
  console.log(clientIp);
  res.status(200).json(clientIp);
}
