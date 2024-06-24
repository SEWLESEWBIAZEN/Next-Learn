import { comments } from "../data";

export async function GET(_request, { params }) {
  const comment = comments.find((c) => c.id === parseInt(params.id));

  return Response.json(comment);
}

export async function PATCH(updateRequest, { params }) {
  const body = await updateRequest.json();
  const { text } = body;
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  comments[index].text = text;

  return Response.json(comments[index]);
}
