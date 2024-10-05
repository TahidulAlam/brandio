import React from "react";
import InfoBox from "./InfoBox";

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
      <div className="relative z-10 w-[90%] mx-auto">
        {/* Section Heading */}
        {sectionTitle && (
          <header className="text-start mb-12">
            <h2 className="text-5xl font-extrabold text-black leading-snug">
              {sectionTitle}
            </h2>
            {sectionSubtitle && (
              <p className="text-lg font-medium text-gray-600 mt-4">
                {sectionSubtitle}
              </p>
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
