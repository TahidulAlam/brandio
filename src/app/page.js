import BrandingPartner from "@/components/home/branding-partner/BrandingPartner";
import ClientFeedBack from "@/components/home/client-feedback/ClientFeedBack";
import Container from "@/components/container/Container";
import ExplorePlan from "@/components/home/explore-plan/ExplorePlan";
import HeroBanner from "@/components/home/hero-banner/HeroBanner";
import InnovationBanner from "@/components/home/innovation/InnovationBanner";
import Services from "@/components/home/services/Services";
import VideoBan from "@/components/home/video-banner/VideoBan";
import VideoBanner from "@/components/home/video-banner/VideoBanner";
import Portfolio from "@/components/home/portfolio/Portfolio";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";

export default function Home() {
  return (
    <div className="">
      <div className="bg-black w-full">
        <div className="w-[90%] mx-auto">
          <HeroBanner />
        </div>
      </div>
      <Container>
        <BrandingPartner />
      </Container>
      <VideoBanner />
      {/* <VideoBan /> */}
      <div className="bg-black">
        <Services />
      </div>
      <ClientFeedBack />
      <div className="bg-black">
        <ExplorePlan />
      </div>
      <div className="bg-[#F4F1EF]">
        <InnovationBanner />
      </div>
      <div className="bg-black">
        <Portfolio />
      </div>
      <div>
        <InquryBanner />
      </div>
    </div>
  );
}
