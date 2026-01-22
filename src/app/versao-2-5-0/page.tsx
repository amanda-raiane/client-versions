"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Footer } from "@/app/components/Footer";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SessionOtherResources } from "@/app/components/SessionOtherResources";
import PageHeader from "@/app/components/PageHeader";
import { ThemeChanger } from "@/app/components/ThemeChanger.tsx";

import logoDark from "@/app/assets/logo-branco.png";
import logoLight from "@/app/assets/logo-azul.png";

import TranscriptionWithAI from "@/app/images/versions/2_5_0/transcription-with-ai.png";
import ReportCNPJByRecive from "@/app/images/versions/2_5_0/reports-cnpj-by-recive.png";
import GetOficialInfoByCnpj from "@/app/images/versions/2_5_0/get-oficial-info-by-cnpj.png";

const updates = [
  {
    title: "Cadastro de Problemas via Áudio com IA",
    description:
      "Agora é possível cadastrar problemas utilizando mensagens de áudio. A inteligência artificial transcreve o áudio para texto, facilitando o registro e a organização das informações.",
    steps: [
      "Na página de informações do cliente, clique em adicionar, ou editar um problema existente.",
      "Selecione a opção Gravar Audio.",
    ],
    image: TranscriptionWithAI,
    status: "Adicionado",
    link: "https://gclient.tawk.help/article/como-cadastrar-problemas",
  },
  {
    title: "Gerar relatório com os dados CNPJ em lote",
    description:
      "É possível gerar relatórios com os dados do CNPJ de vários clientes ao mesmo tempo, otimizando o processo de obtenção dessas informações.",
    steps: [
      "No menu lateral, você encontrará a opção Relatórios > Receita Federal.",
      "Cliquem em Criar novo relatório, selecione os clientes desejados e clique em Gerar relatório.",
      "Será iniciar a geração do relatório, que pode levar alguns minutos dependendo da quantidade de clientes selecionados.",
    ],
    image: ReportCNPJByRecive,
    status: "Adicionado",
    link: "https://gclient.tawk.help/article/gerar-relatorio-com-os-dados-cnpj-em-lote",
  },
  {
    title:
      "Preencher automaticamente dados do cliente a partir do CNPJ no cadastro",
    description:
      "Ao cadastrar um novo cliente, agora é possível preencher automaticamente os dados básicos utilizando o CNPJ, agilizando o processo de cadastro.",
    steps: [
      "Na pagina de cadastro de clientes, quando inserido o valor do CNPJ, você pode selecionar em consultar para pode preencher os dados automaticamente.",
    ],
    image: GetOficialInfoByCnpj,
    status: "Adicionado",
    link: "#",
  },
];

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={updates.map((update) => update.title)} />

        <header className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image
              className="w-48"
              alt="logo escrito G Client"
              src={theme === "dark" ? logoDark : logoLight}
            />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              16 de outubro de 2025 <span>v2.5.0</span>
            </p>
          </div>
          <ThemeChanger />
        </header>

        {updates.map(({ title, description, steps, image, status, link }) => (
          <section
            key={title}
            className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col items-center lg:flex-row"
          >
            <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
              <span
                className={`bg-${
                  status === "Adicionado" ? "blue" : "yellow"
                }-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50`}
              >
                {status}
              </span>
              <h2 className="sm:text-3xl text-2xl">{title}</h2>
              <p className="sm:text-lg">{description}</p>
              <ol className="space-y-6 pb-8">
                {steps.map((step, index) => (
                  <li key={index}>
                    <strong>{index + 1}. </strong>
                    {step}
                  </li>
                ))}
              </ol>
              <Link
                className={`${link === "#" ? "hidden" : ""} `}
                target="_blank"
                href={link}
              >
                <PrimaryButton text="Ver tutorial" />
              </Link>
            </div>
            <Image
              src={image}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt={title}
            />
          </section>
        ))}

        <section className="2xl:px-64 px-5 lg:my-36 my-20">
          <h2 className="text-2xl font-medium mb-5">
            Demais itens nesta versão
          </h2>
          <div className="flex md:gap-20 gap-5 flex-col md:flex-row">
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Link aprimorado da tarefa com a anotação</li>
                <li>
                  Não recarregar a página do cliente após cadastrar ou editar
                  problemas e ocorrências
                </li>
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
