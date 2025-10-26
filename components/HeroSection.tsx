import React, { useState, useEffect } from 'react';

const slideImages = [
  'https://i.postimg.cc/XqhPV2k7/6537fa95928c2-tumblr-nd9ofw-JRI01toe5dro2-400-2-2.gif',
  'https://i.postimg.cc/QCPzX6JH/1662621399-7-titis-org-p-huge-black-penis-krasivaya-erotika-10-300x226.jpg',
  'https://i.postimg.cc/XqhPV2kd/big-dick-gifs-lpsg-001-2-2-2.webp'
];

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  // Parallax scroll effect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for Countdown Timer
  useEffect(() => {
    const countdownEndDate = new Date().getTime() + 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownEndDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Effect for Image Slideshow
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slideImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);


  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"
        style={{ backgroundPositionY: offsetY * 0.2 + 'px' }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-2xl max-h-2xl bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide text-shadow-lg">
              The Fastest Way to Cure Quick Ejaculation and Erectile Dysfunction
              <span className="block text-yellow-400 mt-4 text-2xl md:text-3xl normal-case italic">
                "I was able to last up to 40 minutes after 2 years of sexual incapacity"
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
              <strong>First of all, congratulations on discovering this page.</strong> You’re just one step away from a permanent solution to your poor sexual performance.
            </p>

            {/* Countdown Timer */}
            <div className="my-8">
              <p className="text-center md:text-left text-lg text-gray-300 mb-2 uppercase tracking-wider font-semibold">
                LIMITED TIME OFFER - SALE ENDS IN:
              </p>
              <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
                <div className="text-center bg-black/30 backdrop-blur-sm p-3 rounded-lg min-w-[70px] sm:min-w-[80px] border border-gray-700">
                  <span className="text-3xl sm:text-4xl font-bold text-yellow-400">{formatTime(timeLeft.hours)}</span>
                  <span className="block text-xs text-gray-400 mt-1">Hours</span>
                </div>
                <div className="text-center bg-black/30 backdrop-blur-sm p-3 rounded-lg min-w-[70px] sm:min-w-[80px] border border-gray-700">
                  <span className="text-3xl sm:text-4xl font-bold text-yellow-400">{formatTime(timeLeft.minutes)}</span>
                  <span className="block text-xs text-gray-400 mt-1">Mins</span>
                </div>
                <div className="text-center bg-black/30 backdrop-blur-sm p-3 rounded-lg min-w-[70px] sm:min-w-[80px] border border-gray-700">
                  <span className="text-3xl sm:text-4xl font-bold text-yellow-400">{formatTime(timeLeft.seconds)}</span>
                  <span className="block text-xs text-gray-400 mt-1">Secs</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#order-form" className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                Order Now
              </a>
              <a href="https://wa.me/2349166945565" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-green-500/20 hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.847 6.061l-1.117 4.082 4.162-1.093z" /></svg>
                Chat on WhatsApp
              </a>
            </div>

          </div>
          <div className="relative flex justify-center items-center h-96 md:h-[500px]">
             {slideImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Hero slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain rounded-lg shadow-2xl transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;