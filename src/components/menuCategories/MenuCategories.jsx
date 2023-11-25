import Link from "next/link";

import categoriesStyle from "./menucategories.module.css";

const MenuCategories = () => {
	return (
		<div className={categoriesStyle.categoryList}>
			<Link
				href="/blog?cat=style"
				className={`${categoriesStyle.categoryItem} ${categoriesStyle.style}`}
			>
				Style
			</Link>
			<Link
				href="/blog?cat=style"
				className={`${categoriesStyle.categoryItem} ${categoriesStyle.travel}`}
			>
				travel
			</Link>
			<Link
				href="/blog?cat=style"
				className={`${categoriesStyle.categoryItem} ${categoriesStyle.culture}`}
			>
				culture
			</Link>
			<Link
				href="/blog?cat=style"
				className={`${categoriesStyle.categoryItem} ${categoriesStyle.food}`}
			>
				food
			</Link>
			<Link
				href="/blog?cat=style"
				className={`${categoriesStyle.categoryItem} ${categoriesStyle.fashion}`}
			>
				fashion
			</Link>
			<Link
				href="/blog?cat=style"
				className={`${categoriesStyle.categoryItem} ${categoriesStyle.coding}`}
			>
				coding
			</Link>
		</div>
	);
};

export default MenuCategories;
