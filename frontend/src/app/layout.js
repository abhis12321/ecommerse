import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-950 text-white">
      <body >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
