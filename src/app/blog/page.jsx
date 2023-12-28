import CardList from "@/components/cardlist/CardList";
import styleBlog from "./blogpage.module.css";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }) => {
	const page = parseInt(searchParams.page) || 1;
	const { cat } = searchParams;
	console.log({ cat });
	return (
		<div className={styleBlog.container}>
			<h1 className={styleBlog.title}>{cat} blog</h1>
			<div className={styleBlog.content}>
				<CardList page={page} cat={cat} />
				<Menu />
			</div>
		</div>
	);
};

export default BlogPage;
