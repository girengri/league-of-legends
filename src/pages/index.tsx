import type { NextPage } from "next";
import { ChampionList } from "../components/champions";
import { ChampionLayout } from "../components/layouts";
import { FullScreenLoading, HeroVideo } from "../components/ui";
import { useChampions } from "../hooks";

const HomePage: NextPage = () => {
  const { champions, isLoading } = useChampions(
    "http://ddragon.leagueoflegends.com/cdn/12.19.1/data/es_MX/champion.json"
  );

  return (
    <ChampionLayout
      title="Campeones - League of Legends"
      pageDescription="Con más de 140 campeones por descubrir, siempre habrá algo nuevo que dominar. Conócelos a todos aquí"
      imageFullUrl="https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg"
    >
      <HeroVideo />

      <section className="flex flex-col justify-center items-center w-11/12 max-w-screen-xl my-0 mx-auto overflow-hidden px-0 py-7 font-roboto">
        <h2 className="text-3xl font-bold flex flex-col justify-center items-center uppercase">
          Elige tu{" "}
          <span className="text-7xl md:text-9xl font-bold uppercase">
            Campeón
          </span>
        </h2>
        <p className=" text-center font-light p-5 w-3/6">
          Con más de 140 campeones, encontrarás el que se ajuste perfectamente a
          tu estilo de juego. Domina a uno o domínalos a todos.
        </p>
      </section>

      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <ChampionList champions={champions} />
      )}
    </ChampionLayout>
  );
};

export default HomePage;
