"use client";

import Image from "next/image";
import Link from "next/link";

import { Footer } from "./components/Footer";
import { ThemeChanger } from "./components/ThemeChanger.tsx";
import { PrimaryButton } from "./components/PrimaryButton";

import { SessionOtherResources } from "./components/SessionOtherResources";
import PageHeader from "./components/PageHeader";

import { useTheme } from "next-themes";

import logoDark from "@/app/assets/logo-branco.png";
import logoLight from "@/app/assets/logo-azul.png";
import AttachedCommunications from "@/app/images/versions/1_25_0/attached-communications.png";
import Indicator from "@/app/images/versions/1_25_0/indicator.png";
import DepartmentResponsible from "@/app/images/versions/1_25_0/changing-department-responsible.png";
import ReportByCompetency from "@/app/images/versions/1_25_0/report-by-competency.png";

export default function Home() {
  const { theme } = useTheme();

  const description = [
    "Anexos nos comunicados, ",
    "Indicadores: distribuição de clientes | receita recorrente | ranking de clientes, ",
    "Ações em lote: alterar responsável do departamento, ",
    "Relatório saída de clientes por competência",
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
              27 de fevereiro de 2025 <span>v1.25.0</span>
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
            <h2 className="sm:text-3xl text-2xl">Anexos nos comunicados</h2>
            <p className="sm:text-lg">
              Anexos nos comunicados, facilitando a comunicação com os clientes
              e tornando mais eficiente a distribuição de comunicados.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navbar:</strong> Navegue até a seção{" "}
                <strong>Gestão de Clientes</strong> e selecione
                <strong>Comunicados</strong>.
              </li>
              <li>
                <strong>2. Na página:</strong> Ao <strong>criar</strong> ou{" "}
                <strong>editar</strong> um comunicado, haverá uma seção
                específica para anexos. Basta selecionar os arquivos.
              </li>
            </ol>
            <Link className="hidden" target="_blank" href={"#"}>
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={AttachedCommunications}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="Print do recurso de anexos nos comunicados"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">Indicadores</h2>
            <p className="sm:text-lg">
              Agora você pode visualizar a distribuição de clientes e ranking
              dos principais clientes diretamente no G Client.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navbar:</strong> Navegue até a seção{" "}
                <strong>Gestão de Clientes</strong> e clique na opção
                <strong>Indicadores</strong>.
              </li>
              <li>
                <strong>2. Na página:</strong> Você poderá escolher qual
                indicador deseja visualizar.
              </li>
              <li>
                <strong>3. Novo Indicador:</strong> Você também pode fazer uma
                solicitação para novos indicadores clicando na opção
                <strong> Solicitação de Indicador</strong>.
              </li>
            </ol>
            <Link className="hidden" target="_blank" href={"#"}>
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={Indicator}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="Print indicadores"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Ações em lote: alterar responsável do departamento
            </h2>
            <p className="sm:text-lg">
              Agora vocês também podem alterar o responsável do departamento em
              lote, sem ter que fazer a alteração de um por um.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navbar:</strong> Navegue até a seção{" "}
                <strong>Gestão de Clientes</strong>, escolha a opção
                <strong> Ações em Lote</strong> e
                <strong> Alterar Responsável do Departamento</strong>.
              </li>
              <li>
                <strong>2. Alterar responsável:</strong> Selecione o
                departamento e o responsável que deseja atribuir e clique em
                <strong> Visualizar Alterações</strong>. Isso permitirá que você
                veja como ficará a mudança. Para confirmar, clique no botão
                <strong> Confirmar Alterações</strong>, localizado no final da
                tabela.
              </li>
            </ol>
            <Link className="hidden" target="_blank" href={"#"}>
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={DepartmentResponsible}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="Print das ações em lote."
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Relatório de Saída de Clientes por Competência
            </h2>
            <p className="sm:text-lg">
              Agora você pode visualizar um relatório de saída de clientes por
              competência.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navbar:</strong> Navegue até a seção{" "}
                <strong>
                  Relatórios &gt; Saída de Clientes por Competência
                </strong>
                .
              </li>
              <li>
                <strong>2. Na página:</strong> Você poderá visualizar os
                clientes que saíram de acordo com a competência. Além disso,
                poderá exportar os dados em planilha ou PDF.
              </li>
            </ol>
            <Link className="hidden" target="_blank" href={"#"}>
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={ReportByCompetency}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="Print do relatório de saída de clientes por competência"
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
                <li>Clientes fazendo aniversário de parceria</li>
                <li>Prevenir perda do playbook</li>
                <li>Alterado classificação do NPS</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Campo de busca de clientes nos comunicados</li>
                <li>Exibir honorário no relatório de saída</li>
                <li>Exibir conteúdo do comunicado</li>
                <li>Ajustes no layout do modal no NPS</li>
                <li>Exibir segmento na lista de clientes</li>
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
