const ShippingBanner = ({ show }: { show: boolean }) => {
  if (!show) return null;
  return (
    <div className="w-full bg-primary text-white text-center text-lg md:text-2xl font-bold flex items-center justify-center h-20">
      Free shipping on orders over R799.99
    </div>
  );
};

export default ShippingBanner;
