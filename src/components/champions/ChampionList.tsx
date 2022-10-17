import { FC } from "react";
import { IChampion } from "../../interfaces";
import { ChampionCard } from "./";

interface Props {
    champions: { [key: string]: IChampion };
}

export const ChampionList: FC<Props> = ({ champions }) => {
    return (
        <section>
            {Object.values(champions).map((champion) => (
                <ChampionCard key={champion.id} champion={champion} />
            ))}
        </section>
    );
};
