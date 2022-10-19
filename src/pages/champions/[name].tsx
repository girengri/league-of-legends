import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { lolApi } from "../../api";
import { ChampionLayout } from "../../components/layouts";

import { getChampionInfo } from "../../utils";

// TODO: Organizar los tipos de datos any

interface Props {
    championFeatures: any;
}

const ChampionPage: NextPage<Props> = ({ championFeatures }) => {
    const championFeature = Object.values(championFeatures.champion).map(
        (feature: any) => feature
    );

    const pageDescription = championFeature[0].lore.substring(0, 251);

    console.log(championFeature);

    return (
        <ChampionLayout
            title={`${championFeature[0].name}, ${championFeature[0].title} - League of Legends`}
            pageDescription={`${pageDescription}...`}
            imageFullUrl={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championFeature[0].id}_0.jpg`}
        >
            <div>
                <section key={championFeature[0].id}>
                    <article
                        className="w-full h-[700px] bg-no-repeat bg-cover bg-fixed"
                        style={{
                            backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championFeature[0].id}_0.jpg")`,
                        }}
                    ></article>
                </section>
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
