"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";

import { PrimaryButton } from "../components/PrimaryButton";
import { SessionOtherResources } from "../components/SessionOtherResources";
import PageHeader from "../components/PageHeader";
import { useTheme } from "next-themes";

import logoDark from "@/app/assets/logo-branco.png";
import logoLight from "@/app/assets/logo-azul.png";
import MyClients from "@/app/images/versions/1_27_0/my-clients.png";
import MetricsEmail from "@/app/images/versions/1_27_0/metrics-email.png";
import PostOnboardingPage from "@/app/images/versions/1_27_0/post-onboading-page.png";
import ClientBlocked from "@/app/images/versions/1_27_0/client-blocked.png";
import { ThemeChanger } from "../components/ThemeChanger.tsx";

const updates = [
  {
    title: "Dashboard Meus Clientes",
    description:
      "Agora você pode acompanhar apenas os clientes que foram atribuídos a você.",
    steps: [
      "Na Navbar: Abaixo do botão Home, clique no botão Meus Clientes.",
      "Na página: Você pode visualizar os clientes atribuídos a você, tanto no formato de dashboard quanto em lista. Além disso, é possível visualizar as ocorrências e problemas dos seus clientes.",
    ],
    image: MyClients,
    status: "Adicionado",
    link: "https://ajuda.gclient.com.br/docs/tutoriais-artigo/my-clients",
  },
  {
    title: "Resumo mensal dos clientes por e-mail para administradores",
    description: "Acompanhe os resumos mensais da sua empresa por e-mail.",
    steps: [
      "Agora, todo dia 2 do mês, os usuários administradores receberão um e-mail com as principais métricas do seu negócio.",
    ],
    image: MetricsEmail,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Página de indicador de satisfação pós-onboarding",
    description:
      "Página dedicada à exibição dos dados coletados na sua pesquisa pós-onboarding.",
    steps: [
      "Na Navbar: Navegue até Gestão de Clientes, clique em Indicadores e selecione Pesquisa pós-onboarding.",
      "Na página: Você poderá ver os clientes que já responderam à pesquisa, com os dados coletados.",
      "Filtros: É possível filtrar por data de resposta e por classificação.",
    ],
    image: PostOnboardingPage,
    status: "Adicionado",
    link: "https://ajuda.gclient.com.br/docs/tutoriais-artigo/customer-management/indicator/post-onboarding-feedback",
  },
  {
    title: "Notificação por e-mail aos responsáveis quando cliente é bloqueado",
    description:
      "Ao adicionar a tag 'Bloqueado', os responsáveis pelo cliente serão notificados por e-mail.",
    steps: [],
    image: ClientBlocked,
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
              9 de abril de 2025 <span>v1.27.0</span>
            </p>
          </div>
          <ThemeChanger />
        </header>

        {updates.map(({ title, description, steps, image, status, link }) => (
          <section
            key={title}
            className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row"
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
                <li>
                  Filtro no relatório de saída de clientes por tipo de saída
                </li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Data de vencimento obrigatória nos processos</li>
                <li>Soma dos honorários nos grupos de clientes</li>
                <li>
                  Atualizar automaticamente título da tarefa de acordo com a
                  razão social do cliente
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
