import CardList from "@/components/cardlist/CardList";
import styleBlog from "./blogpage.module.css";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
	return (
		<div className={styleBlog.container}>
			<h1 className={styleBlog.title}>Style blog</h1>
			<div className={styleBlog.content}>
				<CardList />
				<Menu />
			</div>
		</div>
	);
};

export default BlogPage;
