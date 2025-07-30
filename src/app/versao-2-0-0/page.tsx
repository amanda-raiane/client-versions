"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Footer } from "@/app/components/Footer";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SessionOtherResources } from "@/app/components/SessionOtherResources";
import PageHeader from "@/app/components/PageHeader";
import { ThemeChanger } from "@/app/components/ThemeChanger.tsx";

import logoDark from "@/app/assets/logo-branco.png";
import logoLight from "@/app/assets/logo-azul.png";
import Forms from "@/app/images/versions/2_0_0/forms.png";
import LicenseControl from "@/app/images/versions/2_0_0/license-control.png";
import PartnersNps from "@/app/images/versions/2_0_0/partners-nps.png";
import NewClientPage from "@/app/images/versions/2_0_0/new-client-page.png";
import ForgetPassword from "@/app/images/versions/2_0_0/forget-password.png";

const updates = [
  {
    title: "Formulários personalizados para captação de dados e documentos",
    description:
      "Agora você pode coletar informações e documentos diretamente pelo G Client, sem depender de ferramentas externas.",
    steps: [
      "Configure o formulário com os campos que desejar — texto, anexos, seleções e mais.",
      "Depois de configurado, vincule o formulário durante a criação ou edição dos processos (onboarding, societário, adoção e offboarding).",
      "Para compartilhar, clique no card do processo e use o botão de copiar link ao lado do botão de editar. Basta enviá-lo ao seu cliente.",
    ],
    image: Forms,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Controle de vencimento de licenças",
    description:
      "Evite prejuízos com licenças expiradas. Agora é possível acompanhar os vencimentos dentro do G Client.",
    steps: [
      "No menu lateral, acesse a seção Societário e clique em **Controle de Licenças**.",
      "Clique no botão no canto superior direito para adicionar uma nova licença: selecione o cliente, o tipo de licença e a data de vencimento.",
      "Com 30 dias de antecedência do vencimento, você será notificado automaticamente.",
    ],
    image: LicenseControl,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Envio da pesquisa NPS para múltiplos e-mails",
    description:
      "Agora a pesquisa NPS é enviada automaticamente também para os sócios cadastrados no G Client.",
    steps: [
      "O processo de envio continua o mesmo. A única diferença é que os sócios cadastrados também receberão a pesquisa.",
    ],
    image: PartnersNps,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Novo layout da página do cliente",
    description: "Página com visual mais limpo, moderno e organizado.",
    steps: ["Layout redesenhado para proporcionar mais clareza e praticidade."],
    image: NewClientPage,
    status: "Adicionado",
    link: "#",
  },
  {
    title: "Melhorias no fluxo de login e recuperação de senha",
    description:
      "Facilitamos o acesso ao G Client com melhorias visuais e novas funcionalidades.",
    steps: [
      "Incluímos uma nova página para recuperação de senha e atualizamos o design da área de login.",
    ],
    image: ForgetPassword,
    status: "Adicionado",
    link: "#",
  },
];

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen bg-slate-50 p-1">
        <PageHeader description={updates.map((update) => update.title)} />

        <header className="2xl:px-64 px-5 flex md:justify-between items-center flex-col-reverse sm:flex-row mt-6">
          <div>
            <Image
              className="w-48"
              alt="logo escrito G Client"
              src={theme === "dark" ? logoDark : logoLight}
            />
            <p className="mt-2 dark:text-slate-400 text-sm text-slate-800">
              26 de junho de 2025 <span>v2.0.0</span>
            </p>
          </div>
          <ThemeChanger />
        </header>

        {updates.map(({ title, description, steps, image, status, link }) => (
          <section
            key={title}
            className="2xl:px-64 px-5 mt-20 lg:mb-36 mb-24 flex md:justify-center md:gap-20 gap-10 flex-col items-center lg:flex-row"
          >
            <div className="dark:text-slate-50 text-slate-900 space-y-3 lg:w-1/2">
              <span
                className={`bg-${
                  status === "Adicionado" ? "blue" : "yellow"
                }-600 px-2 rounded-2xl py-1 text-xs uppercase tracking-widest font-semibold text-slate-50`}
              >
                {status}
              </span>
              <h2 className="sm:text-3xl text-2xl">{title}</h2>
              <p className="sm:text-lg">{description}</p>
              <ol className="space-y-6 pb-8">
                {steps.map((step, index) => (
                  <li key={index}>
                    <strong>{index + 1}. </strong>
                    {step}
                  </li>
                ))}
              </ol>
              <Link
                className={`${link === "#" ? "hidden" : ""} `}
                target="_blank"
                href={link}
              >
                <PrimaryButton text="Ver tutorial" />
              </Link>
            </div>
            <Image
              src={image}
              quality={100}
              className="rounded-2xl lg:w-[400px] min-w-[260px] h-full transition-all duration-300 hover:scale-110 border border-slate-200 shadow-lg dark:border-none"
              alt={title}
            />
          </section>
        ))}

        <section className="2xl:px-64 px-5 lg:my-36 my-20">
          <h2 className="text-2xl font-medium mb-5">
            Demais itens nesta versão
          </h2>
          <div className="flex md:gap-20 gap-5 flex-col md:flex-row">
            <div className="md:max-w-[30%]">
              <p className="bg-blue-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Adicionado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Inativar usuários</li>
                <li>Relatório honorário X plano</li>
                <li>Integração com stripe para assinatura</li>
                <li>Usuário admin pode alterar o tipo de outros usuários</li>
                <li>Página de módulos</li>
              </ul>
            </div>
            <div className="md:max-w-[30%]">
              <p className="bg-yellow-600 px-2 rounded-2xl py-1 mb-2 text-xs uppercase tracking-widest font-semibold text-slate-50 w-min">
                Modificado
              </p>
              <ul className="flex flex-col gap-2">
                <li>Editar checklist nos fluxos de trabalho</li>
                <li>Melhorias no menu lateral</li>
                <li>Ajustes na página de processos de entrada</li>
                <li>Melhorias na página de informações do usuários</li>
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
