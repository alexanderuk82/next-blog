import Link from "next/link";
import menuStyle from "./menu.module.css";
import Image from "next/image";
import MenuPost from "../menuPost/MenuPost";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
	return (
		<div className={menuStyle.container}>
			{/* Most Popular section */}

			<div className={menuStyle.content}>
				<h2 className={menuStyle.subtitle}>{"What's hot"}</h2>
				<h1 className={menuStyle.tile}>Most popular</h1>
				<MenuPost />
			</div>

			{/* Categories Labels */}

			<div className={menuStyle.content}>
				<h2 className={menuStyle.subtitle}>Discover by topic</h2>
				<h1 className={menuStyle.tile}>Categories</h1>

				<MenuCategories />
			</div>

			{/* Discover By topic */}

			<div className={menuStyle.content}>
				<h2 className={menuStyle.subtitle}>Discover by topic</h2>
				<h1 className={menuStyle.tile}>Editors Pick</h1>
				<MenuPost withImage />
			</div>
		</div>
	);
};

export default Menu;
