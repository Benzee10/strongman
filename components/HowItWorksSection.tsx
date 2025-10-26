import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Let Me Explain How This Syrup Works</h2>
        <p className="text-center text-lg text-gray-400 mb-10">First of all, you’ll have to get rid of your worries because, like me, your ego has been restored. Your wife can now call you ‘Odogwu’.</p>
        
        <div className="bg-black/30 p-8 rounded-lg border border-gray-700 text-lg space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">So what are the do’s and don’ts of Strong Man Syrup?</h3>
                <p className="text-white font-semibold text-xl">There are no side effects, so there are no dos and don’ts.</p>
            </div>
            
            <p>All you need is to take a <strong className="text-white">full tablespoon of the Strong man Syrup, at least an hour before you get into the business.</strong></p>
            <p>This one dose will sustain you for the next <strong className="text-white">3 days,</strong> so you are not troubled to take it daily.</p>
            <p>Observe the magic of the transformation. You’ll practically leave the 1 to 5 minutes for a new version of yourself. I’ll leave it to you to tell me how much time you’ve spent when you’ve finished.</p>
        </div>

        <div className="mt-12 text-center bg-red-900/30 border border-red-500 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-red-400">IMPORTANT NOTICE</h4>
            <p className="text-gray-300 mt-2">Unfortunately, this Strong Man Syrup is limited in quantity each time due to high demand. Every time I feel sad, I remind myself, “Who hasn’t loved the best thing before?”</p>
        </div>
        
        <div className="mt-16">
            {/* <!-- HERBAL INGREDIENT FLAT-LAY PHOTO (800x400) --> */}
            <div className="w-full max-w-4xl mx-auto h-64 bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
                <img src="https://i.postimg.cc/Z5hcr9jB/download-11-2-1.jpg" alt="Natural herbal ingredients" className="w-full h-full object-cover"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;