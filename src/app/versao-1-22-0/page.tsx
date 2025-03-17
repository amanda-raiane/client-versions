"use client";

import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ThemeChanger } from "../components/ThemeChanger.tsx";
import { PrimaryButton } from "../components/PrimaryButton";

import { SessionOtherResources } from "../components/SessionOtherResources";
import PageHeader from "../components/PageHeader";

import { useTheme } from "next-themes";
import { Plus } from "@phosphor-icons/react";

import logoDark from "@/app/assets/logo-branco.png";
import logoLight from "@/app/assets/logo-azul.png";
import saraIa from "@/app/images/versions/1_22_0/sara-ia.png";
import customInformationFreeFlow from "@/app/images/versions/1_22_0/custom-information-free-flow.png";
import freeFlowChecklist from "@/app/images/versions/1_22_0/free-flow-checklist.png";
import geralReportVisibility from "@/app/images/versions/1_22_0/geral-report-visibility.png";
import customContractEmail from "@/app/images/versions/1_22_0/custon-contract-email.png";

export default function Home() {
  const { theme } = useTheme();

  const description = [
    "Análise de relatório de clientes com IA",
    "Configurar a tarefa do fluxo de entrada para o fluxo de trabalho",
    "Armazenamento de checklist padrão para o fluxo de trabalho",
    "Visualização de colunas no relatório geral de clientes",
    "Email personalizado para solicitação de assinatura.",
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
              5 de dezembro de 2024 <span>v1.22.0</span>
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
              Conheça a SARA, nossa inteligência artificial!
            </h2>
            <p className="sm:text-lg">
              A SARA chegou para ajudar você a realizar análises de novos
              clientes.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. No Menu:</strong> em Relatório/Novos Clientes
              </li>
              <li>
                <strong>2. Na página:</strong> Clique no ícone no canto inferior
                direito para acessar a SARA.
              </li>
            </ol>
            <Link
              target="_blank"
              href={"https://ajuda.gclient.com.br/docs/category/nossa-ia-sara"}
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={saraIa}
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
              Configurar a tarefa do fluxo de entrada para o fluxo de trabalho
            </h2>
            <p className="sm:text-lg">
              Agora é possível personalizar as tarefas exportadas dos fluxos de
              entrada para o fluxo de trabalho.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Nos fluxos de entrada:</strong> Selecione uma tarefa
                e clique no botão com o ícone de enviar.
              </li>
              <li>
                <strong>2. Clique em:</strong> Compartilhar com fluxos de
                trabalho. Com isso, serão abertos os campos para preenchimento.
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
              src={customInformationFreeFlow}
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
              Armazenamento de checklist padrão para o fluxo de trabalho
            </h2>
            <p className="sm:text-lg">
              Agora é possível criar checklists padrão nos fluxos de trabalho,
              para que você não precise criar os mesmos itens repetidamente.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. No menu:</strong> Navegue até os fluxos de trabalho e
                escolha o quadro onde deseja cadastrar o checklist.
              </li>
              <li>
                <strong>2. Checklist:</strong> Clique no ícone de checklist, ao
                lado do ícone de engrenagem.
              </li>
              <li className="flex flex-wrap">
                <strong>3. Checklists do quadro:</strong> Nele aparecerá todos
                seus checklist cadastrados nesse quadro. Clique no botão de{" "}
                <span className="ml-1 border rounded-full flex place-items-center p-1">
                  <Plus />
                </span>
                para incluir um novo.
              </li>
            </ol>
            <Link
              className=""
              target="_blank"
              href={
                "https://ajuda.gclient.com.br/docs/free-flows/custom-checklist"
              }
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={freeFlowChecklist}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print dos checklist nos fluxos de trabalho"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
              Modificado
            </p>
            <h2 className="sm:text-3xl text-2xl">
              Relatório Geral de Clientes: escolha as colunas que deseja
              visualizar
            </h2>
            <p className="sm:text-lg">
              Agora você pode definir quais colunas deseja visualizar no
              relatório geral de clientes.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. No Menu:</strong> Relatórios geral de clientes
              </li>
              <li>
                <strong>2. No relatório:</strong> Clique no botão (Exibir) para
                escolher as colunas.
              </li>
            </ol>
            <Link
              className="hidden"
              target="_blank"
              href={
                "https://ajuda.gclient.com.br/docs/free-flows/custom-checklist"
              }
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={geralReportVisibility}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print dos relatório geral de clientes, modal de visualização"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              E-mail Personalizado para Solicitação de Assinatura
            </h2>
            <p className="sm:text-lg">
              Agora, se você tiver um SMTP configurado, pode personalizar o
              e-mail de envio para a assinatura de contratos
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. No Menu:</strong> Navegue até as configurações
              </li>
              <li>
                <strong>2. Contratos:</strong> Na seção de contratos dentro das
                configurações, clique na opção SMTP e E-mail. Em seguida,
                preencha os campos com as informações necessárias.
              </li>
            </ol>
            <Link
              className="hidden"
              target="_blank"
              href={
                "https://ajuda.gclient.com.br/docs/other-configs/contract-email"
              }
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={customContractEmail}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print dos relatório geral de clientes, modal de visualização"
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
                <li>Excluir status no fluxo de trabalho</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  Definir qual foi a última competência atendida ao inativar o
                  cliente
                </li>
                <li>
                  Não exibir por padrão os clientes inativos no relatório geral
                  de clientes
                </li>
                <li>Alterado domínio do sistema</li>
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
