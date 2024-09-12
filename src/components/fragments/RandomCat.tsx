import { useEffect } from "react";

const RandomCat = () => {
  useEffect(() => {
    // Fungsi untuk menempatkan kucing di posisi acak
    const addRandomCat = () => {
      const cat = document.createElement("img");
      cat.src = "../../../../gif/cat.gif"; // Ganti dengan path gambar kucing Anda
      cat.alt = "Random Cat";
      cat.style.position = "fixed";
      cat.style.width = "100px"; // Ukuran kucing
      cat.style.height = "100px";
      cat.style.zIndex = "100"; // Z-index yang cukup tinggi agar tidak tertutup komponen lain
      cat.style.top = `${Math.random() * window.innerHeight}px`; // Posisi acak vertikal
      cat.style.left = `${Math.random() * window.innerWidth}px`; // Posisi acak horizontal
      cat.style.rotate = `${Math.random() * 360}deg`;
      cat.style.transition = "all 0.5s ease-in-out"; // Animasi jika ingin membuat kucing berpindah dengan mulus

      // Tambahkan elemen ke body
      document.body.appendChild(cat);

      // Optionally, buat kucing hilang setelah beberapa waktu
      setTimeout(() => {
        cat.remove(); // Menghapus elemen setelah beberapa detik
      }, 5000); // 5 detik
    };

    // Tambahkan kucing setiap 3 detik
    const intervalId = setInterval(addRandomCat, 5000);

    return () => clearInterval(intervalId); // Membersihkan interval saat komponen unmount
  }, []);

  return null; // Komponen ini tidak menampilkan elemen di layar
};

export default RandomCat;
