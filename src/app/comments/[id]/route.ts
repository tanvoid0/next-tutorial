import {redirect} from "next/navigation";
import {comments} from "@/app/comments/data";

export async function GET(request: Request, {params}: { params: { id: string } }) {
	if (parseInt(params.id) > comments.length) {
		redirect("/comments");
	}
	const comment = comments.find(comment => comment.id === parseInt(params.id));
	return Response.json(comment);
}

export async function PATCH(request: Request, {params}: { params: { id: string } }) {
	const body = await request.json();
	const {text} = body;
	const index = findIndexById(parseInt(params.id));
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

export async function DELETE(request: Request, {params}: { params: { id: string } }) {
	const index = findIndexById(parseInt(params.id));
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
	const deletedComment = comments[index];
	comments.splice(index, 1);
	return Response.json(deletedComment);
}

const findIndexById = (id: number) => {
	return comments.findIndex(comment => comment.id === id);
}