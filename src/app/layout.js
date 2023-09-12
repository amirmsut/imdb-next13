import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {/* Header */}
                    <Header />

                    {/* SearchBox */}
                    {/* <SearchBox /> */}
                    {/* Footer */}
                    {children}
                </Providers>
            </body>
        </html>
    );
}
