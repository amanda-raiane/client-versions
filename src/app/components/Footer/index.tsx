import Image from "next/image";
import Link from "next/link";

import logo from "@/app/images/svg/logoClient.svg";
import logoInsta from "@/app/images/svg/logoInsta.svg";
import logoYouTube from "@/app/images/svg/logoYouTube.svg";

export function Footer() {
  const contactLink =
    "https://api.whatsapp.com/send?phone=5544997046569&text=Olá, estava no site de novidades do Client e quero saber mais.";
  return (
    <footer className="px-5 2xl:px-64 py-5 flex justify-between md:items-center dark:bg-slate-950/80 border-t dark:border-slate-900 border-slate-300 dark:text-slate-50 flex-col items-start gap-5 md:flex-row bg-slate-200">
      <div>
        <Image alt="Logo G Client" src={logo} className="sm:w-40 w-28" />
        <span className="mt-2 font-bold dark:text-slate-300 text-slate-900 flex items-center gap-1 text-sm sm:text-base">
          by Codifica Dev <div className="w-2 h-2 rounded-full bg-orange-600" />
        </span>
      </div>
      <div className="flex items-center gap-3">
        <ul className="flex gap-3">
          <li className="transition-all duration-300 hover:text-slate-900/80 dark:hover:text-slate-500">
            <Link target="_blank" href={contactLink}>
              contato
            </Link>
          </li>
          <li className="transition-all duration-300 hover:text-slate-900/80 dark:hover:text-slate-500">
            <Link target="_blank" href={"https://client.primorgroup.com.br/"}>
              login
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-1">
          <Link target="_blank" href={"https://www.instagram.com/codificadev/"}>
            <Image alt="Logo Instagram" src={logoInsta} />
          </Link>
          <Link target="_blank" href={"https://www.youtube.com/@codificadev"}>
            <Image alt="Logo Instagram" src={logoYouTube} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
