import React, { useState } from 'react';

const OrderSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    whatsapp: '',
    quantity: '1 Bottle - 350 GHC',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullName, address, whatsapp, quantity } = formData;
    const WHATSAPP_NUMBER = '2349166945565'; 

    const message = `
Hello, I'd like to order Strongman Power Syrup.

*My Order Details:*
*Full Name:* ${fullName}
*Delivery Address:* ${address}
*WhatsApp Number:* ${whatsapp}
*Quantity:* ${quantity}

Please confirm my order. Thank you!
    `.trim().replace(/\n\s*\n/g, '\n'); // Remove extra blank lines for cleaner formatting

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="order-form" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Place Your Order Now</h2>
            <p className="text-gray-400 mb-6">Fill the form below. Your order details will be sent to us on WhatsApp.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:ring-yellow-500 focus:border-yellow-500" 
                  placeholder="e.g. John Doe" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-300">Delivery Address</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:ring-yellow-500 focus:border-yellow-500" 
                  placeholder="Your full address" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300">WhatsApp Number</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp" 
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:ring-yellow-500 focus:border-yellow-500" 
                  placeholder="e.g. 024xxxxxxx" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">Quantity</label>
                <select 
                  id="quantity" 
                  name="quantity" 
                  value={formData.quantity}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:ring-yellow-500 focus:border-yellow-500"
                  required
                >
                  <option>1 Bottle - 350 GHC</option>
                  <option>2 Bottles - 650 GHC</option>
                  <option>3 Bottles - 950 GHC</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:bg-yellow-400 transition-colors duration-300 mt-6 transform hover:scale-105">
                Get My Strongman Syrup Now
              </button>
            </form>
          </div>
          <div className="text-center">
             {/* <!-- DELIVERY BOX MOCKUP (400x250) --> */}
             <div className="w-full max-w-md mx-auto h-64 bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center mb-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANdGcRFbbW0TOQLwtJpDptzArgnR5-JQcv_9raofA&s" alt="Discreet delivery box" className="h-48"/>
             </div>
            <p className="text-xl font-bold text-yellow-400">Free Delivery Nationwide</p>
            <p className="text-gray-300">Your order will be delivered discreetly within 48 hours. Pay on delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;