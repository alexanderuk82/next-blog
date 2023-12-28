"use client";

import { useRouter } from "next/navigation";
import stylePagination from "./pagination.module.css";

const Pagination = ({ page, hasPrev, hasNext }) => {
	const router = useRouter();

	return (
		<div className={stylePagination.container}>
			<button
				disabled={!hasPrev}
				className={stylePagination.button}
				onClick={() => router.push(`?page=${page - 1}`)}
			>
				Previous
			</button>
			<button
				disabled={!hasNext}
				className={stylePagination.button}
				onClick={() => router.push(`?page=${page + 1}`)}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
