import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ThemeChanger } from "../components/ThemeChanger.tsx";
import { PrimaryButton } from "../components/PrimaryButton";

import { SessionOtherResources } from "../components/SessionOtherResources";
import PageHeader from "../components/PageHeader";

import logo from "@/app/images/svg/logoClient.svg";
import imageNPS from "@/app/images/versions/1_13_0/email-nps.png";
import imageMenu from "@/app/images/versions/1_13_0/menu.png";

export default function Page() {
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
              02 de julho de 2024 <span>v1.13.0</span>
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
            <h2 className="sm:text-3xl text-2xl">Pesquisa NPS</h2>
            <p className="sm:text-lg">
              Novas funcionalidades para aprimorar a sua experiência com nossa
              Pesquisa NPS
            </p>
            <ul className="space-y-6 pb-8">
              <li>
                <strong>1. Múltiplos Filtros:</strong> Agora você pode aplicar
                vários filtros simultaneamente para obter insights mais
                detalhados e específicos sobre seus dados.
              </li>
              <li>
                <strong>2. Relatórios com Status dos Emails:</strong> Acompanhe
                o status dos emails enviados diretamente nos relatórios,
                facilitando o acompanhamento e análise das respostas.
              </li>
              <li>
                <strong>3. Exportar Respostas NPS:</strong> Exporte todas as
                respostas da sua Pesquisa NPS de forma simples e rápida,
                permitindo uma análise mais aprofundada e compartilhamento fácil
                com sua equipe.
              </li>
            </ul>
            <Link
              target="_blank"
              href={"https://ajuda.gclient.com.br/docs/customer-management/nps"}
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageNPS}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações dos emails enviados"
            />
          </div>
        </section>
        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">Menu</h2>
            <p className="sm:text-lg">
              Esteja no controle de quem pode acessar ou não cada página do
              sistema.
            </p>
            <ul className="space-y-6 pb-8">
              <li>
                <strong>1. Controle de Acesso de Páginas:</strong> Gerencie quem
                pode acessar quais páginas, garantindo maior segurança e
                personalização para diferentes usuários.
              </li>
              <li>
                <strong>2. Abrir e Fechar Menu:</strong> Nova funcionalidade
                para abrir e fechar o menu, proporcionando uma navegação mais
                intuitiva e prática.
              </li>
            </ul>
            <Link
              target="_blank"
              href={
                "https://ajuda.gclient.com.br/docs/other-configs/user-acess-control"
              }
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageMenu}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="descrição da página home"
            />
          </div>
        </section>
        <section className="2xl:px-64 px-5 lg:my-36 my-20">
          <h2 className="text-2xl font-medium mb-5">
            Demais itens nesta versão
          </h2>
          <div className="flex md:gap-20 gap-5 flex-col md:flex-row">
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-6 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="space-y-6">
                <li>
                  Modal de criar automações mais intuitivo e organizado,
                  facilitando a criação e o gerenciamento das automações
                  utilizadas nos processos.
                </li>
                <li>
                  Modal de criar ocorrências aprimorado para melhorar a
                  experiência ao cadastrar e editar ocorrências dos clientes.
                </li>
                <li>
                  Atualização automática nos dados do cliente ao mudar nome da
                  categoria.
                </li>
                <li>
                  Modal de criar acessos aprimorado para melhorar a experiência
                  ao cadastrar e editar acessos dos clientes.
                </li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-blue-600 px-2 rounded-2xl py-1 mb-6 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Adicionado
              </p>
              <ul className="space-y-6">
                <li>Funcionalidade de excluir um contrato, caso necessário.</li>
                <li>
                  Exibir lista de clientes vinculados a uma determinada
                  categoria.
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
