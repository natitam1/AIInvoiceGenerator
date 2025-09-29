"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="h-screen flex">
        {/* -- scrollbar -- */}
        <div className="flex-1 flex items-center justify-center flex-col px-4 pb-8 bg-[#292a2d] text-white relative">
          <div>
            <Image
              className="rotate-180"
              src={assets.menu_icon}
              alt="Menu Icon"
            />
            <Image
              className="opacity-70"
              src={assets.chat_icon}
              alt="Menu Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
