import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { NewArrivals } from "@/components/NewArrivals"
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Categories />
      <NewArrivals />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
