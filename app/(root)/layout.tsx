import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = await getLoggedInUser();
  return (
    <main className="flex w-full font-inter h-screen">
      <Sidebar user={loggedInUser} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} alt="logo" width={30} height={30} />
          <div className="">
            <MobileNavbar user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
