import { NextRequest, NextResponse } from "next/server"
import connect from "@/app/utils/db"
import Post from "@/app/models/Post";

export const GET = async (request: NextRequest) => {
  

  try {
    await connect();
    const posts = await Post.find()
    return new NextResponse(JSON.stringify(posts), {status: 200}) 

  } catch (error) {
    return new NextResponse('Database Error', {status: 500}) 
    
  }

}
