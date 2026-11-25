import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Davao Guide",
  description: "A guide to top attractions in the Davao Region",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}