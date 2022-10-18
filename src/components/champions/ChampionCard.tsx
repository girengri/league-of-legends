import { FC } from "react";
import { IChampion } from "../../interfaces";

interface Props {
    champion: IChampion;
}

export const ChampionCard: FC<Props> = ({ champion }) => {
    return (
        <div className="bg-background hover:cursor-pointer hover:bg-background--hover">
            <picture>
                <img
                    className="h-64 object-cover object-right"
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                    alt={champion.name}
                />
            </picture>

            <h2 className="w-full flex justify-center items-center p-2 text-xl italic font-bold text-white uppercase tracking-widest ">
                {champion.name}
            </h2>
        </div>
    );
};
