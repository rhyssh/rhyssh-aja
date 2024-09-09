import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="w-screen h-screen text-primary-500 flex items-center justify-center flex-col space-y-5">
      {/* <img className="w-1/2" src="/not_found.png" alt="404" /> */}
      <Image src={"/svg/not_found.svg"} alt={"404"} width={600} height={600} className="w-72 sm:w-96" />
      <h1>Halaman Tidak Ditemukan</h1>
      <Link href={"/home"}>
        <button className="bg-primary-500 text-white px-3 py-1 rounded-full hover:bg-primary-600">Kembali ke Beranda</button>
      </Link>
    </div>
  );
};

export default Custom404;
