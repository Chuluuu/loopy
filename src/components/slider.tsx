import React from 'react';
import Image from 'next/image';
import blurCyanImage from '@/images/blur-cyan.png';
import fimage0 from '@/images/slides/image.png';
import fimage1 from '@/images/slides/image1.png';
import fimage2 from '@/images/slides/image2.png';
//import simage0 from '@/images/slides/tech-image1.png';
import simage1 from '@/images/slides/tech-image2.png';
import simage2 from '@/images/slides/tech-image3.png';
import simage3 from '@/images/slides/tech-image4.png';
import simage4 from '@/images/slides/tech-image5.png';
import timage0 from '@/images/slides/tech-home-slide-2-img-2.png';
import timage1 from '@/images/slides/tech-home-slide-2-img-3.png';
import timage2 from '@/images/slides/tech-home-slide-2-img-4.png';

const FirstSlide = () => (
  <>
  <div className="relative z-10 md:text-center lg:text-left">
    <Image
      className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
      src={blurCyanImage}
      alt=""
      width={530}
      height={530}
      unoptimized
      priority
    />
    <div className="relative animate-fade-scale">
      <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display font-proxyma text-3xl tracking-tight text-transparent">
        Ideas That Go Beyond Borders
      </p>
      <p className="mt-3 font-proxyma text-2xl tracking-tight text-slate-400">
      Инновацаар ирээдүйгээ өөрчилж, дэлхийтэй хөл нийлүүлэн хөгжицгөөе!
      </p>
      {/* //Бид бүхэн тань хил хязгаарыг давсан санаанууд, шинэлэг боломжуудыг санал болгож байна.  */}
    </div>
    </div>
    <div className="w-full relative flex justify-center align-middle mt-8">
      {/* Main Image */}
      <div className="animate-fade-scale transition-all duration-800 ease-in-out transform hover:scale-110 w-[65%]">
        <Image src={fimage0} alt="first" />
      </div>
      <div
        className="absolute animate-fade-and-move1 top-[8%] left-[30%] transition-all duration-1500 ease-in-out transform hover:scale-110 w-[25%]"
      >
        <Image src={fimage1} alt="second" />
      </div>
      <div
        className="absolute animate-fade-and-move top-[12%] left-[60%] transition-all duration-1500 ease-in-out transform hover:rotate-12 w-[20%]"
      >
        <Image src={fimage2} alt="third" />
      </div>
    </div>
    </>
);

const SecondSlide = () => (
  <>
  <div className="relative z-10 md:text-center lg:text-left">
    <Image
      className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
      src={blurCyanImage}
      alt=""
      width={530}
      height={530}
      unoptimized
      priority
    />
    <div className="relative animate-fade-scale">
      <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display font-proxyma text-3xl tracking-tight text-transparent">
        Fast, Reliable & Efficient Solutions 
      </p>
      <p className="mt-3 font-proxyma text-2xl tracking-tight text-slate-400">
        Бид хурдан, найдвартай, үр ашигтай шийдлүүдээр таны бизнесийг амжилттай хөгжүүлэхэд тусална.
      </p>
    </div>
  </div>
  <div className="relative flex justify-center align-middle h-[50%]">
    <div className="w-[60%] animate-fade-scale hover:scale-110 transition duration-800 ease-in-out">
      <Image src={simage1} alt="second-slide-image-1" />
    </div>
    <div className="absolute z-50 animate-fade-and-move2 top-[-10%] left-[45%] w-[15%] hover:scale-110 transition-all duration-1000 ease-in-out">
      <Image src={simage2} alt="second-slide-image-2" />
    </div>
    <div className="absolute z-40 animate-fade-and-move3 top-[-35%] left-[45%] w-[15%] hover:rotate-12 transition duration-800 ease-in-out">
      <Image src={simage3} alt="second-slide-image-3" />
    </div>
    <div className="absolute z-30 animate-fade-and-move4 top-[-30%] right-[15%] w-[70%] hover:scale-110 transition-all duration-800 ease-in-out">
      <Image src={simage4} alt="second-slide-image-4" />
    </div>
  </div>
  </>
);

const ThirdSlide = () => (
  <>
   <div className="relative z-10 md:text-center lg:text-left">
    <Image
      className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
      src={blurCyanImage}
      alt=""
      width={530}
      height={530}
      unoptimized
      priority
    />
    <div className="relative animate-fade-scale">
      <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display font-proxyma text-3xl tracking-tight text-transparent">
        A 24/7 Available Support
      </p>
      <p className="mt-3 font-proxyma text-2xl tracking-tight text-slate-400">
      Бид таны байгууллагыг бүх цаг үед дэмжин ажиллахад бэлэн. Та бидэнд итгэж, бүх асуудлаа даатгаж бидэнд хандаарай.
      </p>
    </div>
  </div>
  <div className="relative flex justify-center align-middle">
    <div className="w-[25%] animate-fade-scale top-4 hover:scale-110 transition duration-800 ease-in-out">
      <Image src={timage0} alt="third-slide-image-1" />
    </div>
    <div className="absolute animate-fade-and-move5 top-[43%] left-[30%] w-[30%] hover:scale-110 transition-all duration-1000 ease-in-out">
      <Image src={timage1} alt="third-slide-image-2" />
    </div>
    <div className="absolute animate-fade-and-move6 top-[15%] left-[60%] w-[17%] hover:rotate-12 transition duration-1000 ease-in-out">
      <Image src={timage2} alt="third-slide-image-3" />
    </div>
  </div>
  </>
);

const Slider = ({ index }: { index: number }) => {
  return (
    <div className="mx-auto h-[24rem] md:h-[28rem] lg:h-96 grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-10xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12 ">
      {index === 0 && <FirstSlide />}
      {index === 1 && <SecondSlide />}
      {index === 2 && <ThirdSlide />}
    </div>
  );
};

export default Slider;
