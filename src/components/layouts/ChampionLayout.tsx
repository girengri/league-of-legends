import { FC } from "react";
import Head from "next/head";
// import { Navbar } from "../ui";

interface Props {
    children: React.ReactNode;
    imageFullUrl?: string;
    pageDescription: string;
    title: string;
    clase?: string;
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
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={pageDescription} />
                {imageFullUrl && <meta name="twitter:image" content={imageFullUrl} />}
                <meta
                    http-equiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
                <title>{title}</title>
                <link
                    rel="icon"
                    href="https://www.leagueoflegends.com/static/favicon-0cf29ce019f7cd1e7b24f85ab6ff97da.ico"
                />
            </Head>

            <main>{children}</main>
        </>
    );
};
