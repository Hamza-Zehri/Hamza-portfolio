import React, { useEffect, useRef } from 'react';

const Achievements = () => {
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
    <section id="achievements" className="py-12 px-[7vw] md:px-[20vw] font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements</h2>
        <p className="text-gray-400 mb-6">Professional certifications and course badges I’ve earned.</p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="flex-shrink-0" aria-hidden="true">
            <div
              ref={badgeRef}
              aria-label="Coursera achievement badge"
              className="rounded-lg bg-gradient-to-b from-[#0f1724] to-[#0b1220] p-4 shadow-[0_10px_30px_rgba(130,69,236,0.15)] border border-purple-700"
            >
              {/* Credly embed script will inject the badge iframe here */}
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
          </div>

          <div className="flex-1 text-left">
            <h3 className="text-xl font-semibold text-white">Coursera — Achievement Badge</h3>
            <p className="text-gray-400 mt-2">Completed a Coursera course; credential is shared via Credly. Click below to verify and view details.</p>

            <a
              href="https://www.credly.com/badges/df755883-cd2b-48f5-8ad0-624cae5a6a4d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 py-2 px-4 rounded-full font-semibold text-white"
              style={{ background: 'linear-gradient(90deg,#8245ec,#a855f7)' }}
            >
              View on Credly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
