import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "Find a location nearest you. See Our Stores", href: "#", isText: true },
  { label: "+1 (888) 555-0123", href: "tel:+18885550123", isText: true, bold: true },
  { label: "hello@jamilabeauty.com", href: "mailto:hello@jamilabeauty.com", isText: true },
];
const usefulLinks = [
  { label: "New Products", href: "#" },
  { label: "Best Sellers", href: "#" },
  { label: "Bundle & Save", href: "#" },
  { label: "Online Gift Card", href: "#" },
];
const infoLinks = [
  { label: "Start a Return", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Shipping FAQ", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];
const socialLinks = [
  { icon: "/x.png", alt: "Twitter", href: "#" },
  { icon: "/facebook.png", alt: "Facebook", href: "#" },
  { icon: "/instagram.png", alt: "Instagram", href: "#" },
  { icon: "/youtube.png", alt: "YouTube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-cultured-1 pt-16 pb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 text-gray-web text-base mt-24 border-t border-light-gray h-10 md:h-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-8">
          {/* Company */}
          <ul className="footer-list flex-1 mb-8 md:mb-0">
            <li className="footer-list-title font-semibold text-lg mb-2">Company</li>
            {companyLinks.map((item, i) => (
              <li key={i} className={`footer-list-text${item.bold ? ' font-bold' : ''} mb-1`}>
                {item.isText ? (
                  <span>{item.label.includes('Our Stores') ? <span>{item.label.split('See')[0]}See <Link href="#" className="text-primary underline">Our Stores</Link></span> : item.label}</span>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          {/* Useful Links */}
          <ul className="footer-list flex-1 mb-8 md:mb-0">
            <li className="footer-list-title font-semibold text-lg mb-2">Useful links</li>
            {usefulLinks.map((item, i) => (
              <li key={i} className="footer-link mb-1">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          {/* Information */}
          <ul className="footer-list flex-1 mb-8 md:mb-0">
            <li className="footer-list-title font-semibold text-lg mb-2">Information</li>
            {infoLinks.map((item, i) => (
              <li key={i} className="footer-link mb-1">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          {/* Newsletter */}
          <div className="footer-list flex-1">
            <p className="newsletter-title font-semibold text-lg mb-2">Good emails.</p>
            <p className="newsletter-text mb-4 text-sm text-gray-500">Enter your email below to be the first to know about new collections and product launches.</p>
            <form className="newsletter-form flex gap-2 mb-4">
              <input type="email" name="email_address" placeholder="Enter your email address" required className="email-field flex-1 p-3 rounded border border-light-gray" />
              <button type="submit" className="btn btn-primary bg-primary text-white px-6 py-2 rounded">Subscribe</button>
            </form>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="footer-bottom flex flex-col md:flex-row items-center justify-between gap-6 mt-12 border-t border-light-gray pt-6">
          <div className="flex items-center gap-4">
            <span className="text-sm">&copy; 2025 Jamila Beauty</span>
            <div className="flex gap-3 ml-4">
              {socialLinks.map((item, i) => (
                <Link key={i} href={item.href} className="social-link">
                  <Image src={item.icon} alt={item.alt} width={22} height={22} />
                </Link>
              ))}
            </div>
          </div>
          <Link href="/" className="logo ml-4">
            <Image src="/logo.jpg" alt="Jamila Beauty Logo" width={48} height={48} className="rounded-full object-cover" />
          </Link>
          <div className="ml-4">
            <Image src="/pay.png" width={180} height={28} alt="available all payment method" className="w-auto h-7" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
