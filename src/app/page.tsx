"use client";

import Image from "next/image";
import Link from "next/link";

import { Footer } from "./components/Footer";
import { ThemeChanger } from "./components/ThemeChanger.tsx";
import { PrimaryButton } from "./components/PrimaryButton";

import { SessionOtherResources } from "./components/SessionOtherResources";
import PageHeader from "./components/PageHeader";

import { useTheme } from "next-themes";
import logoDark from "@/app/assets/logo-branco.png";
import logoLight from "@/app/assets/logo-azul.png";
import imageSign from "@/app/images/versions/1_20_0/sign.png";

export default function Home() {
  const { theme } = useTheme();

  const description = [
    "Envie contratos para sem clientes diretamente do G Client.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image
              className="w-48"
              alt="logo escrito G Client"
              src={theme === "dark" ? logoDark : logoLight}
            />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              4 de novembro de 2024 <span>v1.20.0</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeChanger />
          </div>
        </div>
        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">Contratos</h2>
            <p className="sm:text-lg">
              Envie contratos para seus clientes assinarem diretamente do G
              Client.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. No menu:</strong> Clique em &apos;Contratos&apos;.
              </li>
              <li>
                <strong>2. Na página:</strong> Clique no botão &apos;Novo
                contrato&apos;.
              </li>
              <li>
                <strong>3.</strong> Preencha as informações para criar seu
                contrato.
              </li>
            </ol>
            <Link
              className=""
              target="_blank"
              href={
                "https://ajuda.gclient.com.br/docs/category/assinatura-de-contratos"
              }
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageSign}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do kaban"
            />
          </div>
        </section>
        <SessionOtherResources />
      </main>
      <Footer />
    </>
  );
}
