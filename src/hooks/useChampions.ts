import useSWR, { SWRConfiguration } from "swr";
import { IResultChampion } from "../interfaces";

export const useChampions = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<IResultChampion>(url, config);

    return {
        champions: data?.data || {},
        isLoading: !error && !data,
        isError: error,
    };
};
