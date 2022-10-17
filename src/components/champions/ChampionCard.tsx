import { FC } from "react";
import { IChampion } from "../../interfaces";

interface Props {
    champion: IChampion;
}

export const ChampionCard: FC<Props> = ({ champion }) => {
    return (
        <div>
            <picture>
                <img
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                    alt={champion.name}
                />
            </picture>
        </div>
    );
};
