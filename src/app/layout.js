// Assuming this is similar to your layout file
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { ThemeContextProvider } from "../context/ThemeContext";
import ThemeProvider from "../providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Blog App",
	description: "The best blog app!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`container ${inter.className}`}>
				<AuthProvider>
					<ThemeContextProvider>
						<ThemeProvider>
							<div className="container">
								<div className="wrapper">
									<NavBar />
									{children}
									<Footer />
								</div>
							</div>
						</ThemeProvider>
					</ThemeContextProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
