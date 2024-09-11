import TypeIt from "typeit-react";


const TypeOne = () => {
  return (
    <>
      <TypeIt
        getBeforeInit={(instance) => {
          instance.type("a front-end developer").pause(750).move(-10).delete(9).pause(100).type("softyare").pause(100).move(-4).type("-").pause(100).move(1).pause(500).delete(2).type("w");

          // Remember to return it!
          return instance;
        }}
      />
    </>
  );
};

export default TypeOne;
