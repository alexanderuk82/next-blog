import menuPostStyles from "./menuPost.module.css";
import Link from "next/link";
import Image from "next/image";
import menuStyle from "../menu/menu.module.css";

const MenuPost = ({ withImage }) => {
	return (
		<div className={menuStyle.items}>
			<Link href="/" className={menuStyle.item}>
				{withImage && (
					<div className={menuStyle.imageContainer}>
						<Image src="/p1.jpeg" alt="1" fill className={menuStyle.image} />
					</div>
				)}
				<div className={menuStyle.txtContainer}>
					<span className={`${menuStyle.category} ${menuStyle.travel}`}>
						Travel
					</span>
					<h3 className={menuStyle.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos.
					</h3>
					<div className={menuStyle.detail}>
						<span className={menuStyle.username}>John Doe</span>
						<span className={menuStyle.date}> - 10.03.2023</span>
					</div>
				</div>
			</Link>
			<Link href="/" className={menuStyle.item}>
				{withImage && (
					<div className={menuStyle.imageContainer}>
						<Image src="/p1.jpeg" alt="1" fill className={menuStyle.image} />
					</div>
				)}
				<div className={menuStyle.txtContainer}>
					<span className={`${menuStyle.category} ${menuStyle.culture}`}>
						culture
					</span>
					<h3 className={menuStyle.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos.
					</h3>
					<div className={menuStyle.detail}>
						<span className={menuStyle.username}>John Doe</span>
						<span className={menuStyle.date}> - 10.03.2023</span>
					</div>
				</div>
			</Link>
			<Link href="/" className={menuStyle.item}>
				{withImage && (
					<div className={menuStyle.imageContainer}>
						<Image src="/p1.jpeg" alt="1" fill className={menuStyle.image} />
					</div>
				)}
				<div className={menuStyle.txtContainer}>
					<span className={`${menuStyle.category} ${menuStyle.food}`}>
						food
					</span>
					<h3 className={menuStyle.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos.
					</h3>
					<div className={menuStyle.detail}>
						<span className={menuStyle.username}>John Doe</span>
						<span className={menuStyle.date}> - 10.03.2023</span>
					</div>
				</div>
			</Link>
			<Link href="/" className={menuStyle.item}>
				{withImage && (
					<div className={menuStyle.imageContainer}>
						<Image src="/p1.jpeg" alt="1" fill className={menuStyle.image} />
					</div>
				)}
				<div className={menuStyle.txtContainer}>
					<span className={`${menuStyle.category} ${menuStyle.fashion}`}>
						fashion
					</span>
					<h3 className={menuStyle.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos.
					</h3>
					<div className={menuStyle.detail}>
						<span className={menuStyle.username}>John Doe</span>
						<span className={menuStyle.date}> - 10.03.2023</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default MenuPost;
