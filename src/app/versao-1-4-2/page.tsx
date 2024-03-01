import Image from "next/image";
import imageSocio from "@/app/images/info-socio.png";
import imageNotificacoes from "@/app/images/notificacoes.png";
import imageAnexo from "@/app/images/anexo-secundario.png";
import PageHeader from "../components/PageHeader";
import logo from "@/app/images/svg/logoClient.svg";

import { PencilSimple } from "@phosphor-icons/react/dist/ssr";
import { Footer } from "../components/Footer";
import { ThemeChanger } from "../components/ThemeChanger.tsx";
import Link from "next/link";

export default function Versao1_4_2() {
  const description = [
    "Adicionado tela para salvar informações dos sócios de cada empresa.",
    " Fique por dentro de todas as atualizações, o G Client agora conta com notificações.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} className="" />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              14 de fevereiro de 2024 <span>v1.4.2</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeChanger />
          </div>
        </div>
        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-between md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Guarde as informações dos sócios
            </h2>
            <p className="sm:text-lg">
              É possível adicionar informações dos sócios, como: nome, email,
              telefone, CPF, RG, endereço e informação sobre o perfil do sócio.
            </p>
            <ul className="space-y-2">
              <li>
                1. No menu <span className="font-semibold">Clientes</span>{" "}
                selecione uma empresa
              </li>
              <li>
                2. Clique em <span className="font-semibold">Sócio</span>
              </li>
              <li>
                3. Clique no botão{" "}
                <span className="font-semibold">
                  cadastrar <PencilSimple className="inline" />
                </span>
              </li>
              <li>4. Adicione as informações que desejar para o sócio</li>
            </ul>
            <Link target="_blank" className="block" href={"https://youtu.be/dIduGeqxLGE"}>
              <button className="px-3 py-2 rounded-lg border border-blue-600 transition-all duration-300 dark:hover:bg-slate-800 hover:bg-slate-200">
                ver tutorial
              </button>
            </Link>
          </div>
          <div>
            <Image
              src={imageSocio}
              quality={100}
              className="rounded-2xl lg:w-[620px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 lg:my-36 flex md:justify-between md:gap-20 flex-col-reverse gap-10 lg:flex-row">
          <div>
            <Image
              src={imageNotificacoes}
              quality={100}
              className="rounded-2xl lg:w-[620px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Fique por dentro de tudo com as notificações
            </h2>
            <p className="sm:text-lg">
              Agora você pode receber notificações instantâneas sobre:
              atualização nas informações do seu cliente, avanço nos processos,
              criação ou edição de produtos e alterações de permissão de
              usuários.
            </p>
            <p className="sm:text-lg">
              Também será possível enviar notificações de maneira personalizada,
              para toda a empresa, departamento ou usuários em específico.
            </p>
            <Link target="_blank" className="block" href={"https://youtu.be/TvNpBhFL2IQ"}>
              <button className="px-3 py-2 rounded-lg border border-blue-600 transition-all duration-300 dark:hover:bg-slate-800 hover:bg-slate-200">
                ver tutorial
              </button>
            </Link>
          </div>
        </section>

        <section className="2xl:px-64 px-5 mt-20 pb-36 flex md:justify-between md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Adicione o anexo secundário
            </h2>
            <p className="sm:text-lg">
              Guarde informação de anexo secundário da empresa.
            </p>
            <ul className="space-y-2">
              <li>
                1. No menu <span className="font-semibold">Clientes</span>{" "}
                selecione uma empresa
              </li>
              <li>
                2. Clique em <span className="font-semibold">Fiscal</span>
              </li>
              <li>
                3. Clique no botão{" "}
                <span className="font-semibold">
                  editar <PencilSimple className="inline" />
                </span>
              </li>
              <li>
                4. No campo{" "}
                <span className="font-semibold">Anexo secundário </span>
                selecione uma das opções
              </li>
            </ul>
            <Link target="_blank" className="block" href={"https://youtu.be/CGd6CDtfwMI"}>
              <button className="px-3 py-2 rounded-lg border border-blue-600 transition-all duration-300 dark:hover:bg-slate-800 hover:bg-slate-200">
                ver tutorial
              </button>
            </Link>
          </div>
          <div>
            <Image
              src={imageAnexo}
              quality={100}
              className="rounded-2xl lg:w-[620px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
