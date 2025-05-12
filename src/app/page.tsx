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
import SendToProcesses from "@/app/images/versions/1_29_0/send-to-processes.png";

const updates = [
  {
    title: "Envie tarefas do fluxo de trabalho para os fluxos padrão",
    description:
      "Agora é possível mover tarefas do seu fluxo de trabalho diretamente para os fluxos padrão do sistema, facilitando a organização e o acompanhamento dos processos.",
    steps: [
      "Acesse a página de Quadros e selecione o quadro desejado.",
      "Clique na tarefa que deseja mover para o fluxo padrão.",
      "Clique no ícone ao lado do nome da tarefa para abrir o formulário.",
      "Preencha as informações necessárias e clique em Enviar para processos.",
    ],
    image: SendToProcesses,
    status: "Adicionado",
    link: "https://ajuda.gclient.com.br/docs/tutoriais-artigo/free-flows/send-to-processes",
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
              12 de maio de 2025 <span>v1.29.0</span>
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
              <p className="bg-blue-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Adicionado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Filtro por responsável ações em lote: responsável</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Melhorias grupos de empresa</li>
                <li>
                  Melhorias no modal de atualizar a data de entrada do cliente
                </li>
                <li>
                  Permitir data de inativação futura no cadastro do cliente
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
