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
import ProcessRelayout from "@/app/images/versions/2_3_0/process-relayout.png";
import CorporateDashboardFilter from "@/app/images/versions/2_3_0/corporate-dashboard-filter.png";
import InactiveUser from "@/app/images/versions/2_3_0/inactive-user.png";
import ReferralRaking from "@/app/images/versions/2_3_0/referral-ranking.png";

const updates = [
  {
    title: "Melhoria no layout e experiência do card de tarefas",
    description:
      "Reformulamos o layout do card de tarefas para proporcionar uma experiência mais intuitiva e agradável. Agora, as informações estão organizadas de forma clara, facilitando a visualização e o gerenciamento das suas tarefas diárias.",
    steps: [],
    image: ProcessRelayout,
    status: "Modificado",
    link: "#",
  },
  {
    title: "Adicionar filtro por data no dashboard societário",
    description:
      "Agora você pode filtrar as tarefas do dashboard societário por datas específicas, permitindo uma melhor organização e priorização das atividades conforme seus prazos.",
    steps: [],
    image: CorporateDashboardFilter,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Permitir que usuários admin inativem outros usuários",
    description:
      "Usuários com perfil de administrador agora têm a capacidade de inativar outros usuários diretamente pelo painel de controle, facilitando a gestão da equipe e o controle de acesso ao sistema.",
    steps: [
      "Na página de listagem de usuários, clique no ícone de três pontos ao lado do usuário que deseja inativar.",
      "Selecione a opção 'Inativar' no menu suspenso.",
    ],
    image: InactiveUser,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Gestão de Indicações e Ranking",
    description:
      "Implementamos um sistema de gestão de indicações e ranking para que você possa acompanhar e incentivar as indicações feitas por seus clientes. Essa funcionalidade ajuda a reconhecer os clientes mais ativos e a fortalecer o relacionamento com eles.",
    steps: [
      "Na página dos indicadores, selecione a opção Ranking de Indicação",
      "Visualize a lista de clientes que fizeram indicações e seu respectivo ranking",
    ],
    image: ReferralRaking,
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
              16 de setembro de 2025 <span>v2.3.0</span>
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
                <li>Filtrar por datas as tarefas do fluxo de trabalho</li>
                <li>
                  Responder Pesquisa de Satisfação pós onboarding Internamente
                </li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Correção no botão de análise com IA</li>
                <li>
                  Não permitir envio de arquivos não suportados nas ocorrências
                </li>
                <li>Melhoria no layout do card fechado</li>
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
