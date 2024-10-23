import Image from "next/image";


  
export default function Features(){
  return (
    <div className="bg-white flex flex-wrap items-center justify-center sm:w-full md:w-[73%]  mx-auto ">
    <div className="flex items-center justify-center mt-20 ml-96 sm:ml-0 gap-10 ">
      <Image width={700} height={700} alt='logo1' src='/Features3.png' className='h-10  w-48 '/>
        <Image width={700} height={700} alt='logo1' src='/Features1.png' className='h-10  w-48'/>
        <Image width={700} height={700} alt='logo1' src='/Features2.png' className='h-10 w-48 '/>
        <Image width={700} height={700} alt='logo1' src='/Features4.png' className='h-10  w-48'/>
      </div>
    </div>
  );
};
