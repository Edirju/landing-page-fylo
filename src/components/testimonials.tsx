import { testimonials } from "../common/constants";
import type { Testimonial } from "../types/type";
import { TestimonialCard } from "./testimonial-card";

export const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-6 relative w-[320px] md:w-120 mx-auto xl:flex-row xl:w-230">
      <img src="/images/bg-quotes.png" alt="image quote" className="absolute left-2 top-0 w-8" />
      {
        testimonials.map((testimonial: Testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))
      }
    </div>
  )
}


// testimonials.map(({ name, role, image, quote }: Testimonial) => (
//   <TestimonialCard 
//     key={name}
//     name={name} 
//     role={role} 
//     image={image} 
//     quote={quote} 
//   />
// ))