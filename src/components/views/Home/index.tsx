// import Image from "next/image";
// import TypeIt from "typeit-react";

const HomeView = () => {
  return (
    <div className="text-white px-3 py-4">
      <div className="flex flex-col items-center">
        {/* <Image width={200} height={200} src="/images/pp.png" alt={"pp"} />
        <p className="text-3xl">
          <TypeIt
            getBeforeInit={(instance) => {
              instance.type("Hi, I'm Alxe").pause(750).delete(2).pause(500).type("ex!");

              // Remember to return it!
              return instance;
            }}
          />
        </p> */}
      </div>
    </div>
  );
};

export default HomeView;
