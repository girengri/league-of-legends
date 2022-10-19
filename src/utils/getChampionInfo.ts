import { lolApi } from "../api";

export const getChampionInfo = async (name: string) => {
    try {
        const { data } = await lolApi.get(`/champion/${name}.json`);

        return {
            champion: data?.data || {},
        };
    } catch (error) {
        return null;
    }
};
