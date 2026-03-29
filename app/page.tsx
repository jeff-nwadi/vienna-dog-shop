import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { NewArrivals } from "@/components/NewArrivals";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <NewArrivals />
    </div>
  );
}
