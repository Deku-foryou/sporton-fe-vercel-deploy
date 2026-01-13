import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto pt-[250px] h-screen flex">
      <div className="relative self-center">
        <div className=" relative pl-40 w-full">
          <div className="text-primary italic ">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-[90px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-10 leading-loose">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-5">
            <Button>
              Explore More <FiFastForward />{" "}
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />{" "}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
