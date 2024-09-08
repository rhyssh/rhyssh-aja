import { useSession } from "next-auth/react";

const Home = () => {
  const { data } = useSession();
  // console.log(data);
  return (
    <div>
      <h1>{data?.user?.name}</h1>
    </div>
  );
};

export default Home;
