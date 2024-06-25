import { NextResponse } from "next/server";


export async function GET(request){

    if(request.nextUrl.pathname==="/profile"){
        return NextResponse.rewrite(new URL ("/hello", request.url))
    }
    return NextResponse.redirect(new URL ("/", request.url)) 
}