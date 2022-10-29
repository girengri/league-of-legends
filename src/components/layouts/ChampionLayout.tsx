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

            <footer className="bg-[#000] lg:bg-[#fff]">
                <div className="flex flex-col justify-center items-center w-11/12 max-w-screen-xl my-0 mx-auto overflow-hidden px-0 py-7 font-roboto">
                    <section className="flex flex-col md:flex-row justify-center items-center">
                        <h1 className="pr-[1rem] font-bold uppercase text-[#fff] lg:text-[#000]">
                            &copy;2022. Giovany Rendon.
                        </h1>

                        <p className="font-bold text-[1rem] text-[#fff] lg:text-[#000] pr-[1rem]">
                            Todos los derechos reservados
                        </p>

                        <div>
                            <a
                                className="font-bold text-[1rem] text-[#fff] lg:text-[#000]"
                                href="mailto:giova.rendon96@gmail.com"
                            >
                                giova.rendon96@gmail.com
                            </a>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    );
};
