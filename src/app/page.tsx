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
import CustomersObservations from "@/app/images/versions/2_2_0/customers-observations.png";
import ImportLicenses from "@/app/images/versions/2_2_0/import-batch-licenses.png";
import PdfTaskProcess from "@/app/images/versions/2_2_0/pdf-task-process.png";

const updates = [
  {
    title: "Nova sessão de anotações na página do cliente",
    description:
      "Adicione observações importantes diretamente no cadastro do cliente. Agora ficou mais fácil registrar expectativas, objetivos e interações para garantir um acompanhamento completo.",
    steps: [
      "Na página de informações do cliente, acesse a nova aba chamada Anotações.",
      "Clique em + Adicionar anotação para registrar uma nova informação relevante.",
      "Defina o tipo da anotação (Expectativa, Objetivo, Observação, Reunião, Feedback ou Outros) e o impacto (Positivo, Negativo ou Neutro).",
    ],
    image: CustomersObservations,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Importar licenças em lote via Excel",
    description:
      "Para facilitar a gestão dos vencimentos de licenças, agora você pode importar diversas licenças de uma só vez utilizando uma planilha modelo.",
    steps: [
      "No menu lateral, acesse a seção Societário e clique em Controle de Licenças.",
      "Clique no botão Importar, localizado no canto superior direito.",
      "Baixe o modelo de planilha, preencha os dados conforme orientado e envie para importar as licenças em lote.",
    ],
    image: ImportLicenses,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Exportar tarefas dos processos em planilha e PDF",
    description:
      "Agora é possível exportar todas as tarefas dos seus processos (onboarding, societário, adoção e offboarding) em formato de planilha (.xlsx) ou PDF, facilitando o compartilhamento e o acompanhamento das atividades.",
    steps: [
      "Na página dos processos, clique no botão exportar no canto superior direto.",
      "Nele você poderá exportar a listagem de duas formas: pdf e excel.",
    ],
    image: PdfTaskProcess,
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
              30 de julho de 2025 <span>v2.2.0</span>
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
                <li>Novos filtros na página de controle de licenças</li>
                <li>Histórico de renovação de licenças na página do cliente</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Registro do usuário que cadastrou a licença</li>
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
