"use client";

import { useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Writepage = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	return (
		<div className={styles.container}>
			<input type="text" className={styles.input} placeholder="Title" />
			<div className={styles.editor}>
				<button
					className={styles.addButton}
					onClick={() => {
						setOpen(!open);
					}}
				>
					<Image src="/plus.png" alt="" width={16} height={16} />
				</button>

				{open && (
					<div className={styles.add}>
						<button className={styles.button}>
							<Image src="/image.png" alt="" width={16} height={16} />
						</button>
						<button className={styles.button}>
							<Image src="/external.png" alt="" width={16} height={16} />
						</button>
						<button className={styles.button}>
							<Image src="/video.png" alt="" width={16} height={16} />
						</button>
					</div>
				)}

				<ReactQuill
					theme="bubble"
					value={value}
					onChange={setValue}
					placeholder="Tell your story..."
					className={styles.textArea}
				/>
			</div>
			<button className={styles.publish}>Publish</button>
		</div>
	);
};

export default Writepage;
