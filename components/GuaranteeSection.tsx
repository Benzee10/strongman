import React from 'react';
import { Icons } from '../constants';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
          <div className="flex-shrink-0">
             {/* <!-- BADGE ICON PLACEHOLDER --> */}
             <Icons.badge className="h-20 w-20 sm:h-24 sm:w-24 text-black/80" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">30-Day Money-Back Guarantee</h2>
            <p className="mt-2 text-lg text-black/80 max-w-2xl">
              We are so confident in the power of Strongman Power Syrup that we offer a 100% risk-free guarantee. If you're not completely satisfied with your results within 30 days, contact us for a full refund. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
