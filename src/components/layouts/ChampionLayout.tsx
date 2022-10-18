import { FC } from "react";
import Head from "next/head";
// import { Navbar } from "../ui";

interface Props {
    children: React.ReactNode;
    imageFullUrl?: string;
    pageDescription: string;
    title: string;
}

export const ChampionLayout: FC<Props> = ({
    children,
    imageFullUrl,
    pageDescription,
    title,
}) => {
    return (
        <>
            <Head>
                <meta name="author" content="Giovany Rendon" />
                <meta name="description" content={pageDescription} />
                <meta
                    name="keywords"
                    content={`${title}, campeones, lol, league of legends`}
                />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />

                {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}

                <title>{title}</title>
                <link
                    rel="icon"
                    href="https://www.leagueoflegends.com/static/favicon-0cf29ce019f7cd1e7b24f85ab6ff97da.ico"
                />
            </Head>

            <header>{/* <Navbar /> */}</header>

            {/* className="w-11/12 max-w-screen-xl my-0 mx-auto overflow-hidden px-0 py-7 font-roboto" */}
            <main>{children}</main>
        </>
    );
};
