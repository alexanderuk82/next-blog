import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const posts = await prisma.post.findMany();

		return new NextResponse(JSON.stringify(posts, { status: 200 }));
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
		);
	}
};



//Loque toca ahor es crear la paginacion de los posts

// Path: src/app/api/posts/route.js