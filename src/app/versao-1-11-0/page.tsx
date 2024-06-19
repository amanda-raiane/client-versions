import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ThemeChanger } from "../components/ThemeChanger.tsx";
import { PrimaryButton } from "../components/PrimaryButton";

import PageHeader from "../components/PageHeader";
import logo from "@/app/images/svg/logoClient.svg";
import imageGroup from "@/app/images/versions/1_11_0/grupos de empresa.png";
import imageOffboarding from "@/app/images/versions/1_11_0/kanban-offboarding.png";

export default function Page() {
  const description = [
    "Crie e relacione seus clientes a grupos de empresas.",
    " Gerencie a saída dos seus clientes com mais facilidade.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} className="" />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              10 de junho de 2024 <span>v1.11.0</span>
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
            <h2 className="sm:text-3xl text-2xl">Grupo de Empresas</h2>
            <p className="sm:text-lg">
              Associe uma ou mais empresas a um mesmo grupo, de acordo com suas
              necessidades de organização.
            </p>
            <ul className="space-y-2 pb-8">
              <li>
                1. Clique em{" "}
                <span className="font-semibold">Configurações</span>
              </li>
              <li>
                2. Na página clique em{" "}
                <span className="font-semibold">Grupo</span>
              </li>
              <li>
                3. Clique em{" "}
                <span className="font-semibold">Cadastrar grupo</span>
              </li>
              <li className="flex items-center gap-2">
                4. Preencha as informações necessárias. E pronto, você já pode
                vincular empresas a esse grupo.
              </li>
            </ul>
            <Link
              className="hidden"
              target="_blank"
              href={
                "https://gclient.notion.site/Aviso-pr-vio-como-definir-os-dias-f6c8bf2c95504ca5a237f6048e6d14ba"
              }
            >
              <PrimaryButton text={"saiba como"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageGroup}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
        </section>
        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">Offboarding de Clientes</h2>
            <p className="sm:text-lg">
              Gerencie o processo de offboarding de clientes de forma eficiente
              com um novo kanban dedicado.
            </p>
            <ul className="space-y-2 pb-8">
              <li>
                1. Clique em <span className="font-semibold">Offboarding</span>
              </li>
              <li>
                2. Na página clique em{" "}
                <span className="font-semibold">Criar novo</span>
              </li>
              <li>3. Prencha as informações necessárias</li>
              <li className="flex items-center gap-2">
                4. A partir daí você pode acompanhar o andamento através do
                kanban
              </li>
            </ul>
            <Link
              className="hidden"
              target="_blank"
              href={
                "https://gclient.notion.site/Aviso-pr-vio-como-definir-os-dias-f6c8bf2c95504ca5a237f6048e6d14ba"
              }
            >
              <PrimaryButton text={"saiba como"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageOffboarding}
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
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul>
                <li>
                  Aplicamos ajustes e correções para melhorar a responsividade
                  do sistema. O layout de todas as páginas agora se ajusta
                  automaticamente ao tamanho da tela.
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
