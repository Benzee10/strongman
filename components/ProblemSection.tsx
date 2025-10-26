import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tired of Weak Erections or
            <span className="text-red-600 block">Finishing Too Fast?</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-yellow-300/90">
            Let me ask you a question: did you know that <span className="font-bold text-white">65% of men in GHANA</span> are bothered by a weak or non-existent erection? Did you also know that a large proportion of men endure this embarrassing situation in silence for the rest of their lives, simply because they are unable to find a solution?
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-lg text-gray-300">
            <p>The frustration is real. You want to satisfy your partner, to feel the connection, but your body isn't cooperating. Moments of passion turn into moments of anxiety.</p>
            <p>Low confidence, stress, and the fear of failure can create a cycle that's hard to break. It affects your relationship, your self-esteem, and how you see yourself as a man.</p>
            <p className="font-bold text-white">You're not alone, and it's not your fault. It's time to reclaim your power.</p>
          </div>
          <div>
            {/* <!-- IMAGE PLACEHOLDER: Worried man on bed --> */}
            <div className="w-full h-80 bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
                <img src="https://i.postimg.cc/6p5NYP1W/signs-of-low-self-esteem-in-a-man.jpg" alt="A worried man sitting on a bed beside his partner, blurred for privacy" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>

        {/* Hard Truth Section */}
        <div className="mt-20 max-w-4xl mx-auto bg-gray-800/50 p-6 md:p-8 rounded-lg border-l-4 border-red-600 shadow-2xl">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">HERE’S A HARD TRUTH YOU NEED TO HEAR</h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>Women are crazy about a man with powerful stamina who can last a very long time. That’s why we often see men who aren't rich or handsome grabbing all the beautiful women. When you can last long, she’ll start <span className="italic font-semibold text-white">begging you to finish.</span></p>
              <p>And here’s another truth a lot of people run away from: men who can’t satisfy their wives <span className="font-bold text-red-500 uppercase">get cheated on.</span> It may be hard to accept, but it’s the truth.</p>
              <p className="p-4 bg-black/30 border border-gray-700 rounded-md">Never put yourself in a position where your wife looks for another man just because you only lasted 30 seconds. It doesn’t matter how rich you are; if you don’t satisfy her well… you risk losing her at any moment.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;