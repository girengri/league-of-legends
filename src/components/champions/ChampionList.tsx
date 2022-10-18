import { FC } from "react";
import { IChampion } from "../../interfaces";
import { ChampionCard } from "./";

interface Props {
    champions: { [key: string]: IChampion };
}

export const ChampionList: FC<Props> = ({ champions }) => {
    return (
        <section className="grid grid-cols-custom gap-5 w-11/12 max-w-screen-xl my-0 mx-auto overflow-hidden px-0 py-7 font-roboto">
            {Object.values(champions).map((champion) => (
                <ChampionCard key={champion.id} champion={champion} />
            ))}
        </section>
    );
};
