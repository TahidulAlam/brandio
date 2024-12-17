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
import SmoothScrollComponent from "@/components/SmoothScrollComponent";

export default function Home() {
  return (
    <>
      {/* <SmoothScrollComponent scrollSettings="duration:0.7 ease:power2.out smoother:on">
      </SmoothScrollComponent> */}
      <Container bgClassName="bg-black">
        <HeroBanner />
      </Container>
      {/* <SmoothScrollComponent scrollSettings="duration:0.7 ease:power2.out smoother:on">
      </SmoothScrollComponent> */}
      <div className="lg:mt-20 mt-4 lg:mb-20 mb-0">
        <BrandingPartner
          mainTitle={"100+ Branding Partner"}
          subtitle={
            "Brands are the cultural connection between companies and their communities."
          }
        />
      </div>
      <div className="mb-2 lg:mb-0">
        <VideoBanner />
      </div>
      {/* <SmoothScrollComponent scrollSettings="duration:0.7 ease:power2.out smoother:on">
      </SmoothScrollComponent> */}
      <div className="bg-black lg:pt-3 pt-5">
        <Services />
      </div>
      <div className="">
        <ClientFeedBack />
      </div>
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
    </>
  );
}
