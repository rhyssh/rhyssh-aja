/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSession } from "next-auth/react";
import ComingSoon from "@/components/views/ComingSoon";
import HomeView from "@/components/views/Home";

const HomePage = () => {
  const { data } = useSession();
  // console.log(data);
  return (
    <div className="overflow-hidden min-h-screen ">

      <HomeView />
    </div>
  );
};

export default HomePage;
