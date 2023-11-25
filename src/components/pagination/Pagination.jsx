import stylePagination from "./pagination.module.css";

const Pagination = () => {
	return <div className={stylePagination.container}>
        <button className={stylePagination.button}>Previous</button>
        <button className={stylePagination.button}>Next</button>
    </div>;
};

export default Pagination;
