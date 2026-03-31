import Container from "../../shared/ui/Container";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-bg-secondary">
      <Container>
        <div className="grid md:grid-cols-2 place-items-center gap-x-5 gap-y-10 lg:gap-x-16">
          <div className="grid self-center items-center text-center md:text-start md:pl-6 lg:pl-10">
            <h1 className="text-4xl lg:text-[3.25rem] font-extralight leading-tight pt-14 md:p-0 mb-3 tracking-wider">GOPRO HERO9 BLACK</h1>
            <p className="text-xl font-extralight leading-tight mb-9">Limited stocks available. Grab it now!</p>
            <Link
              to="/catalog"
              className="justify-self-center md:justify-self-start font-light leading-tight text-white tracking-widest w-fit px-10.5 py-4.5 bg-accent rounded-full"
            >SHOP COLLECTION
            </Link>
          </div>
          <div className="flex place-items-center pb-6 md:pb-0 max-w-90 md:max-w-none">
            <div className="grid place-items-center aspect-square bg-bg-hero rounded-full">
              <img
                src="src/shared/assets/images/hero-gopro.png"
                className="w-full max-w-150 h-auto object-cover"
                fetchPriority="high"
                alt="GoPro Hero9 Black"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
