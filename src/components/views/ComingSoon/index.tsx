import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="w-screen h-screen text-primary-500 flex items-center justify-center flex-col space-y-5 ">
      {/* <img className="w-1/2" src="/not_found.png" alt="404" /> */}
      <Image src={"/svg/under_construction.svg"} alt={"404"} width={300} height={300} className="w-72 sm:w-96" />
      <h1>Halaman Dalam Pengembangan</h1>
    </div>
  );
};

export default ComingSoon;
