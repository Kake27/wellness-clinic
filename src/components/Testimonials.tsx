import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(2);

  const testimonials = [
    {
      text: "Dr. Anjali is extremely kind and patient. She listens carefully to all concerns and creates a completely non-judgmental space, making it easy to speak openly. Her treatment has helped me consistently over a long period, and she is truly my go-to doctor for any kind of issue.",
      author: "Mrs. Varsha Pawar"
    },
    {
      text: "When my daughter Aarohi was 3 years old she was very reluctant to take medicine especially syrup. And as parent I was frustrated to convince her for medicine. At that time I got to know about Dr. Karekar. My in laws told me to meet her as children don't hesitate while taking homeopathy medicine, and we started our association. Doctor was very friendly with Aarohi for very first time and Aarohi loved the treatment she got and medicine too. Now Aarohi is 10 years old but whenever she feels sick we meet Dr Karekar.",
      author: "Parent of Pediatric Patient"
    },
    {
      text: "I have been going to Dr. Anjali Karekar for treatment after getting sick since the past 7 to 8 years. Her medicine always makes me feel better soon. I had a lot of cough last month but my cough was cured as soon as I took her medicine.",
      author: "Mrs. Janvi Rane"
    }
  ];

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="mt-10 sm:mt-12 lg:mt-14 max-w-5xl mx-auto px-4">
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-2 sm:px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <blockquote 
                  className="relative border border-teal-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-white shadow-sm hover:shadow-md transition-shadow h-full"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="absolute -top-3 left-6 text-5xl text-teal-600/20 font-serif">"</div>
                  <p className="relative text-sm sm:text-base text-gray-700 leading-relaxed pt-4">
                    {testimonial.text}
                  </p>
                  <footer className="mt-5 text-xs sm:text-sm font-semibold text-teal-700">
                    — {testimonial.author}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white border border-teal-200 rounded-full p-2 shadow-lg hover:bg-teal-50 transition-colors z-10 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white border border-teal-200 rounded-full p-2 shadow-lg hover:bg-teal-50 transition-colors z-10 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-teal-600 w-8' 
                  : 'bg-teal-200 hover:bg-teal-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}