// function in date.js file to convert date to human readable format

const formatDate = (date) => {
	const d = new Date(date);
	const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
	const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
	const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
	return `${da}-${mo}-${ye}`;
};

export default formatDate;
