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
import darkmode from "@/app/images/versions/1_21_0/dark0mode.png";
import nps from "@/app/images/versions/1_21_0/nps-mod.png";
import exportWorkFlow from "@/app/images/versions/1_21_0/export-work-flow.png";

export default function Home() {
  const { theme } = useTheme();

  const description = [
    "Exporte relatórios de tarefas no fluxos de trabalho, ",
    "Melhoria no NPS, ",
    "Altere entre o light e dark mode ",
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
              25 de novembro de 2024 <span>v1.21.0</span>
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
            <h2 className="sm:text-3xl text-2xl">Dark Mode</h2>
            <p className="sm:text-lg">
              Agora você escolhe entre dark ou light mode na interface do G
              Client.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Home:</strong> Clique nos botões de dark ou
                light;.
              </li>
            </ol>
            <Link
              className="hidden"
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
              src={darkmode}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do kaban"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Exportar fluxos de Trabalho
            </h2>
            <p className="sm:text-lg">
              Agora você pode exportar os seus quadros dos fluxos de trabalho em
              PDF.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. No fluxos de trabalho:</strong> Seleciona um quadro
                de deseja exportar
              </li>
              <li>
                <strong>1. No quadro:</strong> Selecione o botão de exportar
              </li>
            </ol>
            <Link
              className="hidden"
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
              src={exportWorkFlow}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do kaban"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-yellow-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              modificado
            </span>
            <h2 className="sm:text-3xl text-2xl">NPS</h2>
            <p className="sm:text-lg">
              Agora você criar templates de email no NPS e de obrigado. Além
              disso agora tem um gráfico muito mais detalhado.
            </p>
            <ol>
              <li>
                <strong>1. Na Home:</strong> Clique no icone de NPS;
              </li>
              <li>
                <strong>2. Resultados:</strong> Clique no icone de jornal;
              </li>
              <li>
                <strong>3. Nos resultados:</strong> Nele você pode visualizar os
                resultados de forma detalhada.;
              </li>
            </ol>
            <Link
              className=""
              target="_blank"
              href={
                "https://ajuda.gclient.com.br/docs/category/gestão-de-clientes/nps"
              }
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={nps}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do kaban"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 lg:my-36 my-20">
          <h2 className="text-2xl font-medium mb-5">
            Demais itens nesta versão
          </h2>
          <div className="flex md:gap-20 gap-5 flex-col md:flex-row">
            <div className="md:max-w-[30%]">
              <p className="bg-blue-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Adicionado
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  Exibir canal de aquisição no relatório de novos clientes
                </li>
                <li>
                  Filtro por tipo de saída no relatório de saída de clientes
                </li>
                <li>
                  Adicionado tipo de saída Migração de ME/MEI no processo de
                  offboarding
                </li>
                <li>Duplicar tarefa no fluxo de trabalho</li>
                <li>Excluir quadros do fluxo de trabalho</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  Exibir regime tributário no relatório de clientes por
                  responsável
                </li>
                <li>Alterado o nome de Fluxo livre para Fluxo de trabalho</li>
                <li>Validado que o código da domínio cadastrado seja único</li>
              </ul>
            </div>
          </div>
        </section>
        <SessionOtherResources />
      </main>
      <Footer />
    </>
  );
}
