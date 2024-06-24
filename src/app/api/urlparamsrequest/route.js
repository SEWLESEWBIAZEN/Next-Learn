import { comments } from "../comments/data";


export async function GET(request){
    const searchParams=request.nextUrl.searchParams;
    const query=searchParams.get("query");
    const filteredComments= query? comments.filter((comment)=>comment.text.includes(query)):comments;

    return Response.json(filteredComments);
}