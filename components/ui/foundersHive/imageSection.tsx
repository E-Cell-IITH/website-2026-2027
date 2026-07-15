import Image from 'next/image';
export default function ImageSection() {

  return (
    <section>
      <h2 className="text-4xl text-center mb-8 md:mb-16 md:text-4xl font-serif italic text-white tracking-tight">
           Highlights
         </h2>
     <div className="flex flex-col mx-8 gap-y-10 gap:10 md:flex-row md:gap-20 justify-center items-center mb-10">
      
        <Image
       src="/founderHive/foundersHive1.jpeg"
       alt="bengaluru ed"
       width={450}
       height={360}
       />
       <Image
       src="/founderHive/foundersHive2.jpeg"
       alt="bengaluru ed"
       width={450}
       height={360}
       />
       </div>  
    </section>
  );
}