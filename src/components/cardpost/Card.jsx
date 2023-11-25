import Image from "next/image";
import cardPost from "./cardPost.module.css";
import Link from "next/link";

const Card = () => {
	return (
		<div className={cardPost.container}>
			<div className={cardPost.imageContainer}>
				<Image className={cardPost.image} src="/p1.jpeg" alt="Post" fill />
			</div>
			<div className={cardPost.text}>
				<div className={cardPost.detail}>
					<span className={cardPost.date}>11.02.203 - </span>
					<span className={cardPost.category}>culture</span>
				</div>
				<Link href="/">
					<h1 className={cardPost.title}>
						Lorem ipsum dolor sit amet consecteturt.
					</h1>
				</Link>
				<p className={cardPost.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in, ipsum
					vitae fuga ad non velit sequi iste obcaecati doloremque at error
					commodi, voluptas consectetur?
				</p>
				<Link className={cardPost.linkButton} href="/post"> Read more</Link>
			</div>
		</div>
	);
};

export default Card;
