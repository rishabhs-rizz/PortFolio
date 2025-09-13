"use client";
import Image from "next/image";
import { useState } from "react";
import { CloseIcon } from "../icons/icons";

export const ProfilePic = () => {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
  const handleImageLoad = () => setProfileImageLoaded(true);

  return (
    <>
      {profileImageLoaded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <button
            className="absolute right-4 top-4 md:right-12 md:top-8 z-50"
            onClick={() => setProfileImageLoaded(false)}
          >
            <CloseIcon />
          </button>

          <div className="flex w-full h-full flex-col items-center justify-center gap-4 p-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <h1>Hello</h1>
              <h1 className="text-red-900">नमस्ते</h1>
              <h1>你好</h1>
              <h1 className="text-red-900">Hola</h1>
              <h1>Bonjour</h1>
              <h1 className="text-red-900">你好 (Nǐ hǎo)</h1>
            </div>

            <div className="w-[80%] max-w-[90vw] sm:w-[60%] md:w-[50%] lg:w-[35%]">
              <Image
                onClick={handleImageLoad}
                src="/profile.jpeg"
                alt="profile"
                width={800}
                height={800}
                className="h-auto w-full rounded-xl object-cover hover:opacity-90 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      <Image
        onClick={handleImageLoad}
        src="/profile.jpeg"
        alt="profile"
        width={140}
        height={140}
        className="rounded-xl border-2 border-red-900 object-cover hover:opacity-90 transition-all duration-300 ease-in-out cursor-pointer"
      />
    </>
  );
};
