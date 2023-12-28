import Image from "next/image";
import cardPost from "./cardPost.module.css";
import Link from "next/link";

import formatDate from "../../utils/date.js";

const Card = ({ key, item }) => {
	console.log(item);
	return (
		<div className={cardPost.container} key={key}>
			{item.img && (
				<div className={cardPost.imageContainer}>
					<Image src={item.img} alt="" fill className={cardPost.image} />
				</div>
			)}
			<div className={cardPost.text}>
				<div className={cardPost.detail}>
					<span className={cardPost.date}>{formatDate(item.createdAt)} </span>
					<span className={cardPost.category}>- {item.catSlug}</span>
				</div>
				<Link href={`/posts/${item.slug}`}>
					<h1 className={cardPost.title}>{item.title}</h1>
				</Link>
				<p className={cardPost.desc}>
					{item.desc.length > 200 ? item.desc.slice(0, 200) + "..." : item.desc}
				</p>
				<Link className={cardPost.linkButton} href={`/posts/${item.slug}`}>
					{" "}
					Read more
				</Link>
			</div>
		</div>
	);
};

export default Card;
