'use client';

import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'the10thwraith',
      role: 'Philippines',
      roleIcon: '/philippine.png',
      image: '/client 1.webp',
      content: 'He did a great job with my site. He went above and beyond what was initially required. I highly recommend this service.',
      rating: 5
    },
    {
      id: 2,
      name: 'salariftikhar',
      role: 'Pakistan',
      roleIcon: '/pakistan.png',
      image: '/client 2.webp',
      content: 'The seller was amazing! Communication was excellent and they shipped the product very quickly. The product itself was exactly as described and of high quality. I had a fantastic experience with this seller and would highly recommend them to anyone. Their attention to detail and customer satisfaction is unparalleled. Thank you for a great transaction!',
      rating: 5
    },
    {
      id: 3,
      name: 'elite1reseller',
      role: 'USA',
      roleIcon: '/usa.png',
      image: '/client 3.jpg',
      content: 'sohaibkhan1192 very good communicator he is very professional i will hire him again',
      rating: 5
    },
    {
      id: 4,
      name: 'elite1reseller',
      role: 'USA',
      roleIcon: '/usa.png',
      image: '/client 3.jpg',
      content: 'Again I was impressed by the ability and punctuality and service I received higly recommended will hire him again',
      rating: 5
    },
    {
      id: 5,
      name: 'umarbajwa',
      role: 'Pakistan',
      roleIcon: '/pakistan.png',
      image: '/client 4.webp',
      content: 'Very hardworking, cooperative and eager to do good things for his client. Highly Recommended.',
      rating: 5
    },
    {
      id: 6,
      name: 'slacker78',
      role: 'South Africa',
      roleIcon: '/south africa.png',
      image: '/client 5.jpg',
      content: 'Great communication and easy to work with',
      rating: 5
    },
    {
      id: 7,
      name: 'jsath18',
      role: 'USA',
      roleIcon: '/usa.png',
      image: '/client 6.webp',
      content: 'Very professional and responsive',
      rating: 5
    },
    {
      id: 8,
      name: 'sharmaseo321',
      role: 'India',
      roleIcon: '/india.png',
      image: '/client 7.jpg',
      content: 'Great Work, Appreciate their Communications and client handling ability. Recommended to Everyone.',
      rating: 5
    },
    {
      id: 9,
      name: 'figo971',
      role: 'UAE',
      roleIcon: '/united-arab-emirates.png',
      image: null,
      content: 'it was nice working with the seller I really appreciate his effort thank you',
      rating: 5
    },
    {
      id: 10,
      name: 'figo971',
      role: 'UAE',
      roleIcon: '/united-arab-emirates.png',
      image: null,
      content: 'my second other with the seller I really appreciate his work thank you sohaib',
      rating: 5
    },
    {
      id: 11,
      name: 'the_heels',
      role: 'USA',
      roleIcon: '/usa.png',
      image: '/client 8.webp',
      content: 'It is very good to work with this seller, he is really patient and let me know how things go as they go along, and will teach me how to make the site adjustments myself for if I ever want to make changes. I will make more stores from him. I recommend him very much.',
      rating: 5
    },
    {
      id: 12,
      name: 'asadmahmood05',
      role: 'Pakistan',
      roleIcon: '/pakistan.png',
      image: '/client 9.webp',
      content: 'I really like this person work, it\'s amazing and wonderful, I recommend this person to anyone.',
      rating: 5
    },
    {
      id: 13,
      name: 'asadmahmood05',
      role: 'Pakistan',
      roleIcon: '/pakistan.png',
      image: '/client 9.webp',
      content: 'Hard Worker, I appreciate this. I recommend this person.',
      rating: 5
    },
    {
      id: 14,
      name: 'asadmahmood05',
      role: 'Pakistan',
      roleIcon: '/pakistan.png',
      image: '/client 9.webp',
      content: 'He is best seo friendly tools website developer. I recommend always use him be your website content.',
      rating: 5
    },
    {
      id: 15,
      name: 'jerryfaith7',
      role: 'USA',
      roleIcon: '/usa.png',
      image: '/client 10.webp',
      content: 'It was great working with you to get this website built, you went above and beyond. I hope to see some results on how successful this will be.',
      rating: 5
    },
    {
      id: 16,
      name: 'walshkhan',
      role: 'Pakistan',
      roleIcon: '/pakistan.png',
      image: '/client 11.jpg',
      content: 'He did exactly according to the requirements. Very professional and enthusiastic guy. I would love to work with him again',
      rating: 5
    },
    {
      id: 17,
      name: 'digitalsaler',
      role: 'Saudi Arabia',
      roleIcon: '/saudia.png',
      image: '/client 12.webp',
      content: 'recommended I am happy to work with shoiab',
      rating: 5
    },
    {
      id: 18,
      name: 'hammerrec',
      role: 'USA',
      roleIcon: '/usa.png',
      image: '/client 13.webp',
      content: 'Great Provider, Did Exactly Asked Service For. Professional, Honest, Knowledgeable, Willing To Assist Any Way. Will Most Certainly Hire Again',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timerId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timerId);
  }, [isPaused, testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#412B6B] to-[#211832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#F25912] mx-auto mb-8"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div>
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div
              key={currentIndex}
              className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg transition-all duration-700 ease-out will-change-transform"
            >
              <div className="flex justify-center mb-4 md:mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-xl md:text-2xl ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <blockquote className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-3 md:gap-4">
                {testimonials[currentIndex].image ? (
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
                ) : (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5C3E94] flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                    {testimonials[currentIndex].name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-[#5C3E94] text-base md:text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <div className="flex items-center gap-2">
                    {testimonials[currentIndex].roleIcon && (
                      <img 
                        src={testimonials[currentIndex].roleIcon} 
                        alt="Country flag" 
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    )}
                    <p className="text-sm md:text-base text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#5C3E94] text-white p-2 md:p-3 rounded-full hover:bg-[#412B6B] hover:scale-110 transition-all duration-300 z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#5C3E94] text-white p-2 md:p-3 rounded-full hover:bg-[#412B6B] hover:scale-110 transition-all duration-300 z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center mt-6 md:mt-8 gap-2 flex-wrap max-w-md mx-auto">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex ? 'bg-[#5C3E94]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;