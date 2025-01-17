import { OtherVersion } from "./OtherVersion";
import imageNotification from "@/app/images/versions/1_4_2/notificacao.png";
import imageDocs from "@/app/images/versions/1_5_3/documentos.png";
import imageDash from "@/app/images/versions/1_6_3/dash-legal.png";
import imageDashOperation from "@/app/images/versions/1_7_4/dash-operacao.png";
import imageHealthScore from "@/app/images/versions/1_8_0/health-score.png";
import imageNotice from "@/app/images/versions/1_10_0/aviso-previo.png";
import imageOffboarding from "@/app/images/versions/1_11_0/offboarding.png";
import imageReports from "@/app/images/versions/1_12_0/relatorios.png";
import imageHome from "@/app/images/versions/1_13_0/menu.png";
import registerOcorrenceMenu from "@/app/images/versions/1_14_0/cadastro-via-menu.png";
import imageKaban from "@/app/images/versions/1_19_0/kaban.png";
import imageSign from "@/app/images/versions/1_20_0/sign.png";
import darkMode from "@/app/images/versions/1_21_0/dark-mode.png";
import SaraIa from "@/app/images/versions/1_22_0/sara-ia.png";
import Communication from "@/app/images/versions/1_23_0/communication.png";

export function SessionOtherResources() {
  return (
    <section className="2xl:px-64 px-5 lg:my-36">
      <div className="dark:bg-slate-900 bg-slate-100 md:p-10 p-4 rounded-2xl space-y-10">
        <h2 className="text-3xl text-center">Conheça outros recursos</h2>
        <div className="grid xl:grid-cols-3 gap-10 md:grid-cols-2">
          <OtherVersion
            link="/versao-1-23-0"
            date="3 de janeiro de 2025"
            imageUrl={Communication}
            version="v1.22.0"
            title="Comunicados em massa via email."
          />

          <OtherVersion
            link="/versao-1-22-0"
            date="5 de dezembro de 2024"
            imageUrl={SaraIa}
            version="v1.22.0"
            title="Análise de relatório de clientes com IA."
          />

          <OtherVersion
            link="/versao-1-21-0"
            date="25 de novembro de 2024"
            imageUrl={darkMode}
            version="v1.21.0"
            title="Alterne entre o light e dark mode no G Client."
          />

          <OtherVersion
            link="/versao-1-20-1"
            date="4 de novembro de 2024"
            imageUrl={imageSign}
            version="v1.20.1"
            title="Envie contratos para sem clientes diretamente do G Client."
          />

          <OtherVersion
            link="/versao-1-19-0"
            date="15 de outubro de 2024"
            imageUrl={imageKaban}
            version="v1.19.0"
            title="Crie quadros kanban personalizados para o seu fluxo de trabalho."
          />

          <OtherVersion
            link="/versao-1-14-0"
            date="26 de julho de 2024"
            imageUrl={registerOcorrenceMenu}
            version="v1.14.0"
            title="Registro de ocorrência via menu."
          />

          <OtherVersion
            link="/versao-1-13-0"
            date="02 de julho de 2024"
            imageUrl={imageHome}
            version="v1.13.0"
            title="Tela inicial com dados dos clientes."
          />

          <OtherVersion
            link="/versao-1-12-0"
            date="19 de junho de 2024"
            imageUrl={imageReports}
            version="v1.12.0"
            title="Relatórios aprimorados."
          />
          <OtherVersion
            link="/versao-1-11-0"
            date="10 de junho de 2024"
            imageUrl={imageOffboarding}
            version="v1.11.0"
            title="Offboarding de clientes."
          />
          <OtherVersion
            link="/versao-1-10-0"
            date="02 de junho de 2024"
            imageUrl={imageNotice}
            version="v1.10.0"
            title="Dias para aviso prévio."
          />
          <OtherVersion
            link="/versao-1-8-0"
            date="16 de maio de 2024"
            imageUrl={imageHealthScore}
            version="v1.8.0"
            title="Pesquisa NPS e Health Score."
          />
          <OtherVersion
            link="/versao-1-7-4"
            date="17 de abril de 2024"
            imageUrl={imageDashOperation}
            version="v1.7.4"
            title="Dashboard de novos clientes para operação."
          />
          <OtherVersion
            link="/versao-1-6-3"
            date="22 de março de 2024"
            imageUrl={imageDash}
            version="v1.6.3"
            title="Veja tudo em um só lugar."
          />
          <OtherVersion
            link="/versao-1-5-3"
            date="01 de março de 2024"
            imageUrl={imageDocs}
            version="v1.5.3"
            title="Dê vida as suas ideias."
          />
          <OtherVersion
            link="/versao-1-4-2"
            date="14 de fevereiro de 2024"
            imageUrl={imageNotification}
            version="v1.4.2"
            title="G Client conta com notificações."
          />
        </div>
      </div>
    </section>
  );
}
