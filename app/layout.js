import localFont from "next/font/local";
import { Inter, Outfit, Roboto, Work_Sans } from "next/font/google"; 
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  // variable: "--font-work-sans", // You can use a custom CSS variable
  weight: "400", // Specify the weight
});

const outfit = Outfit({
  subsets: ["latin"],
  // variable: "--font-roboto", // You can use a custom CSS variable
  weight: "400", // Specify the weight
});

export const metadata = {
  title: "F.M.A - Fashion Marketing Agency",
  description: "Fashion Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${workSans.className} antialiased`}
      >
        <Nav />
        <main className='content'>
        <MainContent>
          {children}
        </MainContent>
        </main>
        <Footer />
        <ToastContainer className='toast' />
      </body>
    </html>
  );
}
