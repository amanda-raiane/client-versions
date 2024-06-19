import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components/Footer";
import { ThemeChanger } from "../components/ThemeChanger.tsx";
import { PrimaryButton } from "../components/PrimaryButton";

import PageHeader from "../components/PageHeader";
import logo from "@/app/images/svg/logoClient.svg";
import imageNPS from "@/app/images/versions/1_8_0/nps.png";
import imageHS from "@/app/images/versions/1_8_0/health-score.png";
import imageHome from "@/app/images/versions/1_8_0/home.png";
import { Envelope } from "@phosphor-icons/react/dist/ssr";

export default function Page() {
  const description = [
    "Saiba como está o relacionamento dos seus clientes com a sua empresa.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} className="" />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              16 de maio de 2024 <span>v1.8.0</span>
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
            <h2 className="sm:text-3xl text-2xl">Envie pesquisas NPS</h2>
            <p className="sm:text-lg">
              Meça a lealdade dos seus clientes e identifique áreas de melhoria.
              Envie pesquisas de Net Promoter Score (NPS) por email e obtenha
              feedback valioso dos seus clientes.
            </p>
            <ul className="space-y-2 pb-8">
              <li>
                1. Clique em <span className="font-semibold">NPS</span>
              </li>
              <li>
                2. Na página clique em{" "}
                <span className="font-semibold">Criar NPS</span>
              </li>

              <li>3. Configure do seu jeito</li>
              <li className="flex items-center gap-2">
                4. E pronto! Você já pode enviar a pesquisa clicando em{" "}
                <span className="font-semibold flex items-center gap-1">
                  enviar <Envelope size={22} color="#2563EB" />
                </span>
              </li>
            </ul>
            <Link
              target="_blank"
              href={"https://www.youtube.com/watch?v=YhoVOl7JRyc&"}
            >
              <PrimaryButton text={"saiba como"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageNPS}
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
            <h2 className="sm:text-3xl text-2xl">Saúde do Cliente</h2>
            <p className="sm:text-lg">
              Calcule e monitore a saúde dos seus clientes com base em diversas
              métricas, como quantidade de problemas, nota do NPS, e tempo de
              permanência.
            </p>
            <ul className="space-y-2 pb-8">
              <li>
                1. Clique em{" "}
                <span className="font-semibold">Saúde do Cliente</span>
              </li>
              <li>
                2. Na página clique em{" "}
                <span className="font-semibold">Indicadores</span>
              </li>

              <li>3. Habilite quais indicadores você você desejar.</li>
              <li className="flex items-center gap-2">
                4. E pronto! O sistema irá gerar o cálculo de maneira automática
                pra você.
              </li>
            </ul>
            <Link
              target="_blank"
              href={
                "https://gclient.notion.site/O-que-Health-Score-e-como-calcular-b3a7f5736fa9427ea980c65c8e5ffd9a"
              }
            >
              <PrimaryButton text={"saiba como"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageHS}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print da tela contendo informações do sócio"
            />
          </div>
        </section>

        <section className="2xl:px-64 px-5 lg:my-36 flex md:justify-center md:gap-20 flex-col-reverse gap-10 lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-yellow-500 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              modificado
            </span>
            <h2 className="sm:text-3xl text-2xl">
              Home com Dashboard Intuitivo
            </h2>
            <p className="sm:text-lg">
              Visualize e monitore métricas essenciais diretamente na tela
              inicial, para que você possa ter uma visão geral rápida do
              desempenho do seu negócio.
            </p>

            <ul className="space-y-2">
              <li>
                1. Ao acessar o sistema você já direcionado para a
                <span className="font-semibold"> Home</span>
              </li>
              <li>
                2. Tome decisões mais ágeis e assertivas com base em dados
                atualizados e fáceis de entender.
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={imageHome}
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
                  Navegação intuitiva com links ativos claramente sinalizados
                  para uma melhor experiência.
                </li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-red-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Corrigido
              </p>
              <ul>
                <li>
                  Reduzimos a quantidade de requests no dashboard da home.
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
