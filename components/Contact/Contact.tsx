import { Github, Mail, Twitter } from "../icons/icons";

export function Contact() {
  return (
    <>
      {" "}
      <div className="support mt-12 pb-5 border-b border-neutral-400/30">
        <p className="font-semibold text-xl">Get in Touch</p>
        <p className="mt-2">
          Interested in collaborating or discussing a project? I’m open to
          freelance work, full-time roles, and creative partnerships. Drop a
          message—I'll get back to you soon.
        </p>
        <div className="sponsors flex flex-wrap items-center gap-2 mt-3.5">
          <Github />
          <Twitter />
          <Mail />
        </div>
      </div>
    </>
  );
}
