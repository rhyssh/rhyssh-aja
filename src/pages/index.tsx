/* eslint-disable @typescript-eslint/no-unused-vars */

import Head from "next/head";
import ParticleCustom from "@/components/fragments/ParticleCustom";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/react"; // Tambahkan signOut

const App = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const callbackUrl = "/home"; // Definisikan URL redirect

  useEffect(() => {
    // Reset session saat halaman dimuat
    const resetSession = async () => {
      await signOut({ redirect: false }); // Reset session tanpa redirect otomatis
    };

    resetSession(); // Panggil fungsi reset session
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target as HTMLFormElement;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement; // Mendapatkan elemen input dengan nama "name"
    const name = nameInput.value; // Ambil nilai dari input form
    try {
      const res = await signIn("credentials", {
        redirect: false,
        name, // Mengirim username dari input form
        callbackUrl,
      });

      if (res?.ok) {
        push(callbackUrl); // Redirect jika signIn berhasil
      } else {
        console.error("Login failed:", res?.error);
      }
    } catch (err) {
      console.error("Error during signIn:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Kenalan Dulu</title>
      </Head>
      <div className="relative h-screen overflow-hidden">
        <ParticleCustom />
        <div className="w-screen absolute z-10 max-lg:top-1/3 lg:bottom-1/3 ">
          <div className="mx-auto bg-neutral-500 rounded-xl shadow-xl shadow-blue-500/50 flex-col space-y-4 lg:space-y-6 text-white px-3 lg:px-8 py-5 lg:py-10 w-fit ">
            <div>
              <h1 className="text-lg min-[500px]:text-2xl font-semibold lg:text-3xl">Haiii...What&apos;s your name???😁😁</h1>
              <p>May I make your acquaintance ?</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="username"
                placeholder="your name"
                className="w-full px-2 py-2 rounded-md text-neutral-500"
              />

              <div className="flex justify-center gap-3 mt-4">
                <button
                  type="submit"
                  className={`bg-primary-500 hover:bg-primary-600 shadow-md shadow-primary-600 px-4 py-2 rounded-md capitalize ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={isLoading} // Disable button saat loading
                >
                  {isLoading ? "Loading..." : "My Pleasure"}
                </button>

                <Link href="/home">
                  <div className="bg-danger-500 hover:bg-danger-600 shadow-md shadow-danger-600 px-4 py-2 rounded-md capitalize cursor-pointer">Sorry, I can&apos;t.</div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
