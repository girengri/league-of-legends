import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { lolApi } from "../../api";
import { ChampionLayout } from "../../components/layouts";

import { getChampionInfo } from "../../utils";

// TODO: Organizar los tipos de datos any

interface Props {
    championFeatures: any;
}

const ChampionPage: NextPage<Props> = ({ championFeatures }) => {
    return (
        <ChampionLayout pageDescription={""} title={""}>
            <div>
                {Object.values(championFeatures.champion).map((feature: any) => (
                    <section key={feature.id}>
                        <article>
                            <picture style={{height: "500px"}}>
                                <img
                                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${feature.id}_0.jpg`}
                                    width="100%"
                                    alt=""
                                />
                            </picture>
                        </article>
                    </section>
                ))}
            </div>
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
