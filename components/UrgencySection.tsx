import React from 'react';
import { Icons } from '../constants';

const points = [
    "Even if you spend a lot on your wife, it won’t make up for the fact that you can’t satisfy her. You don’t get that kind of satisfaction with gifts, food, or romance.",
    "Your wife does her job well, which is why you reach your orgasm on time, so why not return the favour?",
    "The longer you wait, the more likely you are to lose intimacy and happiness with your partner.",
    "Whatever your budget for a permanent solution, you’ll always spend more in the long run if you don't address the root cause now.",
];

const UrgencySection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-gray-900 border-2 border-yellow-500/50 rounded-lg p-6 md:p-8 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-400 uppercase tracking-wider">
            Before I Tell You About This Syrup, I Want You To Understand This
          </h2>
          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-red-900/20 border-l-4 border-red-600 rounded-md">
                <Icons.warning className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-300">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-400">
              Don’t be so confident when you’re unsure of yourself. Even with all your partner’s morality, she’s already at her breaking point. Don’t give her the space to keep thinking about how she feels when she’s with a better man. That’s why you hear comments like <span className="italic text-white">“I’m not in the mood, I’m tired...”.</span> Now you can understand, can’t you?
            </p>
            <h3 className="text-2xl font-extrabold text-white mt-6 animate-pulse">
              You have to be a man now!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;