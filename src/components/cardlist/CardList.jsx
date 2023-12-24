import Card from "../cardpost/Card";
import Pagination from "../pagination/Pagination";
import cardList from "./cardlist.module.css";

const getData = async () => {
	// fecth using the variable of environment to fecth catgegories from the api

	const res = await fetch(`${process.env.URL_API}/posts`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};

const CardList = async () => {
	const data = await getData();
	console.log(data);

	return (
		<div className={cardList.container} role="list">
			<h1 className={cardList.title}>Recent posts</h1>
			<div className={cardList.posts}>
				<div className={cardList.post} role="listitem">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<Pagination />
			</div>
		</div>
	);
};

export default CardList;
