import Carousel from "./Carousel";

const Slider = () => {
  const imagesarray = [
    "./images/slider1.webp",
    "./images/slider2.webp",
    "./images/slider3.webp",
  ];

  return (
    <div className="max-w-[1900px] min-h-[20vh] mx-auto  p-2  flex justify-center pt-10 relative">
      <div className=" md:max-w-[80%]">
        <Carousel>
          {imagesarray.map((s) => (
            <img src={s} key={s} className="rounded-2xl" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
