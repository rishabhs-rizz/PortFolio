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
      </div>
    </div>
  );
}
