import { FC } from "react";
import NextLink from "next/link";
import { IChampion } from "../../interfaces";

interface Props {
    champion: IChampion;
}

export const ChampionCard: FC<Props> = ({ champion }) => {
    return (
        <NextLink href={`/champions/${champion.id}`} passHref prefetch={false}>
            <a>
                <div className="bg-background scale-95 transition  hover:transition ease-in-out hover:scale-100 hover:cursor-pointer hover:bg-background--hover">
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
            </a>
        </NextLink>
    );
};
