import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../cardpost/Card";

const getData = async (page, cat) => {
	try {
		const res = await fetch(
			`${process.env.URL_API}/posts?page=${page}&cat=${cat || ""}`,
			{
				cache: "no-cache",
			}
		);

		if (!res.ok) {
			throw new Error(`Failed to fetch posts, status: ${res.status}`);
		}

		return res.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error; // Re-throw the error to be caught in CardList
	}
};

const CardList = async ({ page, cat }) => {
	const { posts, count } = await getData(page, cat);

	const POST_PER_PAGE = 2;

	const hasPrev = POST_PER_PAGE * (page - 1) > 0;
	const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent Posts</h1>
			<div className={styles.posts}>
				{posts?.map((item) => (
					<Card item={item} key={item._id} />
				))}
			</div>
			<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
		</div>
	);
};

export default CardList;
