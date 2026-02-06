interface Props {
  name: string;
  role: string;
  image: string;
  quote: string;
} 

export const TestimonialCard = ({name,role,image,quote}: Props) => {
  return (
    <div className="bg-Navy-850 rounded-sm p-6">
      <blockquote className="text-xs mb-4">{quote}</blockquote>
      <div className="flex items-center gap-2">
        <img src={image} alt={name} className="size-8 rounded-full" />
        <div className="">
          <h3 className="font-raleway font-bold text-xs">{name}</h3>
          <p className="font-open-sans font-normal text-[.625rem]">{role}</p>
        </div>
      </div>
    </div>
  );
}
