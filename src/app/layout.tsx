import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Mijangwon",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className={openSans.className}>
      <body className="w-full max-w-full overflow-auto mx-auto">
        {/* 원래는 max-w-full -> max-w-xl */}
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <Navbar />
          </header>
          <main className="w-full flex justify-center bg-neutral-50 min-h-full">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
      </body>
    </html>
  );
};

export default RootLayout;
