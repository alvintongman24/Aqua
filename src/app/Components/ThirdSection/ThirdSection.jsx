// components/Navbar.jsx
"use client";
export default function CardSection() {







  const cardsData = [
    {
      id: 1,
      title: "Community Empowerment",
      description: "We work closely with local communities to provide resources, education, and support that enable them to thrive and become self-sufficient.",
      imageUrl: "https://www.open.edu/openlearn/pluginfile.php/2482858/mod_oucontent/oucontent/98073/faea83f1/063f1fc7/pwc4_fig01.jpg",
    },
    {
      id: 2,
      title: "Sustainable Development",
      description: "Our initiatives focus on sustainable practices that promote environmental conservation while improving the quality of life for community members.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FoCNS3PmIvlqKheRDU3pokhZB-9Djl1gGw&s",
    },
    {
      id: 3,
      title: "Health & Wellness",
      description: "We implement health programs that address critical issues such as clean water access, nutrition, and disease prevention to enhance overall well-being.",
      imageUrl: "https://articles.connectnigeria.com/wp-content/uploads/2022/12/health-wellness.jpeg",
    },
    {
      id: 4,
      title: "Education & Training",
      description: "Providing educational opportunities and vocational training to empower individuals with the skills needed for better employment and personal growth.",
      imageUrl: "https://assets.globalpartnership.org/s3fs-public/styles/standard_blog_banner/public/blog_post/image/11173216786_fbef7350ac_k.jpg?VersionId=DiLpqoIBDAEmXwFWHUVUASOx6RMj91pb&itok=Z5O7pEzt",
    },
    {
      id: 5,
      title: "Disaster Relief",
      description: "In times of crisis, we mobilize resources and support to assist affected communities in recovery and rebuilding efforts.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAChJuxzxvR0mc24qp4ywRo0Gz51mP_7SFIA&s",
    },
    {
      id: 6,
      title: "Advocacy & Awareness",
      description: "Raising awareness about critical social issues and advocating for policies that promote equity and justice for underserved populations.",
      imageUrl: "data:image/jpeg;base64,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",
    },
  ];
  return (
   <div className="min-h-screen p-4 md:p-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Aqua Foundation</h1>
    <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
      Empowering communities through sustainable initiatives and support systems
    </p>
    
    {/* Container with gradient edges */}
    <div className="relative">
      {/* Left fade gradient */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade gradient */}
      <div className="md:hidden absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      {/* Animated hand icon */}
      <div className="md:hidden absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg animate-bounce">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      </div>
      
      {/* Mobile scroll container */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto pb-4 px-8 snap-x snap-mandatory scrollbar-hide">
        {cardsData.map((card) => (
          // ... card content ...
          <div 
            key={card.id}
            className="flex-shrink-0 w-[85vw] md:w-auto md:flex-shrink md:snap-none md:flex-grow bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Image with gradient overlay */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img 
                src={card.imageUrl} 
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  Pillar {card.id}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5 md:p-6">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 md:w-10 h-1 bg-blue-500 mr-3"></div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{card.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 md:mb-6 text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                {card.description.length > 150 
                  ? `${card.description.substring(0, 150)}...`
                  : card.description
                }
              </p>
              
              <div className="flex justify-between items-center">
                <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center text-sm md:text-base">
                  Read More
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <span className="text-gray-400 text-xs md:text-sm">5 min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ... desktop cards ... */}
      </div>
    </div>
  </div>
</div>
  );
}