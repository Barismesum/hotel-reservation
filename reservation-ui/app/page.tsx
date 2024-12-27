import { Stats } from "./components/Stats";
import { BlogPosts } from "./components/BlogPosts";
import { Footer } from "./components/Footer";
import { LatestProperties } from "./components/LatestProperties";
import { MobileHeader } from "./components/MobileHeader";
import { Navigation } from "./components/Navigation";
import { PropertyCarousel, SearchCard } from "./components/PropertySearch";
import { Testimonials } from "./components/Testimonials";
import { TopBar } from "./components/TopBar";
import { WhoAreWe } from "./components/WhoAreWe";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="hidden md:block">
        <TopBar />
        <Navigation />
      </div>
      
      <MobileHeader />
      
      <div className="bg-gradient-to-b from-circle/30 to-transparent rounded-b-[800px]">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-purple-700 font-medium mb-2 md:mb-4 text-sm uppercase tracking-wide">REAL ESTATE</h2>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Find a perfect<br />home you love..!
              </h1>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
                Lorem Ipsum has been the industrys standard dummy text ever since
                the 1500s, when an unknown printer took a galley
              </p>
              <div className="mt-6 md:mt-8">
                <PropertyCarousel />
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              <SearchCard />
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <Stats />
          </div>
        </div>
      </div>

      <WhoAreWe />
      <LatestProperties />
      <BlogPosts />
      <Testimonials />
      <Footer />
    </div>
  );
}