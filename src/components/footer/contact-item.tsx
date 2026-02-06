interface Props {
  text: string;
  iconUrl: string;
  alt: string;
  styles?: string;
}

export const ContactItem = ({ text, iconUrl, alt, styles='' }: Props) => {
  return (
    <div className={`flex gap-6 items-start ${styles}`}>
      <img src={iconUrl} alt={alt} className="mt-1" />
      <p>{text}</p>
    </div>
  );
}
