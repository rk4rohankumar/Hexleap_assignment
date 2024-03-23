import Image from "next/image";
import Body from "../components/Landing/Body";
import SpotLight from "@/components/SpotLight/SpotLight";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex  bg-slate-100 dark:bg-[#292B32] flex-col ">
      <Navbar />
      <Body />
      <SpotLight />
    </div>
  );
}
