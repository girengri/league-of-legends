import { FC } from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./ChampionSlideshow.module.css";

interface Props {
    images: [];
    id: string;
}

export const ChampionSlideshow: FC<Props> = ({ images, id }) => {
    const urlImages = images.map(
        (image: any) =>
            `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${image.num}.jpg`
    );

    return (
        <Slide easing="ease" duration={2000} indicators>
            {urlImages.map((image: string, index: number) => {
                return (
                    <div key={index} className={styles["each-slide"]}>
                        <div
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                            }}
                        ></div>
                    </div>
                );
            })}
        </Slide>
    );
};
