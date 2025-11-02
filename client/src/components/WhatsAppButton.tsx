import whatsappIcon from "@assets/image_1762108089122.png";

export default function WhatsAppButton() {
  const whatsappNumber = "923120156535";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-lg transition-all group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-floating"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-7 w-7 invert" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
