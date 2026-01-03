
import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";


export async function POST(req){

   try{
     await connectDB();

    const{title , description, content , image , slug, category , tags , status , author } = await req.json();

    if(!title || !description || !content || !image || !slug || !category || !author){
        return NextResponse.json(
            { 
                 status: 400,
                message: "All fields are required"
            },
            {status:400}
        )
    }

    const blog = await Blog.create({title , description , content, image , slug , category , tags , status , author});

    return NextResponse.json(
        {   status: 201,
            message:"blog created successfully",
            data:blog
        },
        {status:201},
    )
   } catch(err){
    return NextResponse.json(
        { status: 500,
            message: err.message},
        {status: 500}
    )
   }
}

export async function GET(){
    await connectDB();
    const blogs = await Blog.find();
    return NextResponse.json( {
         status: 200,
         message: "Blogs fetched successfully",
         data: blogs,
       }, { status: 200 });
}