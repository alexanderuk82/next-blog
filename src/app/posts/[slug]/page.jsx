import Menu from "@/components/menu/Menu";
import styles from "./singlepage.module.css";
import Image from "next/image";
import { Comments } from "@/components/comments/Comments";
import formatDate from "@/utils/date";

const getData = async (slug) => {
	try {
		const res = await fetch(`${process.env.URL_API}/posts/${slug}`, {
			cache: "no-cache",
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch posts, status: ${res.status}`);
		}

		return res.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error; // Re-throw the error to be caught in CardList
	}
};

const page = async ({ params }) => {
	const { slug } = params;
	const data = await getData(slug);
	const { id, name, email, image } = data.user;

	console.log(data);

	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>{data?.title}</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							{image && (
								<Image
									src={image}
									alt="Picture of the author"
									fill
									className={styles.userImage}
								/>
							)}
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>{name}</span>
							<span className={styles.date}>{formatDate(data.createdAt)}</span>
						</div>
					</div>
				</div>
				<div className={styles.imgContainer}>
					{data?.img && (
						<Image
							src={data.img}
							alt={data.title}
							fill
							className={styles.img}
						/>
					)}
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div
						className={styles.desc}
						dangerousslySetInnerHTML={{ __html: data?.desc }}
					></div>
					<div className={styles.comment}>
						<Comments postSlug={slug} />
					</div>
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default page;
