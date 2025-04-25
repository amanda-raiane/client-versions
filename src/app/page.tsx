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
import IntegrationGcVendas from "@/app/images/versions/1_28_0/integration-gc-vendas.png";
import ProcessType from "@/app/images/versions/1_28_0/process-type.png";
import { ThemeChanger } from "./components/ThemeChanger.tsx";

const updates = [
  {
    title: "Integração com o gc vendas",
    description:
      "Agora quando quando dado como ganho o cliente, ele passa para os processo dentro do G Client.",
    steps: [
      "Acesse o painel do G Client: Faça login como administrador e vá em Configurações > Integrações > Integração GC Vendas.",
      "Gere a chave de integração: Clique em Gerar chave na página de integração.",
      "Copie a chave gerada: A chave será exibida no formato gck_xxxxxxxxxxxxxxxxxxxxxxxx.",
      "Vincule a chave no GC Vendas: Cole a chave na aba Vincular chave e clique em Vincular chave. Aguarde a confirmação da integração.",
    ],
    image: IntegrationGcVendas,
    status: "Adicionado",
    link: "https://ajuda.gclient.com.br/docs/tutoriais-video/integracoes/gc-vendas",
  },
  {
    title: "Tipo de processos",
    description:
      "Você pode deixar o G Client com a sua cara, personalizando os tipos de processos.",
    steps: [
      "Acesse a página de cadastro de Tipos de Processos: faça login e navegue até a seção **Gestão de Processos > Cadastros > Tipos de Processos**.",
      "Clique em **Novo Processo** para adicionar um novo tipo. Preencha as seguintes informações: **Título** (nome do processo) e **Processos Permitidos** (Onboarding, Societário, Adoção e Offboarding).",
    ],
    image: ProcessType,
    status: "Adicionado",
    link: "https://ajuda.gclient.com.br/docs/tutoriais-video/gestao-processos/criação-tipos-de-processos",
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
              25 de abril de 2025 <span>v1.28.0</span>
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
                <li>Limitar quem pode editar informações financeiras</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  Código da Domínio, poder cadastrar texto e trocar nomenclatura
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
