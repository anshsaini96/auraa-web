import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#fefefe] text-[#333] p-6 sm:p-10 rounded-xl shadow-md mt-10 mb-16 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
      <h1 className="text-3xl font-bold mb-6 text-[#2c3e50] border-b pb-2 hover:text-[#0077cc] transition-colors duration-300">Privacy Policy</h1>

      <section className="mb-6 group transition duration-300">
        <h2 className="text-xl font-semibold text-[#34495e] mb-2 group-hover:text-[#0077cc] transition-colors duration-300">1. Delivery Information</h2>
        <p className="text-gray-700 leading-7 group-hover:text-gray-900">
          We ensure secure and timely delivery of your orders within <strong>5-7 business days</strong>. Tracking details will be shared once your order is shipped.
        </p>
      </section>

      <section className="mb-6 group transition duration-300">
        <h2 className="text-xl font-semibold text-[#34495e] mb-2 group-hover:text-[#0077cc] transition-colors duration-300">2. Return Policy</h2>
        <p className="text-gray-700 leading-7 group-hover:text-gray-900">
          Returns are accepted within <strong>7 days</strong> of delivery, provided the product is unused, in its original packaging, and with tags intact.
        </p>
      </section>

      <section className="mb-6 group transition duration-300">
        <h2 className="text-xl font-semibold text-[#34495e] mb-2 group-hover:text-[#0077cc] transition-colors duration-300">3. Privacy & Data</h2>
        <p className="text-gray-700 leading-7 group-hover:text-gray-900">
          We value your privacy. Your personal data is only used for processing orders, customer service, and updates (if opted in). We never share or sell your data to third parties.
        </p>
      </section>

      <section className="mb-6 group transition duration-300">
        <h2 className="text-xl font-semibold text-[#34495e] mb-2 group-hover:text-[#0077cc] transition-colors duration-300">4. Contact</h2>
        <p className="text-gray-700 leading-7 group-hover:text-gray-900">
          For queries or concerns regarding this policy, feel free to contact us at:  
          <br />
          <strong className="text-[#0077cc] hover:underline">auraa.enquiry@gmail.com</strong>
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-8">© 2025 Auraa.store. All rights reserved.</p>
    </div>
  );
};

export default PrivacyPolicy;

