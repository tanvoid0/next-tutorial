import {comments} from "@/app/comments/data";

export async function GET(request: Request, {params}: { params: { id: string } }) {
	const comment = comments.find(comment => comment.id === parseInt(params.id));
	return Response.json(comment);
}

export async function PATCH(request: Request, {params}: { params: { id: string } }) {
	const body = await request.json();
	const {text} = body;
	const index = comments.findIndex(comment => comment.id === parseInt(params.id));
	if (index === -1) {
		return Response.json(
			{
				message: `Comment with id ${params.id} not found`
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
				status: 404,
			}
		)
	}
	comments[index].text = text;
	return Response.json(
		comments[index]
	)
}