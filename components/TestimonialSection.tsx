import React from 'react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Chinedu',
    location: 'Lagos',
    quote: 'I lasted 40 minutes for the first time in 2 years. Thank you Strongman!',
    image: 'https://picsum.photos/seed/chinedu/100/100',
  },
  {
    name: 'Kwame',
    location: 'Accra',
    quote: 'My wife is happier than ever. My erection is rock solid and I feel like a teenager again. This stuff works!',
    image: 'https://picsum.photos/seed/kwame/100/100',
  },
  {
    name: 'Ade',
    location: 'Abuja',
    quote: 'I was skeptical, but after one week the difference was night and day. More energy, more stamina. 100% recommended.',
    image: 'https://picsum.photos/seed/ade/100/100',
  },
];

const whatsappReviews = [
  'https://i.postimg.cc/NGSYGbMX/Zld-A1os-681x1024-1-1-2-2.jpg',
  'https://i.postimg.cc/fWpZW5Lx/zf-Yias-H-675x1024-1-3-2-2.jpg',
  'https://i.postimg.cc/FzMQPF8v/NTFNKws-677x1024-1-1-2-2.jpg',
  'https://i.postimg.cc/sxkRnfqg/Ki-HVLQ0-3-2-649x1024.jpg'
];

const supportingImages = [
    'https://i.postimg.cc/Z5hcr9jB/download-11-2-1.jpg',
    'https://i.postimg.cc/52M3wHp8/download-12-2-1.jpg',
    'https://i.postimg.cc/MKB5M00V/Whats-App-Image-2021-11-25-at-9-10-43-PM1-1-1-1.jpg'
];


const StarRating: React.FC = () => (
    <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-400/50 transition-all duration-300">
        <div className="flex items-center mb-4">
            {/* <!-- USER IMAGE PLACEHOLDER (100x100) --> */}
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-400"/>
            <div>
                <p className="font-bold text-lg">{testimonial.name}, {testimonial.location}</p>
                <StarRating />
            </div>
        </div>
        <p className="text-gray-300">"{testimonial.quote}"</p>
    </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Can you imagine the reaction of some friends and a few other people when I introduced them to Strong Man Syrup?</h3>
                <p className="text-red-500 font-bold uppercase tracking-wider mb-4">SEE REAL REVIEWS…JUST TRY THIS PRODUCT AND SEE IT’S EFFECTIVENESS</p>
                <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Are Saying</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, index) => <TestimonialCard key={index} testimonial={t} />)}
            </div>

            {/* Supporting Images */}
            <div className="mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supportingImages.map((imgSrc, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-xl border-2 border-gray-700/50 transform hover:scale-105 transition-transform duration-300 bg-gray-800">
                             <img src={imgSrc} alt={`Supporting proof ${index + 1}`} className="w-full h-auto object-contain" />
                        </div>
                    ))}
                </div>
            </div>

            {/* WhatsApp Reviews Section */}
            <div className="mt-20">
                <h3 className="text-3xl font-bold text-center mb-10 text-yellow-400">Real WhatsApp Reviews</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {whatsappReviews.map((reviewSrc, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-xl border-2 border-gray-700/50 transform hover:scale-105 transition-transform duration-300 bg-gray-800">
                            <img src={reviewSrc} alt={`WhatsApp Review ${index + 1}`} className="w-full h-auto object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default TestimonialSection;