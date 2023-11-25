import Image from "next/image";
import styleFooter from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={styleFooter.container}>
			<div className={styleFooter.info}>
				<div className={styleFooter.logo}>
					<span className={styleFooter.icon}>😎</span>
					<h1 className={styleFooter.logoText}>AlexBlog</h1>
				</div>
				<p className={styleFooter.desc}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
					doloribus suscipit veritatis iure saepe repudiandae veniam
					consequuntur impedit deleniti magnam.{" "}
				</p>

				<div className={styleFooter.iconSocial}>
					<Image
						className={styleFooter.icon}
						src="/facebook.png"
						alt="facebook"
						width={18}
						height={18}
					/>
					<Image
						className={styleFooter.icon}
						src="/instagram.png"
						alt="facebook"
						width={18}
						height={18}
					/>
					<Image
						className={styleFooter.icon}
						src="/tiktok.png"
						alt="facebook"
						width={18}
						height={18}
					/>
					<Image
						className={styleFooter.icon}
						src="/youtube.png"
						alt="facebook"
						width={18}
						height={18}
					/>
				</div>
			</div>
			<div className={styleFooter.links}>
				<div className={styleFooter.list}>
					<span className={styleFooter.listTitle}>Links</span>
					<Link href="/">Homepage</Link>
					<Link href="/">Blog</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>
				</div>
				<div className={styleFooter.list}>
					<span className={styleFooter.listTitle}>Tags</span>
					<Link href="/">Style</Link>
					<Link href="/">Fashion</Link>
					<Link href="/">Coding</Link>
					<Link href="/">Travel</Link>
				</div>
				<div className={styleFooter.list}>
					<span className={styleFooter.listTitle}>Social</span>
					<Link href="/">Facebook</Link>
					<Link href="/">Instagram</Link>
					<Link href="/">TikTok</Link>
					<Link href="/">Youtube</Link>
				</div>
			</div>
		</footer>
	);
}
