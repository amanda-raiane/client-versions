import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ThemeChanger } from "../components/ThemeChanger.tsx";
import { PrimaryButton } from "../components/PrimaryButton";

import { SessionOtherResources } from "../components/SessionOtherResources";
import PageHeader from "../components/PageHeader";

import logo from "@/app/images/svg/logo-azul-client.svg";
import imageKaban from "@/app/images/versions/1_19_0/kaban.png";
import imageSavedPDF from "@/app/images/versions/1_19_0/saved-pdf.png";

export default function Home() {
  const description = [
    "Crie quadros kanban personalizados para o seu fluxo de trabalho. ",
    "Salvar playbooks em PDF",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              15 de outubro de 2024 <span>v1.19.0</span>
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
            <h2 className="sm:text-3xl text-2xl">Fluxos livres</h2>
            <p className="sm:text-lg">
              Crie quadros kanban personalizados para o seu fluxo de trabalho.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. No menu:</strong> Clique em &apos;Quadros&apos;.
              </li>
              <li>
                <strong>2. Na página:</strong> Clique no botão &apos;+ Adicionar
                quadro&apos;.
              </li>
              <li>
                <strong>3.</strong> Preencha as informações para criar seu
                quadro personalizado
              </li>
            </ol>
            <Link
              target="_blank"
              href={"https://ajuda.gclient.com.br/docs/category/fluxos-livres"}
            >
              <PrimaryButton text={"Ver tutorial"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageKaban}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do kaban"
            />
          </div>
        </section>
        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              Adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">Salvar playbooks em PDF</h2>
            <p className="sm:text-lg">
              Agora ficou muito mais fácil compartilhar playbooks.
            </p>
            <ol className="space-y-6 pb-8">
              <li>
                <strong>1. Ná página do playbooks:</strong> Clique no botão
                &apos;Imprimir&apos;.
              </li>
              <li>
                <strong>2. Salvar:</strong> Agora basta salvar o arquivo no seu
                dispositivo.
              </li>
            </ol>
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
              src={imageSavedPDF}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do kaban"
            />
          </div>
        </section>
        <section className="2xl:px-64 px-5 lg:my-36 my-20">
          <h2 className="text-2xl font-medium mb-5">
            Demais itens nesta versão
          </h2>
          <div className="flex md:gap-20 gap-5 flex-col md:flex-row">
            <div className="md:max-w-[30%]">
              <p className="bg-blue-600 px-2 rounded-2xl py-1 mb-6 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Adicionado
              </p>
              <ul className="space-y-6">
                <li>Filtro por mês no relatório de clientes bloqueados</li>
                <li>
                  Exibir segmento do cliente no envio de clientes para operação
                </li>
                <li>
                  Exibir lista de clientes em cada indicador do health score
                </li>
                <li>Visualizar notificações arquivadas</li>
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
