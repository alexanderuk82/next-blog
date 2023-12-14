"use client";

import Link from "next/link";
import authlinksStyles from "./authlinks.module.css";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const AuthLinks = () => {
	// State for Menu burger mobile

	const [open, setOpen] = useState(false);

	//Temporary

	const { status } = useSession();

	return (
		<>
			{status === "unauthenticated" ? (
				<Link className={authlinksStyles.linkStatus} href="/login">
					Login
				</Link>
			) : (
				<>
					<Link className={authlinksStyles.linkStatus} href="/write">
						Write
					</Link>
					<span className={authlinksStyles.logout} onClick={signOut}>
						Logout
					</span>
				</>
			)}
			<div className={authlinksStyles.burger} onClick={() => setOpen(!open)}>
				<div className={authlinksStyles.line}></div>
				<div className={authlinksStyles.line}></div>
				<div className={authlinksStyles.line}></div>
			</div>
			{open && (
				<div className={authlinksStyles.menuResponsive}>
					<Link className={authlinksStyles.link} href="/">
						Home
					</Link>
					<Link className={authlinksStyles.link} href="/contact">
						contact
					</Link>
					<Link className={authlinksStyles.link} href="/about">
						about
					</Link>

					{status === "unauthenticated" ? (
						<Link href="/login">Login</Link>
					) : (
						<>
							<Link href="/write" className={authlinksStyles.link}>
								Write
							</Link>
							<Link className={authlinksStyles.link} onClick={signOut}>
								Logout
							</Link>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default AuthLinks;
