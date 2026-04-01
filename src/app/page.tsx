"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Footer } from "@/app/components/Footer";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SessionOtherResources } from "@/app/components/SessionOtherResources";
import PageHeader from "@/app/components/PageHeader";
import { ThemeChanger } from "@/app/components/ThemeChanger.tsx";

import LicenseImprovements from "@/app/images/versions/2_8_0/license-improvements.png";
import ImportTasks from "@/app/images/versions/2_8_0/import-tasks.png";
import StatusPermissions from "@/app/images/versions/2_8_0/permissions-status.png";

import logoDark from "@/app/assets/logo-branco.png";
import logoLight from "@/app/assets/logo-azul.png";

const updates = [
  {
    title: "Melhorias nas licenças",
    description:
      "Aprimoramentos para dar mais flexibilidade, organização e controle no gerenciamento de licenças.",
    steps: [
      "Licenças indeterminadas",
      "Exportar licenças",
      "Vincular certificado ou licença a um sócio",
      "Novos filtros",
    ],
    image: LicenseImprovements,
    status: "Modificado",
    link: "#",
  },
  {
    title: "Importar processos em lote",
    description:
      "Agora é possível importar processos em lote para acelerar cadastros e rotinas.",
    steps: ["Onboarding", "Societário", "Adoção"],
    status: "Adicionado",
    image: ImportTasks,
    link: "#",
  },
  {
    title: "Novas permissões de usuário para status e etapas dos processos",
    description:
      "Controle mais granular de acesso para editar e movimentar processos.",
    steps: [],
    status: "Adicionado",
    image: StatusPermissions,
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
              01 de abril de 2026 <span>v2.8.0</span>
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
                <li>Relatório de anotações</li>
                <li>Controle de usuários inativos</li>
                <li>Relatório de sócios</li>
                <li>
                  Adicionado novo departamento para atribuir responsável:
                  societário
                </li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Link para assinatura de contrato</li>
                <li>
                  Mudar nome da página &quot;meus clientes&quot; para
                  &quot;clientes atribuídos&quot;
                </li>
                <li>
                  Notificar usuário quando ele é atribuído como responsável do
                  cliente em um departamento
                </li>
                <li>
                  Correção nas automações de processos (criar tarefas
                  automáticas)
                </li>
                <li>Definir cores das tags</li>
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
