import React from "react";

const ShippingInfoPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16">
      <h1 className="text-3xl font-bold mb-8">Shipping Information</h1>
      <div className="bg-gray-50 rounded-lg p-6 shadow-md max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Shipping Rates</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Flat Rate Shipping: <span className="font-semibold">R150</span></li>
          <li>Free Shipping on orders <span className="font-semibold">R799.99</span> and above</li>
        </ul>
        <p className="text-gray-600 mt-4">
          Orders below R799.99 are charged a flat shipping rate of R150. Orders of R799.99 or more qualify for free shipping automatically at checkout.
        </p>
      </div>
    </div>
  );
};

export default ShippingInfoPage;
