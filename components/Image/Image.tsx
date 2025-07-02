"use client";
import Image from "next/image";
import { useState } from "react";
import { CloseIcon } from "../icons/icons";

export const ProfilePic = () => {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setProfileImageLoaded(true);
  };
  return (
    <>
      {profileImageLoaded && (
        <div className="h-screen w-screen bg-black z-100 fixed top-0 left-0 flex justify-center items-center ">
          <div className="right-12 top-8 absolute z-50">
            <CloseIcon
              onClick={() => {
                setProfileImageLoaded(false);
              }}
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="text-2xl flex items-center gap-4 text-center">
              <h1>Hello</h1>
              <h1 className="text-red-900">नमस्ते</h1>
              <h1>你好</h1>
              <h1 className="text-red-900">Hola</h1>
              <h1>Bonjour</h1>
              <h1 className="text-red-900">你好 (Nǐ hǎo)</h1>
            </div>
            <Image
              onClick={handleImageLoad}
              src="/profile.jpeg"
              alt="profile"
              height={400}
              width={400}
              className="rounded-xl  object-cover hover:opacity-90 transition-all duration-300 ease-in-out cursor-pointer"
            ></Image>
          </div>
        </div>
      )}
      <Image
        onClick={handleImageLoad}
        src="/profile.jpeg"
        alt="profile"
        width={140}
        height={140}
        className="rounded-xl border-red-900 border-2 object-cover hover:opacity-90 transition-all duration-300 ease-in-out cursor-pointer"
      ></Image>
    </>
  );
};
