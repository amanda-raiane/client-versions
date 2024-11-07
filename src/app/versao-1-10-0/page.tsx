import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ThemeChanger } from "../components/ThemeChanger.tsx";
import { PrimaryButton } from "../components/PrimaryButton";

import PageHeader from "../components/PageHeader";
import logo from "@/app/images/svg/logoClient.svg";
import imageNotice from "@/app/images/versions/1_10_0/aviso-previo.png";

export default function Page() {
  const description = [
    "Defina a quantidade de dias que um cliente deve cumprir de aviso prévio.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} className="" />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              02 de junho de 2024 <span>v1.10.0</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeChanger />
          </div>
        </div>
        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Definição de Dias de Aviso Prévio
            </h2>
            <p className="sm:text-lg">
              Foi adicionada a capacidade de definir a quantidade de dias que um
              cliente deve cumprir de aviso prévio antes de encerrar o contrato.
            </p>
            <ul className="space-y-2 pb-8">
              <li>
                1. Clique em{" "}
                <span className="font-semibold">Configurações</span>
              </li>
              <li>
                2. Na página clique em{" "}
                <span className="font-semibold">Aviso Prévio</span>
              </li>
              <li>3. Cadastra a quantidade de dias para aviso prévio.</li>
              <li className="flex items-center gap-2">
                4. E pronto! Ao adicionar a tag de aviso a um cliente, o sistema
                irá começar a contagem regressiva de encerramento do contrato.
              </li>
            </ul>
            <Link
              target="_blank"
              href={"https://ajuda.gclient.com.br/docs/other-configs/notice"}
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageNotice}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
