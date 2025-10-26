import React from 'react';
import StockCounter from './StockCounter';

const pricingPlans = [
  {
    name: 'Starter Pack',
    bottles: '1 Bottle',
    price: '350 GHC',
    bestValue: false,
    recommended: false,
    initialStock: 68,
  },
  {
    name: 'Best Seller',
    bottles: '2 Bottles',
    price: '650 GHC',
    bestValue: true,
    recommended: false,
    discount: '-10%',
    initialStock: 27,
  },
  {
    name: 'Full Course',
    bottles: '3 Bottles',
    price: '950 GHC',
    bestValue: false,
    recommended: true,
    discount: '-20%',
    initialStock: 43,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-black relative">
       <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/gold-scale.png')"}}></div>
       <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">GET STRONGMAN SYRUP</h2>
            <p className="text-lg text-gray-300">
                In a few weeks, you’ll be getting a bottle of Strongman syrup for 650GHC, but luckily for you, it’s another discount season. Hurrah! <strong className="text-yellow-400">Today, a bottle costs just 350GHC.</strong>
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-end">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-900 rounded-lg p-6 shadow-lg border-2 transition-all duration-300 flex flex-col ${plan.bestValue ? 'border-yellow-400 transform md:scale-110' : 'border-gray-700'}`}>
               {plan.bestValue && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full">BEST SELLER</span>}
               {plan.recommended && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">RECOMMENDED</span>}

              <div className="text-center flex-grow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-xl text-gray-400 mb-4">{plan.bottles}</p>
                 {/* <!-- BOTTLE IMAGE (150x150) --> */}
                <div className="h-40 flex items-center justify-center my-4">
                  <img src="https://i.postimg.cc/VvY7mxtW/strong-man-syrup-selar-co-67877ae433c44.jpg" alt={`${plan.bottles} of Strongman Power Syrup`} className="max-h-full" />
                </div>
                <p className="text-3xl sm:text-4xl font-black text-yellow-400 my-4">{plan.price}</p>
              </div>
              <div className="mt-auto">
                <StockCounter initialCount={plan.initialStock} />
                <a href="#order-form" className="w-full block bg-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300">
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
