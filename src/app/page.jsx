import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Category from "@/components/category/Category";
import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";
import Pagination from "@/components/pagination/Pagination";

export default function Home({ searchParams }) {
	const page = parseInt(searchParams?.page || 1);

	return (
		<div className={styles.container}>
			<Featured />
			<Category />

			<div className={styles.content}>
				<CardList page={page} />
				<Menu />
			</div>
		</div>
	);
}
