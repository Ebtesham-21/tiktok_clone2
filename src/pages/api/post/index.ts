import type { NextApiRequest, NextApiResponse } from 'next'
import { allPostsQuery } from '../../../../utils/utils/queries'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse) {
      if(req.method === 'GET') {
          const query = allPostsQuery();
      }
 
}
