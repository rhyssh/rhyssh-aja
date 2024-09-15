import { faChrome } from "@fortawesome/free-brands-svg-icons";
import CardExpertise from "@/components/elements/CardExpertise";
import { useEffect, useState } from "react";
import { faMobileScreen, faVideo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./expertise.module.css";

const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState("web-dev");
  const [href, setHref] = useState("#web-dev");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Misalnya, ukuran layar large di Tailwind adalah >= 1024px
        setHref("large"); // Ubah href untuk layar besar
      } else {
        setHref("mobile"); // Ubah href untuk layar kecil
      }
    };

    // Set href ketika komponen pertama kali dimuat
    handleResize();

    // Tambahkan event listener ketika ukuran layar berubah
    window.addEventListener("resize", handleResize);

    // Cleanup event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const classAktive = "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%";
  return (
    <div className="flex flex-col sm:gap-[2rem]">
      <h1 id="WID" className="text-center text-xl sm:hidden">
        What I Do
      </h1>
      <div className="flex flex-col sm:flex-row-reverse sm:justify-center sm:items-center gap-7">
        <div id="style-2" className="py-4 flex gap-4 overflow-x-auto">
          <div id="web-dev" onClick={() => handleTabClick("web-dev")} className={`scroll-mt-10 h-fit  w-fit p-[1px] rounded-lg transition-all ${activeTab === "web-dev" ? classAktive : ""}`}>
            <Link href={href == "large" ? "#WID" : "#web-dev"} className="">
              <CardExpertise
                icon={faChrome}
                title="Web Development"
                desc="Experience the power of a fully optimized, responsive website crafted to enhance user engagement and drive your business forward."
                active={activeTab === "web-dev"}
              />
            </Link>
          </div>

          <div id="mobile-dev" onClick={() => handleTabClick("mobile-dev")} className={`scroll-mt-10 h-fit w-fit p-[1px] rounded-lg ${activeTab === "mobile-dev" ? classAktive : ""}`}>
            <Link href={href == "large" ? "#WID" : "#mobile-dev"}>
              <CardExpertise
                icon={faMobileScreen} // Ganti dengan ikon yang sesuai
                title="Mobile Development"
                desc="Create high-performance mobile apps with an intuitive interface and seamless user experience."
                active={activeTab === "mobile-dev"}
              />
            </Link>
          </div>

          <div id="vg-dev" onClick={() => handleTabClick("vg-dev")} className={`scroll-mt-10 h-fit w-fit p-[1px] rounded-lg ${activeTab === "vg-dev" ? classAktive : ""}`}>
            <Link href={href == "large" ? "#WID" : "#vg-dev"}>
              <CardExpertise
                icon={faVideo} // Ikon yang sesuai
                title="Videography"
                desc="Deliver stunning videos with smooth transitions and professional effects that captivate your audience."
                active={activeTab === "vg-dev"}
              />
            </Link>
          </div>
        </div>
        <div className="py-4 lg:w-[500px]">
          <h1 id="WID" className="hidden sm:inline sm:text-2xl font-semibold ">
            What I Do
          </h1>{" "}
          <div id="desc-web-dev" className={`${activeTab === "web-dev" ? "" : "hidden"}  text-sm text-slate-200 text-justify`}>
            Creating and maintaining responsive, multi-device websites with engaging designs and optimal performance. With over <strong>2.5 years of experience</strong> , I have mastered various technologies to deliver exceptional user
            experiences:{" "}
            <ul className=" list-outside mt-2 list-[square] pl-2">
              <li>
                <strong className="text-primary-400">React.js</strong> for front-end development, building interactive and efficient user interfaces,
              </li>
              <li>
                <strong className="text-accent-400 ">Next.js</strong> for full-stack development (currently enhancing my back-end skills),
              </li>
              <li>
                {" "}
                <strong className="text-red-500">Laravel</strong> for full-stack development (on progress with back-end).
              </li>
            </ul>
          </div>
          <div id="desc-mobile-dev hidden" className={`${activeTab === "mobile-dev" ? "" : "hidden"}  text-sm text-slate-200 text-justify`}>
            Designing and developing high-performance mobile applications with a focus on seamless user experience and cross-platform compatibility. With a strong foundation in modern mobile technologies, I deliver custom mobile solutions
            that meet your needs:
            <ul className=" list-outside mt-2 list-[square] pl-2">
              <li>
                <strong className="text-primary-400">Flutter</strong> for building expressive, high-quality cross-platform apps that run smoothly on both iOS and Android,
              </li>
              <li>
                <strong className="text-orange-300">Firebase</strong> fas the backend solution for secure, real-time database management and app scalability.
              </li>
            </ul>{" "}
          </div>
          <div id="desc-vg-dev hidden" className={`${activeTab === "vg-dev" ? "" : "hidden"}  text-sm text-slate-200 text-justify`}>
            Crafting visually engaging videos with seamless transitions and dynamic effects to bring your story to life. With expertise in industry-standard tools, I ensure high-quality video production that captivates your audience:
            <ul className=" list-outside mt-2 list-[square] pl-2">
              <li>
                <strong>
                  Kine<span className="text-[#f66a65]">Master</span>
                </strong>{" "}
                for mobile video editing with powerful transitions and on-the-go creativity,
              </li>
              <li>
                <strong className="text-[#8787f7] ">Adobe Premiere Pro</strong> for professional-grade video editing, utilizing advanced transitions and effects to enhance visual storytelling.
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
