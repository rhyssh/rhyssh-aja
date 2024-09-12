import anime from "animejs";
import { RefObject } from "react";

type HandleToggleProps = {
  isToggled: boolean;
  setIsToggled: (value: boolean) => void;
  elementsToHide: RefObject<HTMLDivElement>; // Gunakan RefObject
  elementsToShow: RefObject<HTMLDivElement>; // Gunakan RefObject
  buttonRef: RefObject<HTMLButtonElement>;
};

export const handleToggle = ({ isToggled, setIsToggled, elementsToHide, elementsToShow, buttonRef }: HandleToggleProps) => {
  if (!isToggled) {
    // Animasi pertama kali tombol diklik (Teks 1 menghilang, Teks 2 muncul)
    anime
      .timeline({
        easing: "easeOutExpo",
        duration: 500,
      })
      .add({
        targets: elementsToHide.current?.children,
        opacity: [1, 0],
        translateY: -50, // Menghilangkan teks pertama ke atas
        delay: anime.stagger(100),
        complete: () => {
          if (elementsToHide.current) {
            elementsToHide.current.classList.add("hidden"); // Sembunyikan teks 1
          }
        },
      })
      .add({
        targets: elementsToShow.current?.children,
        opacity: [0, 1],
        translateY: [50, 0], // Munculkan teks kedua dari bawah
        delay: anime.stagger(100),
      })
      .add({
        targets: buttonRef.current,
        opacity: [0, 1],
        translateY: [50, 0], // Tombol muncul kembali dari bawah
      });

    if (elementsToShow.current) {
      elementsToShow.current.classList.remove("hidden"); // Tampilkan teks 2 sebelum animasi berjalan
    }
  } else {
    // Animasi ketika tombol diklik lagi (Teks 2 menghilang, Teks 1 muncul)
    anime
      .timeline({
        easing: "easeOutExpo",
        duration: 500,
      })
      .add({
        targets: elementsToShow.current?.children,
        opacity: [1, 0],
        translateY: 50, // Menghilangkan teks kedua ke bawah
        delay: anime.stagger(100),
        complete: () => {
          if (elementsToShow.current) {
            elementsToShow.current.classList.add("hidden"); // Sembunyikan teks 2
          }
        },
      })
      .add({
        targets: elementsToHide.current?.children,
        opacity: [0, 1],
        translateY: [-50, 0], // Munculkan teks pertama dari atas
        delay: anime.stagger(100),
      })
      .add({
        targets: buttonRef.current,
        opacity: [0, 1],
        translateY: [50, 0], // Tombol muncul kembali dari bawah
      });

    if (elementsToHide.current) {
      elementsToHide.current.classList.remove("hidden"); // Tampilkan teks 1 sebelum animasi berjalan
    }
  }

  // Toggle state
  setIsToggled(!isToggled);
};
