import Home from "../components/Home";
import Header from "../components/Header";
import Meals from "@/components/Meals";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
    <Header />
      <Home />
      <Meals />
      <Contact />
      <Footer />
    </>
  );
}
