interface DefaultTextProps {
  versionDate?: string;
  title: string;
  items: string[];
}

export function DefaultText({ versionDate, title, items }: DefaultTextProps) {
  return (
    <div className="space-y-3  py-2 px-8 md:px-0">
      <h2 className="font-bold text-2xl">{versionDate}</h2>
      <h3 className="font-semibold text-xl first-letter:uppercase">{title}</h3>
      <p>Nesta versão {title}:</p>
      <ul className="text-slate-700 dark:text-slate-400">
        {items.map((item) => (
          <li className="list-disc" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
