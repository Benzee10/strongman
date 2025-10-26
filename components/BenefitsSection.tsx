import React from 'react';

const benefits = [
  {
    title: "Penis Enlargement",
    image: "https://i.postimg.cc/KzNzsWyg/long-black-cock-out-of-shorts-463x550.jpg",
    description: "STRONGMAN POWER SYRUP'S unique blend of herbs is designed to stimulate blood circulation and support healthy tissue growth, potentially leading to increased penis size over time."
  },
  {
    title: "Boost Sperm Count",
    image: "https://i.postimg.cc/gj29cSLb/Whats-App-Image-2025-04-21-at-15-10-30-bc6d92c5-1.jpg",
    description: "STRONGMAN POWER SYRUP also aid in the maturation process of sperm cells, ensuring they develop properly and have a higher chance of fertilization"
  },
  {
    title: "Last Long in Bed",
    image: "https://i.postimg.cc/XqhPV2k7/6537fa95928c2-tumblr-nd9ofw-JRI01toe5dro2-400-2-2.gif",
    description: "STRONGMAN POWER SYRUP is formulated to help you gain better control over your climax, allowing you to last longer and enjoy more satisfying intimate moments."
  },
  {
    title: "Boost Libido",
    image: "https://i.postimg.cc/HnxK1rFp/Whats-App-Image-2025-04-21-at-13-49-25-3ecefbac-1-1.jpg",
    description: "STRONGMAN POWER SYRUP incorporates potent aphrodisiac herbs known for their ability to stimulate sexual desire and enhance libido. These herbs have a long history of traditional use in promoting sexual vitality."
  },
  {
    title: "Hard Erection",
    image: "https://i.postimg.cc/mDZp7cLV/big-black-erec-6678.jpg",
    description: "The powerful herbal mixture in STRONGMAN POWER SYRUP, helps improve blood flow to the penis, resulting in stronger and firmer erections for enhanced sexual performance."
  },
  {
    title: "Extend Sexual Stamina",
    image: "https://i.postimg.cc/pr40NqDJ/dg25-1-1-1-1-1-2-1-1.gif",
    description: "With STRONGMAN POWER SYRUP, you can experience extended sexual stamina, enabling you to engage in longer-lasting intimate sessions and reach new heights of pleasure."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-yellow-400">
            Amazing Benefits of Strongman Power Syrup
          </h2>
        </div>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}
            >
              <div className={`relative rounded-lg overflow-hidden shadow-2xl h-80 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
                 <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-3xl mx-auto p-6 bg-gray-900 border-2 border-green-500/50 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-3">Your Health is Safe</h3>
            <p className="text-lg text-gray-300">The ingredients are obtained from 100% natural sources and have been used in appropriate proportions. Strong Man Syrup has no repulsive reaction on your body system. If you already have limitations such as ulcers, etc., don’t worry. <strong className="text-green-400">Fear not, you are safe.</strong></p>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;