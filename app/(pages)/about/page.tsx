import React from 'react';
import Image from 'next/image';
import { Search, FileText, Users, GraduationCap } from 'lucide-react';

const page = () => {
    const steps = [
    {
      id: 1,
      title: "Search for a lawyer",
      description: "Find a lawyer and get a consultation time"
    },
    {
      id: 2,
      title: "Know exactly what you'll pay up front",
      description: "No hourly rates, just a fixed price."
    },
    {
      id: 3,
      title: "Your payment is released to the Lawyer",
      description: "once you're pleased and approve the work you got."
    },
    {
      id: 4,
      title: "An opportunity to get your legal needs done",
      description: "faster, with confidence"
    }
  ];


  return (
    <>
    <section className="py-46 px-7 ">
      <div className="max-w-6xl mx-auto">

         {/* Header */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-black mb-2">Tailored-to-fit-you</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#b3872d] mb-6">
            LEGAL SERVICES
          </h2>
          
        </div>

        {/* Main Content Area */}
        <div className="relative space-x-16">
          {/* Dotted Pattern Image */}
          <div className="absolute left-0 -top-20 hidden lg:block">
            <Image 
                src="/dots.svg"
                alt="LegalX Logo" 
                width={100}
                height={100}
                className="mb-4  object-contain"
                priority
            />
            
          </div>

          {/* Steps Grid */}
          <div className="lg:ml-32 mt-26">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Find A Lawyer - Featured Card */}
          <div className="bg-black shadow-lg text-white rounded-xl p-8 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border border-[#b3872d] flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Find A Lawyer</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Find, select and compare attorneys and law firms. You can 
              also ask a legal specialist and get experienced answers.
            </p>
          </div>

          {/* Get Legal Documents */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border border-[#b3872d] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#b3872d]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Get Legal Documents</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Browse through collections of legal documents and make 
              purchase online.
            </p>
          </div>

          {/* Find Lawyers and firms */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border border-[#b3872d] flex items-center justify-center">
                <Users className="w-6 h-6 text-[#b3872d]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Find Lawyers and firms</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Get tested and trusted Craft and merchant services right 
              from your comfort.
            </p>
          </div>

          {/* Learn in the academy */}
          <div className="bg-[#b3872d] shadow-lg text-white rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border border-black flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl text-black font-semibold">Learn in the academy</h3>
            </div>
            <p className="text-black leading-relaxed">
              You can learn new skills in our academy and become a 
              professional in anything.
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
     



     {/* HOW IT WORKS */}
     <section className=" px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-black mb-2">How it works</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            get <span className="text-gray-900">LEGAL SERVICES IN </span>
            <span className="text-[#b3872d]">four (4) steps</span>
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Our platform provides a transparent and increased access to justice while 
            improving work opportunities for lawyers thus maximising the untapped potential 
            in the Nigerian legal workforce.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative space-x-16">
          {/* Dotted Pattern Image */}
          <div className="absolute left-0 -top-20 hidden lg:block">
            <Image 
                src="/dots.svg"
                alt="LegalX Logo" 
                width={100}
                height={100}
                className="mb-4  object-contain"
                priority
            />
            
          </div>

          {/* Steps Grid */}
          <div className="lg:ml-48 mt-26">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start gap-4">
                  {/* Step Number */}
                  <div className='w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center'>
                  <div className="flex-shrink-0 w-8 h-8 bg-[#b3872d] shadow-xl shadow-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.id}</span>
                  </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1">
                    <h4 className="text-xs font-semibold text-black ">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* Meet Our Lawyer */}
<section className="py-12 md:py-28 px-4 md:px-7 min-h-screen">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="mb-8 md:mb-12">
      <h3 className="text-sm font-bold text-black mb-2">Meet Our</h3>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#b3872d] mb-6">
        Lawyers
      </h2>
    </div>

    {/* Main Content Area */}
    <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-start">
      {/* Dotted Pattern Image */}
      <div className="absolute left-0 -top-0 hidden lg:block">
        <Image 
          src="/dots.svg"
          alt="LegalX Logo" 
          width={100}
          height={100}
          className="mb-4 object-contain"
          priority
        />
      </div>

      {/* Statistics Section */}
      <div className="relative w-full lg:ml-auto lg:w-auto">
        {/* Background Image - Hidden on mobile */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image 
            src="/dots.svg"
            alt="Background Pattern" 
            width={300}
            height={300}
            className="object-contain opacity-20"
            priority
          />
        </div>

        {/* Statistics Content */}
        <div className="relative z-10 p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-lg bg-contain bg-center bg-no-repeat w-full lg:w-[600px] h-auto lg:h-[400px]" 
             style={{backgroundImage: "url('/Maps.svg')"}}>
          
          {/* Statistics Header */}
          <div className="mb-6 lg:mt-40 lg:ml-12">
            <p className="text-xs font-semibold text-gray-600 mb-2">OUR</p>
            <h3 className="text-lg md:text-xl font-bold text-[#b3872d]">
              STAT<span className='text-black'>ISTICS</span>
            </h3>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:mt-4">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">23+</div>
              <p className="text-xs md:text-sm text-gray-600">Active Lawyers</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">43,000+</div>
              <p className="text-xs md:text-sm text-gray-600">Issues Solved</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">15+</div>
              <p className="text-xs md:text-sm text-gray-600">Countries Visited</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">2hr 2m</div>
              <p className="text-xs md:text-sm text-gray-600">Last Advice Given</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <section className='relative w-full bg-[#13171a] py-8 md:py-12 lg:h-30 flex items-center justify-center'>
  <div className="absolute left-1/2 transform -translate-x-1/2 -top-76 md:left-20 lg:left-40 md:-top-32 lg:-top-94 md:transform-none md:translate-x-0">
    <Image 
      src="/Mask.svg"
      alt="LegalX Logo" 
      width={250}
      height={100}
      className="w-70 h-76 md:w-full md:h-full mb-4 object-contain"
      priority
    />
  </div>
  <div className="text-center md:text-left px-4 md:-ml-40 lg:-ml-78">
    <p className='text-white text-sm md:text-base'>
      Genevieve Craig<br/>
      <span className='text-gray-300'>Business Law Expert | Since 2010</span>
    </p>
  </div>
</section>
    </>
  );
};

export default page;