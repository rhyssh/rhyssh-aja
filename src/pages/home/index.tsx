/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSession } from "next-auth/react";
import ComingSoon from "@/components/views/ComingSoon";

const Home = () => {
  const { data } = useSession();
  // console.log(data);
  return (
    <div className="overflow-hidden">
      <ComingSoon />
    </div>
  );
};

export default Home;
