import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

import maraNikolic from "@assets/generated_images/Mara_Nikolic_professional_headshot_6a12e0c0.png";
import danaisaUrgelles from "@assets/generated_images/Dr_Danaisa_Urgelles_headshot_33734120.png";
import kamMalik from "@assets/generated_images/Kam_Malik_professional_headshot_a59ae5aa.png";
import kateBagoy from "@assets/generated_images/Kate_Bagoy_designer_headshot_6d566389.png";
import johnSaunders from "@assets/generated_images/John_Saunders_co-founder_headshot_b369f76c.png";
import vincentArrouet from "@assets/generated_images/Vincent_Arrouet_headshot_4dddf55e.png";
import leonDapoz from "@assets/generated_images/Leon_Dapoz_headshot_14d4ff2c.png";
import harbikDavidyan from "@assets/generated_images/Harbik_Davidyan_founder_headshot_70f04143.png";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Tariq provides great design and has a great sense of user experience and aesthetics. He delivers on time and is an overall great communicator. I highly recommend working with him.",
      author: "Mara Nikolic",
      company: "Founder, Mara99",
      image: maraNikolic,
    },
    {
      quote: "Super easy to work with Tariq, incredibly intelligent, and perceptive. He took the fumbled thoughts from my head and turned it all into a beautiful creation. I am very impressed, Tariq is extremely talented and attentive.",
      author: "Danaisa Urgelles",
      company: "Medical Doctor, BHField",
      image: danaisaUrgelles,
    },
    {
      quote: "Tariq is clearly a very talented designer. The project went smoothly, and we're happy with the outcome!",
      author: "Kam Malik",
      company: "Managing Director, LeadSense",
      image: kamMalik,
    },
    {
      quote: "Tariq is an amazing designer, delivered on time and communicated well. I asked for a few revisions after the initial concept and he got updates back to me just 24-hours later. Fully intend to hire again in the future.",
      author: "Kate Bagoy",
      company: "Principal Product Designer",
      image: kateBagoy,
    },
    {
      quote: "Amazing designer with an eye for aesthetics. I had pretty vigorous requests and he hit every single one. He was patient and highly skilled!",
      author: "John D Saunders",
      company: "Co-founder, 5fourdigital",
      image: johnSaunders,
    },
    {
      quote: "Working with Tariq is always smooth and full of empathy. The project is very high quality, and has been done in a tight schedule. I recommend working with Tariq if you want to get a fast and pro service.",
      author: "Vincent Arrouet",
      company: "Co-founder, Sunology",
      image: vincentArrouet,
    },
    {
      quote: "Excellent Webflow Development Service. I recently had the pleasure of working with Tariq on a Webflow development project, and I must say that I am thoroughly impressed with the level of service that I received. Really great! Thanks",
      author: "Leon Dapoz",
      company: "Co-Founder, Evvvolution",
      image: leonDapoz,
    },
    {
      quote: "Great designer as I love his work. Produced a great design with little time, tho would love to see what he can do with a proper heads up on a project.",
      author: "Harbik Davidyan",
      company: "Founder, Webk Agency",
      image: harbikDavidyan,
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight" data-testid="text-testimonials-title">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => {
            const quoteColor = index % 2 === 0 ? "text-primary" : "text-accent";
            return (
              <Card key={index} className="p-8 border flex flex-col" data-testid={`card-testimonial-${index}`}>
                <Quote className={`h-8 w-8 ${quoteColor} mb-4`} />
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-6 flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-bold text-base uppercase tracking-tight" data-testid={`text-testimonial-author-${index}`}>{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
