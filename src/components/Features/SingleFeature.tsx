import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full  p-5 shadow-two duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <div className="wow fadeInUp " data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md  bg-opacity-10 text-primary ">
          {/* <img style={{
            filter: "brightness(0) saturate(100%) invert(29%) sepia(52%) saturate(533%) hue-rotate(191deg) brightness(87%) contrast(84%"
          }} src={icon} alt={title}  /> */}
          <Image src= {icon} alt="icon"  />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
