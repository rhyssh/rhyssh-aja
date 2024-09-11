/* eslint-disable @typescript-eslint/no-unused-vars */
import { Children } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import localfont from "next/font/local";
const Navbar = dynamic(() => import("@/components/layouts/Navbar2"));
const Footer = dynamic(() => import("@/components/layouts/Footer"));

type AppShellProps = {
  children: React.ReactNode; // The children of the AppShell component. These could be the main content of your app.  // Your app's main content goes here.  // For example, <YourComponent /> or <YourPage />.  // This component will be rendered inside the App component.  // It includes the navbar.  // The navbar is a reusable component that can be imported and used anywhere in your app.  // It's important to note that this component does not have any state or props.  // It's just a static component that renders a navbar.  // The navbar is the navigation bar that appears at the top of your app.  // It includes links to different pages.  // The links are generated dynamically based on the routes defined in your Next.js app.  // The AppShell component is a reusable component that can be used anywhere in your app.  // It includes the navbar and the main content of your app
};

const mona = localfont({
  src: [
    {
      path: "../../../../public/fonts/Mona-Sans.woff2",
      weight: "400",
    },
  ],
  variable: "--font-mona",
});

const disableNavbar = ["/auth/login", "/auth/register", "/404"];
const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  //   console.log(pathname);
  return (
    <main className={` ${pathname === "/404" ? "bg-white" : "bg-neutral-800"} ${mona.className}`}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {!disableNavbar.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;
