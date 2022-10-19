import axios from "axios";

const lolApi = axios.create({
    baseURL: "http://ddragon.leagueoflegends.com/cdn/12.20.1/data/es_MX",
});

export default lolApi;
