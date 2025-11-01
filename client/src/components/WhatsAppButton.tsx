import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "923120156535";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-floating"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
