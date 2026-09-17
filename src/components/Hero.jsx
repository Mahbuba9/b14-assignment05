import bannerImg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Build Your Ideal{" "}
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mt-5 text-gray-500 text-lg max-w-md">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            
              <a href="#technologies"
              className="px-6 py-3 rounded-full text-white font-medium bg-brand-gradient hover:opacity-90 transition-opacity"
            >
              Explore Technologies
            </a>
            
              <a href="#about"
              className="px-6 py-3 rounded-full text-gray-800 font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="Illustration representing a modern technology stack"
            className="w-64 h-64 md:w-80 md:h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
}