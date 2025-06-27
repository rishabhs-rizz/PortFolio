import Image from "next/image";
import { Twitter, LinkedIn, Github, Mail } from "@/components/icons/icons";

export default function PortFolio() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="bg-black w-3xl mt-10">
        <div className="prof-sec flex gap-3">
          <Image
            src="/profile.jpeg"
            alt="profile"
            width={140}
            height={140}
            className="rounded-xl border-red-900 border-2"
          ></Image>
          <div className="mt-3">
            <p className="font-semibold text-3xl">Rishabh Shukla</p>
            <p>Software Engineer</p>
            <div className="tags flex gap-2 mt-3.5">
              <Github />
              <Twitter />
              <LinkedIn />
              <Mail />
            </div>
          </div>
        </div>

        <div className="about mt-10">
          <p className="font-semibold text-xl">About Me</p>
          <p className="mt-2">
            20, reading fuels me - but building grounds me.
          </p>
          <p>
            I just write code, break it, learn fast, make it happen, repeat.
          </p>
          <p>
            Deeply intrested in Cricket, history, Video Editing and business
            insights as well.
          </p>
          <span className="flex gap-4 mt-5">
            <button className="relative px-6 py-2 rounded-xl text-white font-semibold border border-transparent overflow-hidden cursor-pointer group z-10 bg-black">
              <span className="absolute inset-0 rounded-xl border-[3px] border-white hover:border-transparent transition-all duration-700">
                <span className="absolute inset-0 animate-spin rounded-xl border-[3px] border-transparent border-t-pink-500 border-l-yellow-400 border-b-green-400 border-r-blue-500 blur-sm"></span>
              </span>

              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-xl"></span>

              <span className="relative z-10">Book a meet</span>
            </button>
            <button className="relative px-6 py-2 rounded-xl text-white font-semibold border border-transparent overflow-hidden cursor-pointer group z-10 bg-black">
              <span className="absolute inset-0 rounded-xl border-[3px] border-white hover:border-transparent transition-all duration-700">
                <span className="absolute inset-0 animate-spin rounded-xl border-[3px] border-transparent border-t-pink-500 border-l-yellow-400 border-b-green-400 border-r-blue-500 blur-sm"></span>
              </span>

              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-xl"></span>

              <span className="relative z-10">Get in Touch</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
