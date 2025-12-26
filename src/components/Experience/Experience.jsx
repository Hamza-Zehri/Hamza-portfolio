import React, { useEffect, useRef } from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  const badgeRef = useRef(null);

  useEffect(() => {
    const container = badgeRef.current;
    if (!container) return;

    // Clear any existing content (safe re-mount)
    container.innerHTML = '';

    // Create the Credly badge placeholder div
    const badgeDiv = document.createElement('div');
    badgeDiv.setAttribute('data-iframe-width', '150');
    badgeDiv.setAttribute('data-iframe-height', '270');
    badgeDiv.setAttribute('data-share-badge-id', 'df755883-cd2b-48f5-8ad0-624cae5a6a4d');
    badgeDiv.setAttribute('data-share-badge-host', 'https://www.credly.com');
    container.appendChild(badgeDiv);

    // Inject Credly embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    document.body.appendChild(script);

    return () => {
      // Clean up: remove script and badge to avoid duplicates on unmount
      if (script.parentNode) script.parentNode.removeChild(script);
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATION & ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my certifications and achievements earned through various roles and experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
          <div
            ref={badgeRef}
            aria-label="Coursera achievement badge"
            className="rounded-lg bg-gradient-to-b from-[#0f1724] to-[#0b1220] p-4 shadow-[0_10px_30px_rgba(130,69,236,0.15)] border border-purple-700"
          >
            <noscript>
              <a
                href="https://www.credly.com/badges/df755883-cd2b-48f5-8ad0-624cae5a6a4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8245ec] underline"
              >
                View badge
              </a>
            </noscript>
          </div>

          <div className="max-w-xl text-left">
            <h3 className="text-lg font-semibold text-white">Coursera — Achievement Badge</h3>
            <p className="text-gray-400 mt-2">Completed a Coursera course; credential is shared via Credly. <a href="https://www.credly.com/badges/df755883-cd2b-48f5-8ad0-624cae5a6a4d" target="_blank" rel="noopener noreferrer" className="text-[#8245ec] underline">Verify on Credly</a></p>
          </div>
        </div>

      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
