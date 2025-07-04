import React from 'react';

const LegalNewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      category: "LEGAL NEWS",
      title: "The Halted Progress Of Criminal-Justice Reform",
      views: "7k views",
      timeAgo: "1 hour ago",
      image: "/Rectangle.svg", // Replace with actual image path
      imageAlt: "Lady Justice statue with scales"
    },
    {
      id: 2,
      category: "LEGAL NEWS",
      title: "Black Lives Matter Rally Gathers In Martinez After Series Of Racist Incidents",
      views: "21 views",
      timeAgo: "1 hour ago",
      image: "/Rectangle1.svg", // Replace with actual image path
      imageAlt: "Protest signs demanding justice"
    },
    {
      id: 3,
      category: "LEGAL NEWS",
      title: "What Do The Family Law Cases Say About Unilateral Relocation.",
      views: "21 views",
      timeAgo: "1 hour ago",
      image: "Rectangle2.svg", // Replace with actual image path
      imageAlt: "Family walking together"
    }
  ];

  return (
    <section className="bg-white py-28 sm:py-20 lg:py-30 px-16">       
  <div className="max-w-7xl mx-auto">         
    {/* Header */}         
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 space-y-4 sm:space-y-0">           
      <div>             
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">               
          <span className="text-[#b3872d]">Legal</span> News             
        </h2>             
        <p className="text-gray-600 text-sm sm:text-base">Browse through various trending news from our blog posts</p>           
      </div>           
      <button className="border border-[#b3872d] text-[#b3872d] px-4 sm:px-6 py-2 rounded hover:bg-[#b3872d] hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap">             
        SEE ALL POSTS           
      </button>         
    </div>          

    {/* News Grid */}         
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">           
      {newsArticles.map((article) => (             
        <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">               
          {/* Image */}               
          <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">                 
            <img                    
              src={article.image}                    
              alt={article.imageAlt}                   
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"                 
            />                 
            <div className="absolute top-4 left-4">                                    
            </div>               
          </div>                

          {/* Content */}               
          <div className="p-4 sm:p-6 lg:p-8">                 
            <h5 className="text-gray-500 mb-3 sm:mb-4 lg:mb-6 py-1 rounded-full text-xs font-medium">                     
              {article.category}                   
            </h5>                 
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight hover:text-[#b3872d] cursor-pointer transition-colors duration-200">                   
              {article.title}                 
            </h3>                                  
            <div className="flex items-center text-xs sm:text-sm text-gray-500 space-x-3 sm:space-x-4">                   
              <span className="flex items-center">                     
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">                       
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />                       
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />                     
                </svg>                     
                {article.views}                   
              </span>                   
              <span className="flex items-center">                     
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">                       
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />                     
                </svg>                     
                {article.timeAgo}                   
              </span>                 
            </div>               
          </div>             
        </div>           
      ))}         
    </div>       
  </div>     
</section>
  );
};

export default LegalNewsSection;