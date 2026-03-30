import localFont from 'next/font/local';
import { Inter, Outfit, Roboto, Work_Sans } from 'next/font/google';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  // variable: "--font-work-sans", // You can use a custom CSS variable
  weight: '400', // Specify the weight
});

const outfit = Outfit({
  subsets: ['latin'],
  // variable: "--font-roboto", // You can use a custom CSS variable
  weight: '400', // Specify the weight
});

export const metadata = {
  title: 'F.M.A - Fashion Marketing Agency',
  description: 'Fashion Marketing Agency',
};

let error = false;

export default function RootLayout({ children }) {
  const rand = Math.random();
  if (rand < 0.1) {
    error = true;
  }

  if (error) {
    return (
      <html lang="en">
        <body
          style={{
            fontWeight: 'bold',
            fontSize: '24px',
            backgroundColor: '#fff',
            color: '#000',
          }}>
          429 Too Many Requests
          {/* <p style={{fontSize: '14px', fontWeight: 'normal'}}>Max Edge Requests reached.</p> */}
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${outfit.className} ${workSans.className} antialiased`}>
        <Nav />
        <main className="content">
          <MainContent>{children}</MainContent>
        </main>
        <Footer />
      </body>
    </html>
  );
}
