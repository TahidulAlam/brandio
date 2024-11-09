import React from "react";
import InfoBox from "./InfoBox";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";

const BrandDesignSection = ({
  sectionTitle,
  sectionSubtitle,
  designInfo,
  backgroundUrl,
  customClasses = "",
}) => {
  return (
    <section
      className={`py-16 relative ${customClasses}`}
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content of the section */}
      <div className="relative z-10 mx-auto max-w-[90%] lg:max-w-[80%] ">
        {/* Section Heading */}
        {sectionTitle && (
          <header className="lg:text-start text-center lg:mb-12 mb-5">
            <div className="lg:text-5xl text-xl font-extrabold text-black leading-snug">
              <TextWithLineBreaks text={sectionTitle} />
            </div>
            {sectionSubtitle && (
              <div className="text-lg font-medium text-gray-600 mt-4">
                <TextWithLineBreaks text={sectionSubtitle} />
              </div>
            )}
          </header>
        )}

        {/* Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designInfo.map((info, index) => (
            <InfoBox
              key={index}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandDesignSection;
