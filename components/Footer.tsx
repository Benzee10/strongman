import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-10">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="flex justify-center mb-4">
             {/* <!-- SMALL PRODUCT BOTTLE IMAGE (100x100) --> */}
            <img src="https://i.postimg.cc/VvY7mxtW/strong-man-syrup-selar-co-67877ae433c44.jpg" alt="Strongman Power Syrup" className="h-20" />
        </div>
        <p className="mb-4">
          Copyright &copy; {new Date().getFullYear()} Strongman Power Syrup. All Rights Reserved.
        </p>
        <p className="mb-4">
          <a href="https://wa.me/2349166945565" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
            Contact Us on WhatsApp
          </a>
        </p>
        <p className="text-xs max-w-2xl mx-auto">
          Disclaimer: This site is not affiliated with Facebook, Inc. or any of its entities. FACEBOOK is a trademark of FACEBOOK, Inc. The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment.
        </p>
      </div>
    </footer>
  );
};

export default Footer;