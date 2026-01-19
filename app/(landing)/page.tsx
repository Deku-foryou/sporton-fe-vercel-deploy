import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";
import { getAllcategories } from "../services/category-service";

export default async function Home() {
  const categories = await getAllcategories();
  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection />
    </main>
  );
}
