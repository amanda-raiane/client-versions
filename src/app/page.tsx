"use client";

import Image from "next/image";
import Link from "next/link";

import { Footer } from "./components/Footer";
import { ThemeChanger } from "./components/ThemeChanger.tsx";
import { PrimaryButton } from "./components/PrimaryButton";

import { SessionOtherResources } from "./components/SessionOtherResources";
import PageHeader from "./components/PageHeader";

import { useTheme } from "next-themes";
import { Plus } from "@phosphor-icons/react";

import logoDark from "@/app/assets/logo-branco.png";
import logoLight from "@/app/assets/logo-azul.png";
import SearchContract from "@/app/images/versions/1_23_0/search-contract.png";
import Communication from "@/app/images/versions/1_23_0/communication.png";
import IaSara from "@/app/images/versions/1_23_0/ia-sara.png";

export default function Home() {
  const { theme } = useTheme();

  const description = [
    "Campo de busca nos contratos, ",
    "Comunicados em massa via email, ",
    "Análise com IA no relatório de saída de clientes.",
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
              3 de janeiro de 2025 <span>v1.23.0</span>
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
            <h2 className="sm:text-3xl text-2xl">
              Campo de busca nos contratos
            </h2>
            <p className="sm:text-lg">
              Agora você pode buscar pelo no tela de contratos.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navebar:</strong> navege até a sessão GESTÃO DE
                ARQUIVOS, e selecione &quot;Meus contratos&quot;.
              </li>
              <li>
                <strong>2. Na página:</strong> Terá um campo de busca, basta
                escrever o nome do arquivo que você o encontrará.
              </li>
            </ol>
            <Link className="hidden" target="_blank" href={"#"}>
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={SearchContract}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print Sara Ia"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Comunicados em massa via email
            </h2>
            <p className="sm:text-lg">
              Vai entrar de férias?! Agora você pode enviar um comunicado para
              seus clientes, onde será disparado email para eles.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navebar:</strong> Navegue até a sessão GESTÃO DE
                CLIENTES, e selecione &quot;Comunicados&quot;.
              </li>
              <li>
                <strong>2. Na página:</strong> Clique no botão &quot;Criar
                Comunicado&quot;, e preencha os campos para poder criar o
                comunicado.
              </li>
              <li>
                <strong>3. Envio:</strong> Para enviar basta clicar no botão de
                ação e clicar no opção &quot;Enviar&quot;.
              </li>
            </ol>
            <Link
              target="_blank"
              href={
                "https://ajuda.gclient.com.br/docs/customer-management/communication"
              }
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={Communication}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do modal de enviar fluxos de entrada para os fluxos livres"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Análise com IA no relatório de saída de clientes.
            </h2>
            <p className="sm:text-lg">
              A SARA ataca novamente, só que agora nos relatórios de saída de
              cliente.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. No Menu:</strong> em Relatório/Saída de Clientes
              </li>
              <li>
                <strong>2. Na página:</strong> Clique no ícone no canto inferior
                direito para acessar a SARA.
              </li>
            </ol>
            <Link
              className=""
              target="_blank"
              href={"https://ajuda.gclient.com.br/docs/ia/customer-exit-report"}
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={IaSara}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print dos checklist nos fluxos de trabalho"
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
                <li>Filtrar pela cidade no relatório geral de clientes</li>
                <li>Filtrar clientes com período de aviso encerrado</li>
                <li>Novos motivos de saída de clientes</li>
                <li>Notificar quando trocar o responsável da tarefa</li>
                <li>Filtrar tarefas por tag no fluxo de trabalho</li>
                <li>Filtro por segmento na lista de clientes</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  Exibir processo de entrada no relatório de saída de clientes
                </li>
                <li>Melhorias visuais na página de informação do cliente</li>
                <li>Filtrar clientes com período de aviso encerrado</li>
                <li>
                  Melhorias visuais na página de quadros do fluxo de trabalho
                </li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-red-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Removido
              </p>
              <ul className="flex flex-col gap-2">
                <li>Removido campo nome do formulário de resposta do NPS</li>
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
