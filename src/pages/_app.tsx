/* eslint-disable @typescript-eslint/no-unused-vars */
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
      <SessionProvider session={session}>
        <AppShell >
          <Component {...pageProps} />
        </AppShell>
      </SessionProvider>
  );
}
