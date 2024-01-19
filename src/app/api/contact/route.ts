import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	message: string
}

export async function POST(
	req: Request,
	res: NextApiResponse
) {
	console.log('test', await req.json())
	return new Response('OK')
}
// export default function GET(
// 	req: NextApiRequest,
// 	res: NextApiResponse<ResponseData>
// ) {
// 	console.log('test123', req.body)
// 	res.status(200).json({ message: 'Hello from Next.js!' })
// }