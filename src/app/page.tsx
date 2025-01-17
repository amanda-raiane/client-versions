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
import LoteAction from "@/app/images/versions/1_24_0/lote-action.png";
import Calculator from "@/app/images/versions/1_24_0/calculator.png";
import NpsSender from "@/app/images/versions/1_24_0/npsSender.png";
import ProblemAi from "@/app/images/versions/1_24_0/problem-ai.png";

export default function Home() {
  const { theme } = useTheme();

  const description = [
    "Campo de busca nos contratos, ",
    "Comunicados em massa via email, ",
    "Análise com IA no relatório de saída de clientes.",
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
              13 de janeiro de 2025 <span>v1.24.0</span>
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
            <h2 className="sm:text-3xl text-2xl">Alterar honorário em lote</h2>
            <p className="sm:text-lg">
              Agora você não precisa ficar alterando o honorário um por um, pode
              fazer esse ajuste em lote.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navebar:</strong> Navegue até a seção{" "}
                <strong>Gestão de Clientes</strong> e selecione{" "}
                <strong>Ações em lote</strong>.
              </li>
              <li>
                <strong>Na página:</strong> haverá um campo para inserir o valor
                desejado. Você pode especificar o valor que deseja aumentar ou
                diminuir. Se preferir, é possível visualizar o resultado antes
                de confirmar a alteração clicando no botão{" "}
                <strong>Visualizar alterações</strong>.
              </li>
            </ol>
            <Link className="hidden" target="_blank" href={"#"}>
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={LoteAction}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print Sara Ia"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">Calculadoras auxiliares</h2>
            <p className="sm:text-lg">
              Agora no G Client nós temos uma calculadora para auxiliar no seu
              dia a dia.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navebar:</strong> Navegue até a seção{" "}
                <strong>Ferramentas</strong>. Você poderá escolher entre{" "}
                <strong>Fator R</strong> e <strong>PF x PJ</strong>
              </li>
              <li>
                <strong>2. Na página:</strong> Basta você preencher o campo com
                as informações necessárias e por fim clicar em{" "}
                <strong>Calcular</strong>
              </li>
            </ol>
            <Link
              className="hidden"
              target="_blank"
              href={
                "https://ajuda.gclient.com.br/docs/customer-management/communication"
              }
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={Calculator}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do modal de enviar fluxos de entrada para os fluxos livres"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
              Modificado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Remetente de email personalizado no NPS
            </h2>
            <p className="sm:text-lg">
              Agora você pode enviar um pesquida com o remetente personalizado.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navebar:</strong> Navegue até a sessão
                <strong> NPS</strong> e crie sua campanha NPS.
              </li>
              <li>
                <strong>2. Disparo de email:</strong> Assim que criado a
                campanha, clique no botão para enviar, com isso será aberto um
                modal onde você pode selecionar o{" "}
                <strong>Email do rementente</strong>.
              </li>
            </ol>
            <Link
              className="hidden"
              target="_blank"
              href={"https://ajuda.gclient.com.br/docs/ia/customer-exit-report"}
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={NpsSender}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print dos checklist nos fluxos de trabalho"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Análise com IA no relatório de problemas
            </h2>
            <p className="sm:text-lg">
              A SARA ataca novamente, mas agora nos relatórios de saída de
              problemas.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Na Navbar:</strong> Navegue atté a sessão{" "}
                <strong> Relatório &gt; Problemas</strong>.
              </li>
              <li>
                <strong>2. Na página:</strong> Clique no ícone no canto inferior
                direito para acessar a <strong>SARA</strong>.
              </li>
            </ol>
            <Link
              className="hidden"
              target="_blank"
              href={"https://ajuda.gclient.com.br/docs/ia/customer-exit-report"}
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={ProblemAi}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print dos checklist nos fluxos de trabalho"
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
                <li>Múltiplos checklists nos quadros de fluxo de trabalho</li>
                <li>Salvar data de aniversário dos sócios</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Data de aviso prévio personalizada no calendário</li>
                <li>
                  Corrigido: filtro de ano nos relatório de saída e clientes
                  bloqueados
                </li>
                <li>
                  Não listar clientes inativos no relatório de clientes
                  bloqueados
                </li>
                <li>Ajustes no layout do modal no NPS</li>
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
