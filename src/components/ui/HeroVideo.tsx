import React from "react";

export const HeroVideo = () => {
    return (
        <section className="relative min-h-[600px]">
            <picture className="relative z-10 flex justify-center top-[10rem]">
                <img
                    src="https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"
                    alt="League of legends logo"
                    className="w-[40%]"
                />
            </picture>

            <video
                className="absolute top-0 left-0 w-full h-full object-cover "
                autoPlay
                muted
                loop
            >
                <source
                    src="https://www.leagueoflegends.com/static/hero-de0ba45b1d0959277d12545fbb645722.mp4"
                    type="video/mp4"
                />
            </video>
        </section>
    );
};
