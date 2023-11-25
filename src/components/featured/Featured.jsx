import Image from "next/image";
import styleFeatured from "./featured.module.css";

export default function Featured() {
	return (
		<div className={styleFeatured.container}>
			<h1 className={styleFeatured.title}>
				<span className={styleFeatured.highLight}>Hey, Alex dev here 💪,</span> discover my stories and creative ideas.
			</h1>
			<div className={styleFeatured.post}>
				<div className={styleFeatured.imgContainer}>
					<Image src="/p1.jpeg" alt="" fill className={styleFeatured.img} />
				</div>
				<div className={styleFeatured.txtContainer}>
					<h1 className={styleFeatured.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
						modi.
					</h1>
					<p className={styleFeatured.postDesc}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
						cupiditate iste voluptatum illum eos ratione sed, a libero nam
						minima.
					</p>
					<button className={styleFeatured.button}>read more</button>
				</div>
			</div>
		</div>
	);
}
