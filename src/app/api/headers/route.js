import { headers } from "next/headers";

export async function GET(request){
const requestheaders=new Headers(request.headers);
const headerList=headers();

const theme=request.cookies.get("theme")

console.log(headerList.get("Authorization"))
console.log(requestheaders.get("Authorization"))
console.log(theme)

return new Response("Request Headers Collection",{
    headers:{
        "Content-Type":"text/html",
        "Set-Cookie": "theme=dark"
    }
})
    
}