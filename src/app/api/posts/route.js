import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//

export const GET = async (req) => {
	const { searchParams } = new URL(req.url);

	let page = parseInt(searchParams.get("page"), 10);
	const cat = searchParams.get("cat");

	// Ensure page is at least 1
	if (isNaN(page) || page < 1) {
		page = 1;
	}

	const POST_PER_PAGE = 2;

	const query = {
		take: POST_PER_PAGE,
		skip: POST_PER_PAGE * (page - 1),
		where: {
			...(cat && { catSlug: cat }),
		},
	};

	try {
		const [posts, count] = await prisma.$transaction([
			prisma.post.findMany(query),
			prisma.post.count({ where: query.where }),
		]);
		return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
		);
	}
};

// CREATE A POST
export const POST = async (req) => {
	const session = await getAuthSession();

	if (!session) {
		return new NextResponse(
			JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
		);
	}

	try {
		const post = await prisma.post.update({
			where: { slug },
			data: { views: { increment: 1 } },
			include: { user: true },
		});

		return new NextResponse(JSON.stringify(post, { status: 200 }));
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
		);
	}
};
