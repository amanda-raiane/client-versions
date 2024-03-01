import imageNotification from "@/app/images/versions/1_4_2/notificacao.png";
import { LinkSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export function SessionOtherResources() {
  return (
    <section className="2xl:px-64 px-5 lg:my-36">
      <div className="dark:bg-slate-900 bg-slate-200 p-10 rounded-2xl space-y-10">
        <h2 className="text-3xl text-center">Conheça outros recursos</h2>
        <div className="flex justify-center items-start gap-8">
          <Link
            href={"/versao-1-4-2"}
            className="block w-min hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <div className="border dark:border-slate-800  border-slate-400 rounded-2xl sm:px-10 sm:pt-10 px-4 pt-4 space-y-4 w-max">
              <div className="flex items-end gap-2">
                <h3 className="text-xl">14 de fevereiro de 2024</h3>
                <span className="dark:text-slate-500">v1.4.2</span>
              </div>
              <p className="dark:text-slate-300 flex items-center gap-2">
                G Client conta com notificações. <LinkSimple color="#2563eb" />
              </p>
              <Image
                alt="print da tela de notificações do G Client"
                src={imageNotification}
                quality={100}
                className="rounded-tl-2xl rounded-tr-2xl md:w-[400px] w-[200px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
