import Link from "next/link";
import styleCategory from "./category.module.css";
import Image from "next/image";

const getData = async () => {
	// fecth using the variable of environment to fecth catgegories from the api

	const res = await fetch(`${process.env.URL_API}/categories`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};

const Category = async () => {
	const data = await getData();
	console.log(data);
	return (
		<div className={styleCategory.container}>
			<h1 className={styleCategory.title}>Popular Categories</h1>
			<div className={styleCategory.categories}>
				{data?.map((category) => (
					<Link
						href={`/blog?cat=${category.slug}`}
						className={`${styleCategory.category} ${
							styleCategory[category.slug]
						}`}
						key={category.id}
					>
						{category.img && (
							<Image
								src={category.img}
								alt=""
								width={32}
								height={32}
								className={styleCategory.Image}
							/>
						)}

						{category.title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Category;
