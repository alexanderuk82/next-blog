import Menu from "@/components/menu/Menu";
import styles from "./singlepage.module.css";
import Image from "next/image";

const page = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse.
					</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image
								src="/p1.jpeg"
								alt="Picture of the author"
								fill
								className={styles.userImage}
							/>
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>01.01.2024</span>
						</div>
					</div>
				</div>
				<div className={styles.imgContainer}>
					<Image
						src="/p1.jpeg"
						alt="Picture of the author"
						fill
						className={styles.img}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.desc}>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Mollitia, quaerat. Natus commodi exercitationem iure sunt quod
							voluptate eius esse saepe libero. Alias, amet beatae enim minus
							est et non ut.
						</p>

                        <h2>Lorem ipsum dolor sit amet.</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Mollitia, quaerat. Natus commodi exercitationem iure sunt quod
							voluptate eius esse saepe libero. Alias, amet beatae enim minus
							est et non ut.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Mollitia, quaerat. Natus commodi exercitationem iure sunt quod
							voluptate eius esse saepe libero. Alias, amet beatae enim minus
							est et non ut.
						</p>
					</div>
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default page;
