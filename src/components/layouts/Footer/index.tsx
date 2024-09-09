import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterC = () => {
  return (
    <Footer className="w-full bg-neutral-600 px-4 py-6 sm:flex sm:items-center sm:justify-between rounded-none">
      <FooterCopyright href="#" by="ReikiAziz" year={2024} />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center transition-colors">
        <FooterIcon href="#" icon={BsFacebook} className="hover:text-blue-600" />
        <FooterIcon href="https://www.instagram.com/reikiaziz/" icon={BsInstagram} className="hover:text-violet-500" />
        <FooterIcon href="#" icon={BsTwitter} className="hover:text-primary-500" />
        <FooterIcon href="https://github.com/rhyssh" icon={BsGithub} className="hover:text-white" />
      </div>
    </Footer>
  );
};

export default FooterC;
