import { conditions, contactInfo, media, pages } from "../../common/constants";
import type { ContactInfo, Media } from "../../types/type";
import { ContactItem } from "./contact-item";
import { ListItem } from "./list-item";

export const Footer = () => {
  return (
    <footer className="pt-65 pb-15 px-6 xl:pt-45 xl:w-330 xl:mx-auto">
      <img src="/images/logo.svg" alt="logo" className="mb-10" />

      <div className=" xl:flex">
        <div className="flex flex-col gap-4 md:flex-row">
          <ContactItem styles="flex-2 "  {...contactInfo[0]} />
          <div className="flex flex-col gap-4 flex-1 xl:gap-2">
            {contactInfo.slice(1,4).map((contact: ContactInfo) => (
              <ContactItem key={contact.alt} {...contact} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-16 md:flex-row md:justify-around xl:mt-0 xl:justify-between xl:gap-16 xl:w-[40%]">
          <ul>
            {pages.map((page: string) => (
              <ListItem key={page} text={page} />
            ))}
          </ul>
          <ul>
            {conditions.map((condition: string) => (
              <ListItem key={condition} text={condition} />
            ))}
          </ul>
          <div className="flex justify-center gap-4">
            {media.map((med: Media) => (
              <div
                key={med.text}
                className="text-White hover:text-Teal-200 cursor-pointer border rounded-full size-7.5 p-0.5 flex items-center justify-center"
              >
                {med.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
