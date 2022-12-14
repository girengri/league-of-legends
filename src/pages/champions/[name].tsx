import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import { lolApi } from "../../api";
import { ChampionSlideshow } from "../../components/champions";
import { ChampionLayout } from "../../components/layouts";

import { getChampionInfo } from "../../utils";

// TODO: Organizar los tipos de datos any

interface Props {
    championFeatures: any;
}

const ChampionPage: NextPage<Props> = ({ championFeatures }) => {
    const router = useRouter();

    const goToHome = () => {
        router.push("/");
    };

    const championFeature = Object.values(championFeatures.champion).map(
        (feature: any) => feature
    );

    return (
        <ChampionLayout
            title={`${championFeature[0].name}, ${championFeature[0].title} - League of Legends`}
            pageDescription={championFeature[0].blurb}
            imageFullUrl={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championFeature[0].id}_0.jpg`}
        >
            <section className="bg-[#000913]">
                <div
                    className="w-full h-[100vh] bg-no-repeat bg-contain lg:bg-cover flex flex-col justify-around"
                    style={{
                        backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championFeature[0].id}_0.jpg")`,
                    }}
                >
                    <div className="w-11/12 max-w-screen-xl my-0 mx-auto overflow-hidden px-0 py-7 font-roboto flex justify-center items-end relative">
                        <div className="text-center">
                            <p className="font-bold text-xl text-white uppercase tracking-wider italic">
                                {championFeature[0].title}
                            </p>
                            <h2 className="font-bold text-5xl text-white uppercase tracking-wider italic">
                                {championFeature[0].name}
                            </h2>
                        </div>

                        <button
                            className="absolute text-white top-[108px] sm:top-[3rem] right-0 bg-[#0000009d] p-3 rounded-[15px] border-[1px] border-solid border-[#0bc6e3] scale-95 transition  hover:transition ease-in-out hover:scale-100 hover:cursor-pointer uppercase text-[0.9]"
                            onClick={goToHome}
                        >
                            Lista de campeones
                        </button>
                    </div>

                    <div className="backdrop-blur-xl lg:mt-[12rem]">
                        <div className="w-11/12 max-w-screen-xl my-0 mx-auto overflow-hidden px-0 py-7 font-roboto flex flex-col border-2 border-[#333a42]">
                            <div className="flex justify-around pb-[2rem]">
                                <div className="flex flex-col items-center">
                                    <picture>
                                        <img width="30rem" src="/rol.svg" alt="rol" />
                                    </picture>

                                    <h2 className="text-white uppercase">Rol</h2>

                                    <p className="uppercase text-xs text-[#d0a85c]">
                                        {championFeature[0].tags[0]}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="text-white p-[2rem] font-bold">
                                    {championFeature[0].lore}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#000913] lg:bg-[#fff]">
                <div className="w-11/12 max-w-screen-xl my-0 mx-auto overflow-hidden px-0 py-7 font-roboto">
                    <h2 className="text-white lg:text-[#000] font-bold text-xl uppercase tracking-wider italic pb-[2rem]">
                        Aspectos disponibles
                    </h2>

                    <ChampionSlideshow
                        id={championFeature[0].id}
                        images={championFeature[0].skins}
                    />
                </div>
            </section>
        </ChampionLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await lolApi.get("/champion.json");
    const championNames = Object.keys(data.data).map((champion) => champion);

    return {
        paths: championNames.map((name) => ({
            params: { name },
        })),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };
    const championFeatures = await getChampionInfo(name);

    if (!championFeatures) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            championFeatures,
        },
        revalidate: 3600,
    };
};

export default ChampionPage;
