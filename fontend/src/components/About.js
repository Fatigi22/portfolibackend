import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";
import DATAi from'../assets/images/Rules.png'
import Fa from'../assets/images/fa.png'

const data = {
  img1:DATAi ,
  img2: Fa,
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(aboutRefs);

  return (
    <div className='about container mx-auto mt-40' id='about'>
      <SectionTitle title={"About Me"} />
      <div className='about-wrapper mt-40 grid grid-cols-1 gap-20 overflow-hidden lg:grid-cols-2'>
        <div className='about-left' ref={aboutLeftRef}></div>
        <div className='about-right' ref={aboutRightRef}>
          <p>
          Bienvenue dans mon portfolio ! Je suis profondément passionné par JavaScript et son pouvoir de créer des applications web dynamiques. Mon parcours dans le développement web a commencé en juillet 2022, et depuis lors, je me suis immergé dans le développement avec la pile MERN. Apprenant constamment et repoussant mes limites, je m'épanouis en construisant des solutions innovantes. Ma curiosité insatiable me pousse à rester à jour avec les dernières évolutions, veillant à contribuer à l'avancement technologique à travers des projets impactants.
          </p>
          <p className='mt-10'>
          En tant que développeur MERN basé au beni mellal, je suis déterminé à perfectionner mes compétences et à résoudre des problèmes complexes avec logique. J'aborde chaque projet avec un engagement envers une innovation honnête, visant un impact sociétal positif. Mon objectif est non seulement de répondre aux attentes, mais de les dépasser, en offrant l'excellence dans chaque entreprise
          </p>
          <a
            className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300 inline-block mt-10'
            href=''
            target='_blank'
            rel='noreferrer'
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
