import type { NewsItem } from '../../../types/news.ts';
import Gta6 from '../../../assets/GTA 6.svg';
import Rectangle24 from '../../../assets/Rectangle24.svg';
import Rectangle25 from '../../../assets/Rectangle 25.svg';

const mainNews: NewsItem = {
  id: 1,
  title: "Grand Theft Auto VI – Veja o 1º trailer agora",
  date: "Rockstar Games — 5 de dezembro de 2023",
  image: { src: Gta6, alt: "gta" }
};

const sideNews: NewsItem[] = [
  {
    id: 2,
    title: "1º Trailer. Terça-feira, 5 de Dezembro. 9h Et.",
    date: "Rockstar Games — 1 de dezembro de 2023",
    image: { src: Rectangle25, alt: "Rectangle 25" },
  },
  {
    id: 3,
    title: "Nova atualização de GTA Online chegando em dezembro",
    date: "GTA Online — 30 de novembro de 2023",
    image: { src: Rectangle24, alt: "Rectangle 24" },
  },
];

const News = () => {
  return (
    <section className="w-[80%] mx-auto py-10 ">
      <h1 className="text-3xl font-bold">Últimas Notícias</h1>

      <div className="grid grid-cols-3 gap-10 mt-6">
        <div className="col-span-2">
          <img src={mainNews.image.src} alt={mainNews.image.alt} className="rounded-xl w-full" />
          <h2 className="text-2xl mt-6">{mainNews.title}</h2>
          <p className="text-gray-400 mt-2">{mainNews.date}</p>
        </div>

        <div className="flex flex-col gap-6">
          {sideNews.map((n) => (
            <div key={n.id} className="rounded-lg">
              <img src={n.image.src} alt={n.image.alt} className="rounded-lg" />
              <h3 className="mt-3 text-lg">{n.title}</h3>
              <p className="text-gray-400 text-sm">{n.date}</p>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default News