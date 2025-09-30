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
        {/* -- scrollbar for md screen sizes -- */}
        <div className="flex-1 flex items-center justify-center flex-col px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
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
          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image className="h-16" src={assets.logo_icon} />
                <p className="text-2xl font-medium">Hi, I'm DeepSeek.</p>
              </div>
              <p className="text-sm mt-2">How can I help you today?</p>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
