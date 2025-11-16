import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TopAttractions from "./components/TopAttractions";
import TestimonialsSection from "./components/TestimonialsSection";
import ExploreRajasthan from "./components/ExploreRajasthan";
import MagnificentCities from "./components/MagnificentCities";
import PlanYourVisit from "./components/PlanYourVisit";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content - starts below header */}
      <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-[120px]">
        {/* Section 1: Hero Section */}
        <HeroSection />
        
        {/* Section 2: Top Attractions */}
        <TopAttractions />
        
        {/* Section 3: Testimonials */}
        <TestimonialsSection />
        
        {/* Section 4: Explore Rajasthan */}
        <ExploreRajasthan />
        
        {/* Section 5: Magnificent Cities */}
        <MagnificentCities />
        
        {/* Section 6: Plan Your Visit */}
        <PlanYourVisit />

        {/* Banner Image */}
         <Banner />
      </main>
      
      <Footer />
    </div>
  );
}
