import Card from "../cardpost/Card";
import Pagination from "../pagination/Pagination";
import cardList from "./cardlist.module.css";

const CardList = () => {
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
