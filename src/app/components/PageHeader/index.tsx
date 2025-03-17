import Image from "next/image";
import imageBackground from "@/app/images/header.png";

interface PageHeaderProps {
  description: string[];
}
export default function PageHeader({ description }: PageHeaderProps) {
  return (
    <main className="text-slate-50 dark:bg-slate-950 bg-slate-50 p-6">
      <div className="relative">
        <Image
          src={imageBackground}
          alt="imagem de background"
          quality={100}
          className="rounded-3xl m-auto h-80 w-full"
        />
        <div className="absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-center top-0 p-5">
          <h1 className="md:text-6xl font-semibold mb-4 text-3xl">
            Novidades no G Client
          </h1>
          <p className="sm:text-xl">{description.join(", ")}</p>
        </div>
      </div>
    </main>
  );
}
