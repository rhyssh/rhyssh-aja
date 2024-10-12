import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WorkedSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
    });
  });
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8">
      {/* Title for mobile */}
      <h1 data-aos="fade-up" id="WID" className="text-center text-xl lg:text-2xl font-semibold ">
        where I&apos;ve worked{" "}
      </h1>
      <div className="mx-auto">
        <ol data-aos="fade-right" data-aos-duration="2000" className="relative border-s-4 border-primary-500">
          <li className="mb-10 ms-4">
            <div className="absolute w-4 h-4 bg-gray-200 rounded-full mt-1.5 -start-2.5  border border-primary-500 dark:border-gray-900 dark:bg-gray-700"></div>
            <div data-aos="fade-up" data-aos-duration="2000" >
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct 2023 - Dec 2023</time>
              <h3 className="text-lg font-semibold text-white">Pusat Keagenan</h3>
              <h6 className="font-mono text-primary-400 text-sm ">Freelance web developer</h6>
              <ul className="list-square  list-outside ml-4 text-gray-500 dark:text-gray-400">
                <li className="text-teal-300 ">
                  <div className="text-white text-sm">Attract customers by creating a company landing page with a simple and minimalist design</div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-10 ms-4 ">
            <div className="absolute w-4 h-4 bg-gray-200 rounded-full mt-1.5 -start-2.5  border border-primary-500 dark:border-gray-900 dark:bg-gray-700"></div>
            <div data-aos="fade-up" data-aos-duration="2000" >
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2024 - Jul 2024</time>
              <h3 className="text-lg font-semibold text-white">Student Staff FMIPA UNNES</h3>
              <h6 className="font-mono text-primary-400 text-sm ">Data Entry</h6>
              <ul className="list-square  list-outside ml-4 text-gray-500 dark:text-gray-400">
                <li className="text-teal-300 ">
                  <div className="text-white text-sm">Optimize book search by determining the unique and default ID for each book input.</div>
                </li>
                <li className="text-teal-300 ">
                  <div className="text-white text-sm">Increase knowledge of library evaluation through satisfaction surveys and visitor feedback</div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-10 ms-4 ">
            <div className="absolute w-4 h-4 bg-gray-200 rounded-full mt-1.5 -start-2.5  border border-primary-500 dark:border-gray-900 dark:bg-gray-700"></div>
            <div data-aos="fade-up" data-aos-duration="2000" >
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2023 - May 2024</time>
              <h3 className="text-lg font-semibold text-white">PT Mana Digital Technology</h3>
              <h6 className="font-mono text-primary-400 text-sm">Junior Front End Developer</h6>
              <ul className="list-square  list-outside ml-4 text-gray-500 dark:text-gray-400">
                <li className="text-teal-300 ">
                  <div className="text-white text-sm">Attract customers by creating a friendly and beautiful company website</div>
                </li>
                <li className="text-teal-300 ">
                  <div className="text-white text-sm">Coding web design for speech therapist search service</div>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WorkedSection;
