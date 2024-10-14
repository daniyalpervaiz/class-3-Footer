
import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <NavBar />
        {children} <br /> <br />
        <Footer />
      </body>
    </html>
  );
}
