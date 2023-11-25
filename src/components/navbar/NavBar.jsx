import Image from "next/image";
import styleNavBar from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function NavBar() {
	return (
		<nav className={styleNavBar.container}>
			<div className={styleNavBar.social}>
				<Image src="/facebook.png" alt="Facebook" width={20} height={20} />
				<Image src="/instagram.png" alt="instagram" width={20} height={20} />
				<Image src="/tiktok.png" alt="tiktok" width={20} height={20} />
				<Image src="/youtube.png" alt="youtube" width={20} height={20} />
			</div>
			<div className={styleNavBar.logo}>
				<Link href="/">AlexBlog</Link>
			</div>
			<div className={styleNavBar.links}>
				<ThemeToggle />
				<Link className={styleNavBar.link} href="/">
					Home
				</Link>
				<Link className={styleNavBar.link} href="/contact">
					contact
				</Link>
				<Link className={styleNavBar.link} href="/about">
					about
				</Link>
				<AuthLinks />
			</div>
		</nav>
	);
}
