import { NextResponse } from "next/server";

export  function middleware(request){
    return NextResponse.redirect(new URL ("/photo-feed", request.url))
}

export const config={
    matcher:"/profile"
}