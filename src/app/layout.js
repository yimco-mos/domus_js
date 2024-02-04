import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import "styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fundación Domus",
  description: "fundacion domus colombia",
};

export default function RootLayout({ children }) {
  return (
    <>
     <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/> 
    <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital@1&family=Montserrat&family=Open+Sans:ital@1&family=Playfair+Display&family=Poppins&display=swap" rel="stylesheet" />
    <link rel="shortcut icon" href="/logos/logodomus.jpg"/>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" integrity="sha512-CqHIvpN5AY8fr63vRfmbA6G5tJX/ugcagZBg0MmY2BV2JUxqFEE0AdhX/xBBZ59nhfFlP6+fHKpN7hqDOy4FCg=="  referrerpolicy="no-referrer"/>
</head>
      <html lang="es">
        <body className="content-all-app justify-center">
          <Header />

          <div className="home_lay"> 
          {children}
          </div>


          <Footer />
        </body>
      </html>
    </>
  );
}
