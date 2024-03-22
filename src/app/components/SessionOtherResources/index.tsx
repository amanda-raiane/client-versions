import { OtherVersion } from "./OtherVersion";
import imageNotification from "@/app/images/versions/1_4_2/notificacao.png";
import imageDocs from "@/app/images/versions/1_5_3/documentos.png";

export function SessionOtherResources() {
  return (
    <section className="2xl:px-64 px-5 lg:my-36">
      <div className="dark:bg-slate-900 bg-slate-100 p-10 rounded-2xl space-y-10">
        <h2 className="text-3xl text-center">Conheça outros recursos</h2>
        <div className="flex justify-center lg:items-start gap-8 flex-col lg:flex-row items-center">
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
