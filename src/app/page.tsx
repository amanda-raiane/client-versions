"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "./components/Footer";

import { PrimaryButton } from "./components/PrimaryButton";
import { SessionOtherResources } from "./components/SessionOtherResources";
import PageHeader from "./components/PageHeader";
import { useTheme } from "next-themes";

import logoDark from "@/app/assets/logo-branco.png";
import logoLight from "@/app/assets/logo-azul.png";
import PosOnboarding from "@/app/images/versions/1_26_0/pos-onboarding.png";
import EnchantmentSession from "@/app/images/versions/1_26_0/enchantment-session.png";
import ImprovingAutomations from "@/app/images/versions/1_26_0/improving-automations.png";
import { ThemeChanger } from "./components/ThemeChanger.tsx";

const updates = [
  {
    title: "Pesquisa de satisfação pós Onboarding",
    description:
      "Agora você pode enviar uma dentro do G Client, para medir a satisfação do seu novo cliente com relação ao onboarding.",
    steps: [
      "Na Navbar: Navegue até a seção Gestão de Clientes e clique na opção Encantamento e selecione Pesquisa pós onboarding.",
      "Na página: Clique no botão Enviar pesquisa, adicione o email, identificação e selecione o cliente. Depois, basta clicar em enviar.",
      "Seu cliente não recebeu?: Você também pode pegar o link da pesquisa e enviar diretamente para seu cliente.",
    ],
    image: PosOnboarding,
    status: "Adicionado",
  },
  {
    title: "Seção de encantamento de clientes",
    description:
      "Acompanhe o nível de encantamento do seu cliente com o seu serviço.",
    steps: [
      "Na Navbar: Navegue até a seção Gestão de Clientes e clique na opção Clientes e selecione o cliente desejado.",
      "Na página: Navegue até a seção Encantamento para visualizar pesquisas pós onboarding, histórico NPS e Health Score.",
    ],
    image: EnchantmentSession,
    status: "Adicionado",
  },
  {
    title: "Automações aprimoradas",
    description:
      "Agora você pode alterar o status do cliente diretamente nas automações e optar por compartilhar ou não detalhes, comentários e anexos.",
    steps: [
      "Na Navbar: Navegue até Gestão de Processos, clique em cadastros e selecione automações.",
      "Na página: Clique em criar automações, depois disso basta seguir o fluxo normal, quando chegar na terceira etapa, você podera selecionar parar qual status você deseja enviar seu cliente, além disso você também pode selecionar quais as informações você deseja trazer para as proximas fases, decrição, comentários e anexos.",
    ],
    image: ImprovingAutomations,
    status: "Modificado",
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
              17 de março de 2025 <span>v1.26.0</span>
            </p>
          </div>
          <ThemeChanger />
        </header>

        {updates.map(({ title, description, steps, image, status }) => (
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
              <Link className="hidden" target="_blank" href="#">
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
                <li>Novos filtros adicionados nos processos</li>
                <li>
                  Adicionar código do domínio no relatório de responsáveis
                </li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Dashboard do societário com novo layout</li>
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
