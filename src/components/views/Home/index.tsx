import TypeOne from "@/components/fragments/Typewriter/TypeOne";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Space_Mono } from "next/font/google";

const SpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});
const HomeView = () => {
  const { data } = useSession();

  return (
    <div className="text-white  px-3 py-4">
      <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-around max-md:items-center">
        <div className="flex flex-col items-center">
          <Image width={200} height={200} src="/images/pp.png" alt={"pp"} />
          <p className="text-lg md:text-3xl">
            <TypeOne />
          </p>
        </div>
        <div className={`text-primary-500 ${SpaceMono.className}`}>
          <h1 className=" text-base bg-neutral-600 p-1 w-fit">
            {!data && "Hallo..Mr or Mrs Anonymous!!"} {data && `Halloo ${data.user?.name} 👋🏻`}
          </h1>
          {data && <p className="text-sm font-light pl-1">Waoow...I&apos;m happy you’re sharing your name! 😁😁</p>}
          {!data && <p className="text-xs font-light pl-1">hufttt...why you don&apos;t want to tell me your name🙄</p>}
        </div>
      </div>

      {/* project */}
      <div>
        <h1 className="text-2xl">My Projects</h1>
      </div>
    </div>
  );
};

export default HomeView;
