"use client";

import { useSiteStore } from "@/store/site-store";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CartDrawer from "@/components/site/CartDrawer";
import HomePage from "@/components/site/pages/HomePage";
import ShopPage from "@/components/site/pages/ShopPage";
import ProductPage from "@/components/site/pages/ProductPage";
import AboutPage from "@/components/site/pages/AboutPage";
import ContactPage from "@/components/site/pages/ContactPage";

export default function Home() {
  const page = useSiteStore((s) => s.page);

  const renderPage = () => {
    switch (page.name) {
      case "home":
        return <HomePage />;
      case "shop":
        return <ShopPage />;
      case "product":
        return <ProductPage slug={page.slug} />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
