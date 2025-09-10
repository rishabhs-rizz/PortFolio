"use client";
import { useState } from "react";

export function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(
      subject || "New message from your site"
    )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;

    window.location.href = mailtoLink;
  };
  return (
    <>
      {" "}
      <div
        id="contact"
        className="support mt-12 pb-5 border-b border-neutral-400/30"
      >
        <p className="font-semibold text-xl">Get in Touch</p>
        <p className="mt-2">
          Interested in collaborating or discussing a project? I&#39;m open to
          freelance work, full-time roles, and creative partnerships. Drop a
          message—I&#39;ll get back to you soon.
        </p>
        <span className="flex gap-3 mt-3">
          <a
            data-accent-color=""
            href="https://twitter.com/messages/compose?recipient_id=1771775634513219666
"
            target="_blank"
            className="rt-Text rt-reset rt-Link rt-underline-auto"
          >
            <button className="bg-[#1D9BF0] cursor-pointer text-white py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#2e7bae]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="h-[18px] w-[18px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>{" "}
              Chat on Twitter
            </button>
          </a>
        </span>
        <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto mt-5">
          <div>
            <label className="block text-sm text-white mb-1">Your Email</label>
            <input
              type="email"
              required
              className="w-full p-2 rounded bg-black border border-[#374151] text-white"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Subject</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-black border border-[#374151] text-white"
              placeholder="Subject here"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">
              Your Message
            </label>
            <textarea
              required
              className="w-full p-2 rounded bg-black border border-[#374151] text-white"
              placeholder="Type your message here."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-white text-black font-semibold rounded cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          >
            Send message
          </button>
        </form>
      </div>
    </>
  );
}
