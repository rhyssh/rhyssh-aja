import TypeOne from "@/components/fragments/Typewriter/TypeOne";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import { useRef, useState } from "react";
import { handleToggle } from "@/utils/toogleAnimation"; // Import handleToggle function
import ComingSoon from "../ComingSoon";

const SpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const HomeView = () => {
  const { data } = useSession();
  const [isToggled, setIsToggled] = useState(false); // State untuk toggle
  const elementsToHide = useRef<HTMLDivElement>(null);
  const elementsToShow = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="text-white px-3 py-4 relative w-full">
      <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-center lg:gap-10  max-md:items-center w-full">
        <div className="flex flex-col items-center">
          <Image width={200} height={200} className="lg:w-72 " src="/images/pp.png" alt={"pp"} />
          <div>
            <p className="bg-neutral-600 px-3 py-2 mt-3 text-green-400 shadow-lg shadow-cyan-500/40 rounded-md">
              Open to Work <span className="text-primary-400">& Collaborate</span>
            </p>
          </div>
        </div>
        <div className="relative w-full  lg:w-1/2 mt-3 lg:mt-0">
          {/* Elemen yang akan dihilangkan */}
          <div className={`text-primary-500  top-0 left-0 w-full ${SpaceMono.className}`} ref={elementsToHide}>
            <h1 className="text-base bg-neutral-600 p-1 w-fit">
              {!data && "Hallo..Mr or Mrs Anonymous!!"} {data && `Halloo ${data.user?.name} 👋🏻`}
            </h1>
            {data && <p className="text-sm font-light pl-1">Waoow...I&apos;m happy you’re sharing your name! 😁😁</p>}
            {!data && <p className="text-xs font-light pl-1">hufttt...why you don&apos;t want to tell me your name🙄</p>}
            <br />
            {!data && <p className="text-xs font-light pl-1">oke, no problem,</p>}
            <p className="text-base font-light pl-1">Let&apos;s get to know me better</p>
          </div>

          {/* Elemen yang akan dimunculkan */}
          <div className={`text-white font-mona top-0 left-0 w-full space-y-2 ${isToggled ? "" : "hidden"}`} ref={elementsToShow}>
            <p className="text-sm text-primary-500">my name is</p>
            <h1 className="text-5xl font-semibold">Reiki Aziz</h1>
            <p className="text-gray-300">
              <TypeOne />
            </p>
            <p className="text-sm sm:text-base">
              I am a 5th semester student majoring in Informatics Engineering at <strong> Universitas Negeri Semarang</strong>. I am active in various organizations and communities developing teamwork and communication skills.
            </p>
            <p className="text-sm sm:text-base">
              In addition, I enriched my learning experience through freelance and internships in companies, strengthening my interest in <strong> cyber security</strong> and <strong> web development</strong>.
            </p>
          </div>

          {/* Tombol Let's Goo */}
          <button
            className=" bg-primary-500 text-white px-3 py-1 rounded-full hover:bg-primary-600 my-3"
            ref={buttonRef}
            onClick={() =>
              handleToggle({
                isToggled,
                setIsToggled,
                elementsToHide,
                elementsToShow,
                buttonRef,
              })
            } // Panggil fungsi handleToggle dengan objek
          >
            {!isToggled && "Let's Goo!!"} {isToggled && "Go Back"}
          </button>
        </div>
      </div>

      {/* project */}
      <div>
        <ComingSoon />
      </div>
    </div>
  );
};

export default HomeView;
