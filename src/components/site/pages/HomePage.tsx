"use client";

import Hero from "@/components/site/sections/Hero";
import Categories from "@/components/site/sections/Categories";
import Bestsellers from "@/components/site/sections/Bestsellers";
import BrandStory from "@/components/site/sections/BrandStory";
import Ritual from "@/components/site/sections/Ritual";
import Testimonials from "@/components/site/sections/Testimonials";
import EditorialBanner from "@/components/site/sections/EditorialBanner";
import InstagramFeed from "@/components/site/sections/InstagramFeed";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <Bestsellers />
      <BrandStory />
      <Ritual />
      <Testimonials />
      <EditorialBanner />
      <InstagramFeed />
    </>
  );
}
