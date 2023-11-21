import { DefaultText } from "./components/DefaultText";
import { Header } from "./components/Header";
import { a1_0_0 } from "@/app/data/versions/1.0.0/added/data";
import { a1_2_1 } from "./data/versions/1.2.1/added/data";
import { f1_2_1 } from "./data/versions/1.2.1/fix/data";

export default function Home() {
  return (
    <main className="text-slate-900 dark:bg-slate-950 dark:text-slate-300 min-h-screen">
      <div>
        <Header
          contactLink="https://api.whatsapp.com/send?phone=5544997046569&text=Ol%C3%A1,%20estava%20no%20site%20do%20Client%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
          loginLink="https://client.primorgroup.com.br/"
          instaLink="https://www.instagram.com/codificadev/"
          youTubeLink="https://www.youtube.com/@codificadev"
        />
      </div>
      <div className="xl:px-96 pt-5 px-8 md:px-16">
        <h1 className="font-bold text-4xl my-10 px-8 md:px-0">Histórico de mudanças</h1>
        <div className="py-5 dark:border-b dark:border-slate-800 border-b border-slate-300">
          <DefaultText
            title={"adicionamos"}
            items={a1_0_0}
            versionDate={"1.0.0 - Lançamento (13/11/23)"}
          />
        </div>
        <div className="py-5 dark:border-b dark:border-slate-800 border-b border-slate-300">
          <DefaultText
            title={"adicionamos"}
            items={a1_2_1}
            versionDate={"1.2.1 - (21/11/23)"}
          />
            <DefaultText
            title={"corrigimos"}
            items={f1_2_1}
          />
        </div>
      </div>
    </main>
  );
}
