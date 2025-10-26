import React from 'react';
import { Icons } from '../constants';

const SealOfQualitySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Our Commitment to Quality & Discreet Delivery</h2>
          <p className="mt-4 text-lg text-gray-400">We stand behind our product and respect your privacy. Here's our promise to you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Quality Seal */}
          <div className="bg-gray-800/50 p-8 rounded-lg border border-yellow-500/30 text-center flex flex-col items-center">
            <Icons.shieldCheck className="h-20 w-20 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Seal of Quality</h3>
            <ul className="text-gray-300 space-y-2 text-left list-disc list-inside">
              <li>100% Natural Herbal Ingredients</li>
              <li>Safe for Ulcer Patients & No Side Effects</li>
              <li>Manufactured in a Certified Facility</li>
              <li>Backed by a 30-Day Money-Back Guarantee</li>
            </ul>
          </div>

          {/* Discreet Delivery */}
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 text-center flex flex-col items-center">
             <Icons.truck className="h-20 w-20 text-yellow-400 mb-4" />
             <h3 className="text-2xl font-bold mb-3">Discreet & Fast Delivery</h3>
              <div className="my-4">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANdGcRFbbW0TOQLwtJpDptzArgnR5-JQcv_9raofA&s" alt="Discreet delivery box" className="h-24 mx-auto"/>
              </div>
             <ul className="text-gray-300 space-y-2 text-left list-disc list-inside">
              <li>Delivered in Plain, Unmarked Packaging</li>
              <li>Free Delivery Nationwide</li>
              <li>Shipped Within 48 Hours</li>
              <li>Pay on Delivery for Your Convenience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SealOfQualitySection;
