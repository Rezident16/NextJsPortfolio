import Image from "next/image";

const HeroComponent = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I am Andrei
          </h1>
          <p className="text-white text-lg lg:text-xl">
            I am a Full Stack Developer
          </p>
        </div>
        <div className="col-span-5">
        <Image alt="" src="/images/personal.png" width={500} height={500} />
          </div>
      </div>
    </section>
  );
};

export default HeroComponent;
