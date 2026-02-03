const TrustBar = () => {
  return (
    <section className="relative w-full py-16 bg-white dark:bg-[#000000] flex justify-center">
      <div className="w-full max-w-7xl px-4 flex flex-col items-center">
        {/* Title */}
        <p className="text-black dark:text-white text-[22px] mb-12 whitespace-nowrap text-center">
          Trusted by top students all over the world
        </p>

        {/* Container with fade edges */}
        <div className="relative w-full">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#000000] to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#000000] to-transparent z-10 pointer-events-none" />

          {/* Centered boxes */}
          <div className="flex gap-8 justify-center items-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 flex-shrink-0 rounded-lg shadow-lg bg-[#D9D9D9] dark:bg-gradient-to-tr dark:from-[#2E2F2F] dark:to-[#1F2125] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),_-4px_-4px_10px_rgba(255,255,255,0.05)] shadow-[4px_4px_10px_rgba(0,0,0,0.2),_-4px_-4px_10px_rgba(255,255,255,0.6)]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;