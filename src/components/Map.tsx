"use client"

const GMap: React.FC = () => {
    return (
      <div className=" mx-auto p-4">
        <div className="mx-auto pt-4 max-w-xl text-center">
   <div className="mx-auto inline-flex rounded-full bg-iconBg dark:bg-black px-4 py-1.5">
     <p className="text-xs font-semibold uppercase tracking-widest text-background">
         Location
     </p>
   </div>
   <h2 className="mt-6 text-3xl font-bold leading-tight font-headingFont text-iconBg dark:text-gray-200 sm:text-4xl lg:text-5xl">
   See Our Location

   </h2>
 </div>
        <div className="relative w-full h-[250px] p-4 mt-10 sm:h-[300px] md:h-[400px] lg:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7742038819847!2d88.35268677442039!3d22.550129579507693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02775d401bcfe3%3A0xf8e2b2bc79884581!2sSalon85%2C%20top%20hair%20salon%20Kolkata!5e0!3m2!1sen!2sin!4v1725560235889!5m2!1sen!2sin"
            className="absolute top-0 border border-header dark:border-gray-300 left-0 w-full p-2  h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl  shadow-lg "
            allowFullScreen
            title="Google Maps"
          ></iframe>

        </div>
      </div>
    );
  };
  
  export default GMap;
  