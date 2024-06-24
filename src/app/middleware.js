import { NextResponse, NextRequest } from "next/server";


export async function GET(request){

    if(NextRequest.nextUrl.pathname==="/profile"){
        return NextResponse.redirect(new URL ("/hello", request.url))
    }
    return NextResponse.redirect(new URL ("/", request.url)) 
}