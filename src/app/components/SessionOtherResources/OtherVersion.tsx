import Image, { StaticImageData } from "next/image";
import { LinkSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type OtherVersionProps = {
  date: string;
  version: string;
  imageUrl: StaticImageData;
  link: string;
  title: string;
};
export function OtherVersion({
  date,
  imageUrl,
  version,
  link,
  title,
}: OtherVersionProps) {
  return (
    <Link href={link}>
      <div className="border dark:border-slate-800  border-slate-300 rounded-2xl sm:px-10 sm:pt-10 px-4 pt-4 space-y-4 w-max">
        <div className="flex items-end gap-2">
          <h3 className="text-xl">{date}</h3>
          <span className="dark:text-slate-500">{version}</span>
        </div>
        <p className="dark:text-slate-300 flex items-center gap-2">
          {title} <LinkSimple color="#2563eb" />
        </p>
        <Image
          alt="print da tela de notificações do G Client"
          src={imageUrl}
          quality={100}
          className="rounded-tl-2xl rounded-tr-2xl md:w-[380px] w-[200px] m-auto"
        />
      </div>
    </Link>
  );
}
