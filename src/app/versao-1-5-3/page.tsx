import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ThemeChanger } from "../components/ThemeChanger.tsx";
import { PrimaryButton } from "../components/PrimaryButton";

import PageHeader from "../components/PageHeader";
import logo from "@/app/images/svg/logoClient.svg";
import imageStatus from "@/app/images/versions/1_5_3/status.png";
import imageDocs from "@/app/images/versions/1_5_3/documentos.png";

import { SessionOtherResources } from "../components/SessionOtherResources";

export default function Home() {
  const description = [
    "Personalize os status dos processos de maneira eficaz. ",
    "Crie documentos e compartilhe com a sua equipe.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} className="" />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              01 de março de 2024 <span>v1.5.3</span>
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
              Assuma o controle do seu processo!
            </h2>
            <p className="sm:text-lg">
              Crie e personalize os status da página de processos para
              acompanhar o andamento das suas atividades com mais clareza e
              agilidade.
            </p>
            <ul className="space-y-2">
              <li>
                1. No menu <span className="font-semibold">Processos</span>{" "}
                selecione um processo
              </li>
              <li>
                2. Clique em{" "}
                <span className="font-semibold">criar novo status +</span>
              </li>

              <li>3. Adicione as informações que desejar para o novo status</li>
            </ul>
            <Link
              target="_blank"
              className="block"
              href={"https://youtu.be/BPXojQaAfMA"}
            >
              <PrimaryButton text={"ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageStatus}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 lg:my-36 flex md:justify-center md:gap-20 flex-col-reverse gap-10 lg:flex-row">
          <div>
            <Image
              src={imageDocs}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">Dê vida às suas ideias!</h2>
            <p className="sm:text-lg">
              Crie documentos com nosso editor de texto intuitivo e poderoso,
              sem precisar sair do sistema. Edite, formate e compartilhe seus
              documentos com facilidade.
            </p>

            <ul className="space-y-2">
              <li>
                1. No menu clique em{" "}
                <span className="font-semibold">Documentos</span>
              </li>
              <li>
                2. Clique no botão{" "}
                <span className="font-semibold">Adicionar +</span>
              </li>

              <li>
                3. Escolha criar um{" "}
                <span className="font-semibold">documento</span> ou uma{" "}
                <span className="font-semibold">pasta</span>
              </li>
            </ul>

            <Link
              target="_blank"
              className="block"
              href={"https://youtu.be/AnPci2kSHB8"}
            >
              <PrimaryButton text={"ver tutorial"} />
            </Link>
          </div>
        </section>
        <section className="2xl:px-64 px-5 lg:my-36 my-10">
          <h2 className="text-2xl font-medium mb-5">
            Demais itens nesta versão
          </h2>
          <div className="flex md:gap-20 gap-5 flex-col md:flex-row">
            <div className="md:max-w-[30%]">
              <p className="bg-blue-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Adicionado
              </p>
              <ul>
                <li>Lista para selecionar estado e cidade dos sócios</li>
                <li>Novos filtros no relatório de clientes</li>
                <li>Responsável pelo cliente por departamento</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul>
                <li>Painel para configurar notificações do navegador</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-red-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Corrigido
              </p>
              <ul>
                <li>
                  Exibição do checklist para alteração contratual, na página de
                  etapas
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
