import styles from "./comments.module.css";

import Link from "next/link";
import Image from "next/image";
export const Comments = () => {
	const status = "aunthenicated";
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === "aunthenicated" ? (
				<div className={styles.commentContainer}>
					<textarea
						className={styles.textarea}
						placeholder="Write a comment..."
					/>
					<button className={styles.button}>Send</button>
				</div>
			) : (
				<div className={styles.loginContainer}>
					<p className={styles.loginText}>Please login to comment</p>
					<Link href="/login" className={styles.loginButton}>
						Login
					</Link>
				</div>
			)}

			<div className={styles.comments}>
				<div className={styles.comment}>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image
								src="/p1.jpeg"
								alt="Picture of the author"
								className={styles.userImage}
								height={50}
								width={50}
							/>
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>01.01.2024</span>
						</div>
					</div>
					<div className={styles.desc}>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Mollitia, quaerat. Natus commodi exercitationem iure sunt quod
							voluptate eius esse saepe libero. Alias, amet beatae enim minus
							est et non ut.
						</p>
					</div>
				</div>
				<div className={styles.comment}>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image
								src="/p1.jpeg"
								alt="Picture of the author"
								className={styles.userImage}
								height={50}
								width={50}
							/>
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>01.01.2024</span>
						</div>
					</div>
					<div className={styles.desc}>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Mollitia, quaerat. Natus commodi exercitationem iure sunt quod
							voluptate eius esse saepe libero. Alias, amet beatae enim minus
							est et non ut.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
