import Image from "next/image";

import logo from "@/app/images/svg/logoClient.svg";
import logoInsta from "@/app/images/svg/logoInsta.svg";
import logoYouTube from "@/app/images/svg/logoYouTube.svg";
import Link from "next/link";

interface HeaderProps {
  contactLink: string;
  loginLink: string;
  instaLink: string;
  youTubeLink: string;
}

export function Header({
  contactLink,
  loginLink,
  instaLink,
  youTubeLink,
}: HeaderProps) {
  return (
    <header className="flex justify-between bg-slate-100 xl:px-96 px-8 md:px-16 py-5 dark:bg-slate-950 dark:border-b dark:border-slate-900 flex-col md:flex-row gap-4">
      <Image alt="Logo G Client" src={logo} />
      <div className="flex items-center gap-3">
        <ul className="flex gap-3">
          <li className="transition-all duration-300 hover:text-slate-900/80 dark:hover:text-slate-500">
            <Link target="_blank" href={contactLink}>
              contato
            </Link>
          </li>
          <li className="transition-all duration-300 hover:text-slate-900/80 dark:hover:text-slate-500">
            <Link target="_blank" href={loginLink}>
              login
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-1">
          <Link target="_blank" href={instaLink}>
            <Image alt="Logo Instagram" src={logoInsta} />
          </Link>
          <Link target="_blank" href={youTubeLink}>
            <Image alt="Logo Instagram" src={logoYouTube} />
          </Link>
        </div>
      </div>
    </header>
  );
}
