"use client";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";
import formatDate from "@/utils/date";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Comments = ({ postSlug }) => {
	const { status } = useSession();
	const { data, mutate, isLoading, error } = useSWR(
		`http://localhost:3000/api/comments?postSlug=${postSlug}`,
		fetcher
	);
	const [desc, setDesc] = useState("");

	// Remove the unnecessary import statement for React

	const handleSubmit = async () => {
		await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({ desc, postSlug }),
		});
		mutate();
	};

	if (error) return <div>Failed to load comments</div>;

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === "authenticated" ? (
				<div className={styles.commentContainer}>
					<textarea
						className={styles.textarea}
						placeholder="Write a comment..."
						onChange={(e) => setDesc(e.target.value)}
					/>
					<button onClick={handleSubmit} className={styles.button}>
						Send
					</button>
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
				{isLoading ? (
					"Loading"
				) : (
					<div className={styles.comments}>
						{isLoading
							? "loading"
							: data?.map((item) => (
									<div className={styles.comment} key={item._id}>
										<div className={styles.user}>
											{item?.user?.image && (
												<Image
													src={item.user.image}
													alt=""
													width={50}
													height={50}
													className={styles.image}
												/>
											)}
											<div className={styles.userInfo}>
												<span className={styles.username}>
													{item.user.name} -
												</span>
												<span className={styles.date}>
													 🗓️ {formatDate(item.createdAt)}
												</span>
											</div>
										</div>
										<p className={styles.desc}>{item.desc}</p>
									</div>
							  ))}
					</div>
				)}
			</div>
		</div>
	);
};
