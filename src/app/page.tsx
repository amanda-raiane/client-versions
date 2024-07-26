import Image from "next/image";
import Link from "next/link";

import { Footer } from "./components/Footer";
import { ThemeChanger } from "./components/ThemeChanger.tsx";
import { PrimaryButton } from "./components/PrimaryButton";

import { SessionOtherResources } from "./components/SessionOtherResources";
import PageHeader from "./components/PageHeader";

import logo from "@/app/images/svg/logoClient.svg";
import imageMenu from "@/app/images/versions/1_14_0/cadastro-via-menu.png";
import imageChecklist from "@/app/images/versions/1_14_0/checklist-personalizado.png";
import imageOccurrence from "@/app/images/versions/1_14_0/ocorencias.png";
import { Check, PlusCircle } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  const description = [
    "Otimize a criação de ocorrências, problemas e acessos dos seus clientes.",
    "Esteja no controle do que fazer em cada processo com os checklists personalizados.",
  ];
  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={description} />
        <div className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image alt="logo escrito G Client" src={logo} className="" />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              24 de julho de 2024 <span>v1.14.0</span>
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
            <h2 className="sm:text-3xl text-2xl">Cadastro pelo menu</h2>
            <p className="sm:text-lg">
              Otimize a criação de ocorrências, problemas e acessos dos seus
              clientes.
            </p>
            <ul className="space-y-6 pb-8">
              <li>
                <strong>1. No menu:</strong> Clique na opção cadastros para
                abrir o modal de opções.
              </li>
              <li>
                <strong>2. Escolha uma das opções:</strong> Clique na opção que
                você deseja cadastrar.
              </li>
              <li>
                <strong>3. Insira as informações:</strong> Por fim, no modal
                aberto preencha as informações necessárias. É neste momento que
                você irá vincular o cliente.
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
              src={imageMenu}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do menu do sistema"
            />
          </div>
        </section>
        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-yellow-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              modificado
            </span>
            <h2 className="sm:text-3xl text-2xl">Checklist personalizados</h2>
            <p className="sm:text-lg">
              Crie, edite e exclua checklists dos processos quando necessário.
            </p>
            <ul className="space-y-6 pb-8">
              <li>
                <strong>1. Abra um processo:</strong> Selecione um processo que
                você queira adicionar etapas.
              </li>
              <li>
                <strong className="flex gap-4">
                  2. Clique no ícone
                  <span className="bg-white text-blue-600 p-1 rounded-full">
                    <PlusCircle size={22} />
                  </span>
                </strong>{" "}
                E escreva o texto da nova etapa.
              </li>
              <li>
                <strong className="flex gap-4">
                  3. Após, basta clicar no ícone
                  <span className="bg-blue-600 text-white rounded-md p-1">
                    <Check size={22} />
                  </span>
                </strong>{" "}
                para salvar as informações adicionadas.
              </li>
            </ul>
            <Link
              className="hidden"
              target="_blank"
              href={
                "https://gclient.notion.site/Como-controlar-o-acesso-de-usu-rios-p-ginas-e-itens-do-menu-c5a948366fd1452a8530d89ac41b98d8"
              }
            >
              <PrimaryButton text={"saiba como"} />
            </Link>
          </div>
          <div>
            <Image
              src={imageChecklist}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="descrição da página home"
            />
          </div>
        </section>
        <section className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col lg:flex-row">
          <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
            <span className="bg-blue-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50">
              adicionado
            </span>
            <h2 className="sm:text-3xl text-2xl">Relatório de ocorrências</h2>
            <p className="sm:text-lg">
              Acompanhe as ocorrências cadastradas para os seus clientes através
              do novo relatório.
            </p>
            <ul className="space-y-6 pb-8">
              <li>
                <strong>1. No menu:</strong> Clique na opção relatórios
              </li>
              <li>
                <strong>2. Escolha o relatório de ocorrências:</strong> Clique
                na opção Ocorrências
              </li>
              <li>
                <strong>3. E pronto:</strong> No relatório você conseguirá
                filtrar pelo impacto da ocorrência.
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
              src={imageOccurrence}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt="print do menu do sistema"
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
                  Aprimorado modal de criação de problemas dentro da tela do
                  cliente.
                </li>
                <li>
                  Validação do tipo de dados inseridos no cadastro do cliente,
                  nos campos de CNPJ, CPF, email e telefone.
                </li>
                <li>
                  Informações presentes no cabeçalho da página de
                  visualização/edição do playbook.
                </li>
                <li>
                  Para criar um novo playbook, necessário informar o seu título
                  inicialmente.
                </li>
                <li>Melhorado experiência ao mover pastas e playbooks</li>
                <li>
                  Lista de clientes não trazer os clientes inativos por padrão.
                </li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-blue-600 px-2 rounded-2xl py-1 mb-6 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Adicionado
              </p>
              <ul className="space-y-6">
                <li>
                  Filtro por data no dashboard de clientes enviados para
                  operação.
                </li>
                <li>Novos regimes tributários: Imune e Isenta.</li>
                <li>
                  Organização em menu para pastas e documentos nos playbooks.
                </li>
                <li>
                  Pesquisa por conteúdo destacando o trecho pesquisado nos
                  playbooks.
                </li>
                <li>Novas informações na home.</li>
                <li>Maior validação ao excluir um cliente.</li>
                <li>Segmentação de categorias.</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-red-600 px-2 rounded-2xl py-1 mb-6 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Corrigido
              </p>
              <ul className="space-y-6">
                <li>Exibição do modal de excluir categoria dos playbooks.</li>
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
