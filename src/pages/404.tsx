import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="w-screen h-screen text-primary-500 flex items-center justify-center flex-col space-y-5">
      {/* <img className="w-1/2" src="/not_found.png" alt="404" /> */}
      <Image src={"/svg/not_found.svg"} alt={"404"} width={600} height={600} className="max-w-md" />
      <h1>Halaman Tidak Ditemukan</h1>
    </div>
  );
};

export default Custom404;
