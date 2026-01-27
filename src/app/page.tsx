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

import TaskClientAutomation from "@/app/images/versions/2_7_0/client-task-automation.png";
import AutomationPage from "@/app/images/versions/2_7_0/automation-page.png";
import ChangeStatusBatch from "@/app/images/versions/2_7_0/change-in-batch-status.png";
import WorkflowDashboard from "@/app/images/versions/2_7_0/workflow-dashboard.png";

const updates = [
  {
    title: "Criação de Tarefa ao cadastrar cliente",
    description:
      "Cria uma tarefa de boas-vindas ou onboarding quando um novo cliente é cadastrado.",
    steps: [
      "Na página de automações, selecione a opção Tarefa ao cadastrar cliente",
      "Crie uma automação, nela você poderá realizar o gatilho que vai criar a tarefa, e ação que vai executar",
    ],
    image: TaskClientAutomation,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Pagina centralizadora das Automações",
    description:
      "Uma página centralizada para gerenciar todas as automações do sistema, com um visual clean e organizado.",
    steps: [
    ],
    image: AutomationPage,
    status: "Adicionado",
    link: "#",
  },
  {
    title:
      "Alterar status do cliente em lote",
    description:
      "Agora é possível alterar o status de vários clientes de uma só vez, otimizando o processo de gerenciamento e organização dos dados.",
    steps: [
      "Na página das Ações em Lote, selecione a opção Alterar status",
      "Selecione os clientes desejados e selecione o status desejado, visualize a alteração e confirme",
    ],
    image: ChangeStatusBatch,
    status: "Adicionado",
    link: "#",
  },
  {
    title:
      "Alterar status do cliente em lote",
    description:
      "Agora é possível alterar o status de vários clientes de uma só vez, otimizando o processo de gerenciamento e organização dos dados.",
    steps: [
      "Na página das Ações em Lote, selecione a opção Alterar status",
      "Selecione os clientes desejados e selecione o status desejado, visualize a alteração e confirme",
    ],
    image: WorkflowDashboard,
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
              22 de janeiro de 2026 <span>v2.7.0</span>
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
                <li>Automação de tarefas, agora é possível selecionar responsável para a tarefa e vencimento</li>
                <li>Filtro dos relatórios de problemas e ocorrências</li>
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
