import type { NextPage } from "next";
import { ChampionList } from "../components/champions";
import { ChampionLayout } from "../components/layouts";
import { FullScreenLoading } from "../components/ui";
import { useChampions } from "../hooks";

const Home: NextPage = () => {
  const { champions, isLoading } = useChampions(
    "http://ddragon.leagueoflegends.com/cdn/12.19.1/data/es_MX/champion.json"
  );

  return (
    <ChampionLayout title="" pageDescription="">
      <h2>Todos los campeones</h2>

      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <ChampionList champions={champions} />
      )}
    </ChampionLayout>
  );
};

export default Home;
