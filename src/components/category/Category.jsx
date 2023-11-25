import Link from "next/link";
import styleCategory from "./category.module.css";
import Image from "next/image";

const Category = () => {
	return (
		<div className={styleCategory.container}>
			<h1 className={styleCategory.title}>Popular Categories</h1>
			<div className={styleCategory.categories}>
				<Link
					href="/blog?cat=style"
					className={`${styleCategory.category} ${styleCategory.style}`}
				>
					<Image
						src="/style.png"
						alt=""
						width={32}
						height={32}
						className={styleCategory.Image}
					/>
					Style
				</Link>
				<Link
					href="/blog?cat=travel"
					className={`${styleCategory.category} ${styleCategory.travel}`}
				>
					<Image
						src="/travel.png"
						alt=""
						width={32}
						height={32}
						className={styleCategory.Image}
					/>
					travel
				</Link>
				<Link
					href="/blog?cat=culture"
					className={`${styleCategory.category} ${styleCategory.culture}`}
				>
					<Image
						src="/culture.png"
						alt=""
						width={32}
						height={32}
						className={styleCategory.Image}
					/>
					Culture
				</Link>
				<Link
					href="/blog?cat=coding"
					className={`${styleCategory.category} ${styleCategory.coding}`}
				>
					<Image
						src="/coding.png"
						alt=""
						width={32}
						height={32}
						className={styleCategory.Image}
					/>
					Coding
				</Link>
				<Link
					href="/blog?cat=food"
					className={`${styleCategory.category} ${styleCategory.food}`}
				>
					<Image
						src="/food.png"
						alt=""
						width={32}
						height={32}
						className={styleCategory.Image}
					/>
					Food
				</Link>
				<Link
					href="/blog?cat=fashion"
					className={`${styleCategory.category} ${styleCategory.fashion}`}
				>
					<Image
						src="/fashion.png"
						alt=""
						width={32}
						height={32}
						className={styleCategory.Image}
					/>
					Fashion
				</Link>
			</div>
		</div>
	);
};

export default Category;
