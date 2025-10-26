import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-shadow-lg mb-8">
              My Story: From 3 Minutes of Shame to 40 Minutes of Power
            </h2>
            <div className="text-lg text-gray-300 space-y-6 bg-gray-900/50 p-6 md:p-8 rounded-lg shadow-xl border border-gray-800">
                <p>Have you lost your confidence and pride as a man? A few years ago, I suffered from a weak erection and quick ejaculation that didn't even last 5 minutes. The more I tried to find a permanent, safer solution, the worse it seemed to get.</p>
                <p>First, drugs and bitter concoctions became my daily routine. They helped a little, but it wasn't a permanent solution. I didn't want irritating mixtures to be my best friend forever. I just wanted to be myself again.</p>
                <p>I spent almost <strong className="text-yellow-400">60% of my monthly income</strong> searching for help. But the financial cost wasn't what broke my heart the most.</p>
                <p className="italic text-white font-semibold">"What frustrated me the most was the fact that I couldn’t satisfy my wife. I watched her and constantly felt sorry for her, because I knew that if it had been me, I wouldn’t have put up with it any longer."</p>
                <p>I didn't last more than three minutes. I still wonder if I even lasted that long. After years of this struggle, I finally found the answer.</p>
            </div>
        </div>

        <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-yellow-400">DO YOU THINK STRONGMAN SYRUP CAN SAVE YOU? <br className="hidden md:block" /> WELL, I’M SURE IT WILL.</h2>
            <div className="flex justify-center my-10">
                {/* <!-- IMAGE PLACEHOLDER: Clean product bottle mockup (400x400) --> */}
                <div className="relative">
                    <img src="https://i.postimg.cc/VvY7mxtW/strong-man-syrup-selar-co-67877ae433c44.jpg" alt="Strongman Power Syrup" className="h-64 w-64 sm:h-80 sm:w-80 object-contain animate-float drop-shadow-2xl"/>
                    <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
             <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-300 mb-8">
                    <strong className="text-white">Strongman Power Syrup</strong> is not a temporary fix. It's the powerful, all-natural blend of ancient herbs that I discovered, scientifically proven to address the root causes of poor performance. It's safe, effective, and designed to deliver permanent results without side effects.
                </p>
                <a href="#order-form" className="inline-block bg-yellow-500 text-black font-bold py-3 px-10 rounded-full text-xl shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                    GET STRONGMAN SYRUP
                </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;