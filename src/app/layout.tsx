import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ouroom",
  description: "아우름 | SNS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className={openSans.className}>
      <body className="w-full bg-neutral-50 overflow-auto">
        {/* 원래는 max-w-full -> max-w-screen-xl */}
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <div className="max-w-screen-xl mx-auto">
              <Navbar />
            </div>
          </header>
          <main className="max-w-screen-xl w-full flex justify-center mx-auto">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
};

export default RootLayout;
