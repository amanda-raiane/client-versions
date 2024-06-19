import Image from "next/image";
import Link from "next/link";

import { Footer } from "./components/Footer";
import { ThemeChanger } from "./components/ThemeChanger.tsx";
import { PrimaryButton } from "./components/PrimaryButton";

import { SessionOtherResources } from "./components/SessionOtherResources";
import PageHeader from "./components/PageHeader";

import logo from "@/app/images/svg/logoClient.svg";
import imageReports from "@/app/images/versions/1_12_0/relatorios.png";

export default function Home() {
  const description = [
    "Desfrute de layouts de relatórios mais intuitivos e fáceis de navegar, com informações organizadas de forma clara e concisa.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} className="" />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              19 de junho de 2024 <span>v1.12.0</span>
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
            <h2 className="sm:text-3xl text-2xl">Relatórios Aprimorados</h2>
            <p className="sm:text-lg">
              Acesse rapidamente os dados que você precisa com a exibição
              aprimorada de métricas e indicadores-chave em todos os relatórios.
            </p>
            <ul className="space-y-2 pb-8">
              <li>
                1. Clique em <span className="font-semibold">Relatórios</span>
              </li>
              <li>
                2. Nas opções apresentadas clique no relatório que você deseja
                visualizar.
              </li>
              <li>
                3. E pronto! Você já pode visualizar os dados, podendo filtrar e
                também exportar dados.
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
              src={imageReports}
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
                  Modal de criação de processos mais intuitivo e organizado,
                  facilitando a criação e o gerenciamento dos seus fluxos de
                  trabalho.
                </li>
                <li>
                  Tenha acesso imediato aos resultados do Health Score dos seus
                  clientes, sem a necessidade de clicar ou interagir com a
                  lista.
                </li>
                <li>
                  Cadastre mais de um padrão de quantidade de dias para aviso
                  prévio, podendo relacionar o que fizer mais sentido no
                  cliente.
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
