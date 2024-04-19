import Image from "next/image";
import Link from "next/link";

import { Footer } from "./components/Footer";
import { ThemeChanger } from "./components/ThemeChanger.tsx";
import { PrimaryButton } from "./components/PrimaryButton";

import PageHeader from "./components/PageHeader";
import logo from "@/app/images/svg/logoClient.svg";
import imageDash from "@/app/images/versions/1_7_4/dash-operacao.png";
import imageCustomerRegistration from "@/app/images/versions/1_7_4/cadastro-de-cliente.png";
import imageProcess from "@/app/images/versions/1_7_4/processos.png";

import { SessionOtherResources } from "./components/SessionOtherResources";
import { Export, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  const description = [
    "Aprimore a gestão dos processos de entrada de clientes. ",
    "Cadastre novos clientes com mais eficiência.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} className="" />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              17 de abril de 2024 <span>v1.7.4</span>
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
              Veja tudo em um só lugar: dashboard de novos clientes para
              operação!
            </h2>
            <p className="sm:text-lg">
              Essa ferramenta inovadora transforma a sua gestão, fornecendo uma
              visão geral completa e organizada dos dados relevantes para
              otimizar seus processos e tomar decisões mais assertivas.
            </p>
            <ul className="space-y-2">
              <li>
                1. Clique em{" "}
                <span className="font-semibold">Novos clientes - Operação</span>
              </li>
              <li>
                2. Na página clique em{" "}
                <span className="font-semibold">Dashboard</span>
              </li>

              <li>3. Pronto, você já tem acessos aos dados</li>
            </ul>
            <Link
              target="_blank"
              className=""
              href={"https://www.youtube.com/watch?v=2bzLUiXe4rM"}
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
              src={imageCustomerRegistration}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-yellow-500 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              modificado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Aprimorado tela para cadastro de clientes
            </h2>
            <p className="sm:text-lg">
              Diga adeus aos cadastros longos e maçantes! Apresentamos a nova
              tela de cadastro de clientes, totalmente reformulada para oferecer
              uma experiência mais simples, rápida e intuitiva.
            </p>

            <ul className="space-y-2">
              <li>
                1. No menu clique em
                <span className="font-semibold"> Cadastrar cliente</span>
              </li>
              <li className="flex items-center gap-1.5">
                2. Preencha os campos e clique em
                <span className="font-semibold bg-blue-600 px-1 rounded-md text-white">
                  avançar
                </span>
              </li>

              <li>
                3. Após conferir os dados, basta clicar em{" "}
                <span className="font-semibold bg-blue-600 px-1 rounded-md text-white">
                  confirmar
                </span>
              </li>
              <li>4. Pronto! Cliente cadastrado com sucesso.</li>
            </ul>

            <Link
              target="_blank"
              className=""
              href={"https://www.youtube.com/watch?v=2bzLUiXe4rM"}
            >
              <PrimaryButton text={"saiba como"} />
            </Link>
          </div>
        </section>
        <section className="2xl:px-64 px-5 lg:my-36 flex md:justify-center md:gap-20 flex-col gap-10 lg:flex-row mt-20">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Você está no controle dos processos!
            </h2>
            <p className="sm:text-lg">
              Veja a lista de novas funcionalides adicionadas para você gerir os
              processos, no onboarding, legalização e adoção:
            </p>

            <ul className="space-y-2">
              <li>1. Insira data de vencimento para concluir o processo.</li>
              <li>2. Arquive processos para ver depois.</li>

              <li>
                3. Crie checklists padrões para cada tipo de processo e fase.
              </li>
              <li>4. Duplique processos quando nececssário.</li>
              <li>5. Receba notificações de tarefas atradas e pendentes.</li>
            </ul>

            <Link
              target="_blank"
              className=""
              href={"https://www.youtube.com/watch?v=2bzLUiXe4rM"}
            >
              <PrimaryButton text={"saiba como"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageProcess}
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
                <li>Arquivar e marcar como lida notificações em massa</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul>
                <li>Cadastro de novos produtos, incluido tipo do produto.</li>
                <li>Aprimorado layout da tela de lista de usuários.</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-red-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Corrigido
              </p>
              <ul>
                <li>Redirecionamento após acessar a rota de automação dos processos.</li>
                <li>Campos apresentados na exportação dos relatórios em planilha.</li>
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
