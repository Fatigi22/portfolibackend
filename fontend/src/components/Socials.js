import { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "",
  },
  {
    id: 2,
    title: "Instagram",
    url: "",
  },
  { id: 3, title: "Twitter", url: "" },
  {
    id: 4,
    title: "LinkedIn",
    url: "",
  },
  { id: 5, title: "GitHub", url: "" },
  { id: 6, title: "LeetCode", url: "" },
];

const Socials = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef, 2.5);

  return (
    <div
      className='socials flex gap-5 uppercase text-lg fixed left-10 top-[75%] origin-left -rotate-90 text-white/30 bg-black/30 p-5 backdrop-blur-xl z-[200]'
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target='_blank'
          rel='noreferrer'
          className='hover:text-cyan-400 duration-500'
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
