import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ThemeChanger } from "../components/ThemeChanger.tsx";
import { PrimaryButton } from "../components/PrimaryButton";

import PageHeader from "../components/PageHeader";
import logo from "@/app/images/svg/logoClient.svg";
import imageDash from "@/app/images/versions/1_6_3/dash-legal.png";
import imageCustomerForOperation from "@/app/images/versions/1_6_3/clientes-operacao.png";
import imageExport from "@/app/images/versions/1_6_3/exportar.png";

import { SessionOtherResources } from "../components/SessionOtherResources";
import { Export, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  const description = [
    "Faça o disparo de novos clientes que finalizaram o processo de entrada para operação. ",
    "Exporte e compartilhe os dados com quem você quiser.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} className="" />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              22 de março de 2024 <span>v1.6.3</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeChanger />
          </div>
        </div>
        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Veja tudo em um só lugar: dashboard de legalização!
            </h2>
            <p className="sm:text-lg">
              Gerencie tudo de forma centralizada, acompanhe o status de todos
              os processos de legalização em um único local. Monitore cada
              etapa, desde da abertura da empresa até a emissão de licenças
            </p>
            <ul className="space-y-2">
              <li>
                1. No menu <span className="font-semibold">Processos</span>{" "}
              </li>
              <li>
                2. Clique em{" "}
                <span className="font-semibold">Dashboard Legal</span>
              </li>

              <li>3. Pronto, você já tem acessos aos dados</li>
            </ul>
            <Link
              target="_blank"
              className="block"
              href={"https://youtu.be/b1FvFRYzE5A"}
            >
              <PrimaryButton text={"saiba como"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageDash}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 lg:my-36 flex md:justify-center md:gap-20 flex-col-reverse gap-10 lg:flex-row">
          <div>
            <Image
              src={imageCustomerForOperation}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Disparo de novos clientes para operação
            </h2>
            <p className="sm:text-lg">
              Com o disparo de Novos Clientes, você aumentará a produtividade:
              elimine tarefas manuais repetitivas e libere tempo para que sua
              equipe se concentre em atender seus clientes.
            </p>

            <ul className="space-y-2">
              <li>
                1. Abra o processo de um cliente que está apto para
                <span className="font-semibold"> operação</span>
              </li>
              <li className="flex items-center gap-1.5">
                2. Clique no botão enviar
                <span className="font-semibold">
                  <PaperPlaneTilt weight="duotone" color="#2563eb" />
                </span>
              </li>

              <li>
                3. Preencha os dados necessários e
                <span className="font-semibold"> pronto! </span>
                <span className="font-semibold">
                  Cliente enviado para operação.
                </span>
              </li>
            </ul>

            <Link
              target="_blank"
              className="block"
              href={"https://youtu.be/o6riEhuQeGY"}
            >
              <PrimaryButton text={"ver tutorial"} />
            </Link>
          </div>
        </section>
        <section className="2xl:px-64 px-5 lg:my-36 flex md:justify-center md:gap-20 flex-col gap-10 lg:flex-row mt-20">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Análises facilitadas: Exporte dados dos relatórios para planilhas
              com um clique!
            </h2>
            <p className="sm:text-lg">
              Diga adeus à digitação manual de dados! A nova versão do G Client
              oferece a funcionalidade de Exportação de Dados para Planilhas,
              permitindo que você analise seus relatórios de forma rápida e
              eficiente
            </p>

            <ul className="space-y-2">
              <li>
                1. Acesse o relatório que deseja exportar os dados
                <span className="font-semibold"> operação</span>
              </li>
              <li>2. Filtre os dados caso queira</li>

              <li className="flex items-center gap-2">
                3. Clique no botão
                <button className="bg-blue-600 text-white border-none outline-none rounded-lg px-2 py-1 font-bold flex items-center gap-1 text-sm">
                  Exportar
                  <Export weight="bold" />
                </button>
                <span className="font-semibold">
                  e pronto, relatório exportado!
                </span>
              </li>
            </ul>

            <Link
              target="_blank"
              className="block"
              href={"https://youtu.be/b1FvFRYzE5A"}
            >
              <PrimaryButton text={"saiba como"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageExport}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
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
              <ul>
                <li>
                  Sessão na tela do cliente, para armazenar dados do
                  departamento contábil
                </li>
                <li>
                  Relacionar responsável pelo cliente em cada departamento
                </li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul>
                <li>
                  Produtos podem ser classificados como recorrentes ou
                  esporádicos
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
