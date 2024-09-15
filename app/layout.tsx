import type { Metadata } from "next";
import { Content, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import SearchModal from "./components/modals/SearchModal";
const inter = Inter({ subsets: ["latin"] });
import Modal from "./components/modals/Modals";
import AddPropertModal from "./components/modals/AddPropertyModal";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
export const metadata: Metadata = {
  title: "Air Bnb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Content=(
      <p>Yadsa</p>
  )

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> 
        <div className="pt-24">{children}</div>
       {/* <Modal 
       label="Title"
       content={Content}
       isOpen={true}/> */}
       <LoginModal/>
       <SearchModal/>
       <SignupModal/>
       <AddPropertModal/>
      </body>
    </html>
  );
}
