"use client";
import Image from "next/image";
import Text from '../components/Text';



export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
    <div className="rounded-2xl bg-white p-4 border-2 border-black w-1/5 text-center shadow-xl shadow-black mx-auto ">
      <Image src={"/illustration-article.svg"} width={500} height={100} alt="html" className="rounded-2xl text-center py-4" />
      <Text />
      </div>
      </div>
    </>
  );
}


