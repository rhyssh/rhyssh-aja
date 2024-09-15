import { cibNextJs } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { faCss3Alt, faHtml5, faJs, faLaravel, faReact } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const TechtoolSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8">
      {/* Title for mobile */}
      <h1 id="WID" className="text-center text-xl lg:text-2xl font-semibold lg:hidden">
        Tech Stack & Tools
      </h1>

      {/* Main grid container */}
      <div className="flex flex-col items-center lg:flex-row gap-7 justify-center">
        {/* Carousel Section */}
        <div className="h-40 w-full sm:w-[450px] ">
          <Carousel
            leftControl={
              <div>
                <FontAwesomeIcon className="text-primary-400 fa-lg" icon={faChevronLeft} />
              </div>
            }
            rightControl={
              <div>
                <FontAwesomeIcon className="text-primary-400 fa-lg" icon={faChevronRight} />
              </div>
            }
            indicators={false}
          >
            <div id="web" className="flex flex-col h-full fa-2xl gap-4 items-center justify-center bg-gray-900 dark:text-white">
              {/* */}
              <div>
                <p className="text-base">Web App</p>{" "}
              </div>
              <div className="flex gap-3 flex-wrap justify-center px-7 lg:px-9 ">
                <FontAwesomeIcon className="text-orange-400" icon={faHtml5} />
                <FontAwesomeIcon className="text-blue-500" icon={faCss3Alt} />
                <FontAwesomeIcon className="text-yellow-300" icon={faJs} />
                <svg className="w-10 h-10 text-primary-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
                </svg>
                <FontAwesomeIcon className=" text-primary-400" icon={faReact} />
                <CIcon className="w-10 bg-white rounded-full border" icon={cibNextJs} />
                <FontAwesomeIcon className="text-danger-500" icon={faLaravel} />
                <Image src={"/svg/contentful.svg"} width={10} height={10} className="w-8" alt="contentful logo"></Image>
                <Image src={"/svg/firebase.svg"} width={10} height={10} className="w-8" alt="firebase"></Image>
              </div>
            </div>
            <div id="mobile" className="flex flex-col h-full fa-2xl gap-4 items-center justify-center bg-gray-900 dark:text-white">
              {/* */}
              <div>
                <p className="text-base">Mobile App</p>{" "}
              </div>
              <div className="flex gap-3 flex-wrap justify-center px-7 items-center">
                <Image src={"/svg/firebase.svg"} width={10} height={10} className="w-8" alt="firebase"></Image>
                <Image src={"/svg/flutter.svg"} width={10} height={10} className="w-8" alt="contentful logo"></Image>
              </div>
            </div>
            <div id="video" className="flex flex-col h-full fa-2xl gap-4 items-center justify-center bg-gray-900 dark:text-white">
              {/* */}
              <div>
                <p className="text-base">Videography</p>{" "}
              </div>
              <div className="flex gap-3 flex-wrap justify-center ">
                <Image src={"/svg/adobe-premiere.svg"} width={10} height={10} className="w-10" alt="capcut"></Image>
                <Image src={"/svg/capcut.svg"} width={10} height={10} className="w-9 bg-white rounded-lg" alt="contentful logo"></Image>
                <svg className="text-[#f66a65] bg-white rounded-full w-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" stroke="#f66a65" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="24" cy="24" r="21.5" />
                    <path d="m18.3742 13.5334v20.9332" />
                    <path d="m29.626 34.467-8.635-10.467 8.635-10.467" />
                    <path d="m20.9909 24h-2.6167" />
                  </g>
                  <circle cx="24" cy="6" r=".75" />
                  <circle cx="41.119" cy="18.4377" r=".75" />
                  <circle cx="34.5801" cy="38.5623" r=".75" />
                  <circle cx="13.4199" cy="38.5623" r=".75" />
                  <circle cx="6.881" cy="18.4377" r=".75" />
                  <circle cx="24" cy="6" r=".75" />
                </svg>{" "}
              </div>
            </div>
          </Carousel>
        </div>

        {/* Description Section */}
        <div className="flex flex-col w-full sm:w-[600px]">
          <h1 id="WID" className="hidden lg:inline sm:text-2xl font-semibold">
            Tech Stack & Tools
          </h1>
          <p id="desc" className="text-justify sm:text-left text-sm">
            In my projects, I rely on a carefully selected set of technologies and tools, tailored to each service I offer. For web development, I harness the power of <strong className="text-primary-400">React.js</strong> ,{" "}
            <strong className="text-accent-400 ">Next.js</strong>, and <strong className="text-red-500">Laravel</strong>, delivering high-performance, responsive websites. For mobile development, I use{" "}
            <strong className="text-primary-400">Flutter</strong> combined with <strong className="text-orange-300">Firebase</strong>, crafting intuitive, cross-platform applications. And for videography, I bring stories to life using{" "}
            <strong>
              Kine<span className="text-[#f66a65]">Master</span>
            </strong>{" "}
            and <strong className="text-[#8787f7] ">Adobe Premiere Pro</strong>, creating stunning visuals with seamless transitions and effects.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechtoolSection;
