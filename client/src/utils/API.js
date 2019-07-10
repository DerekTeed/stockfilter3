import axios from "axios";

export default {
    // Gets stocks from the API
    getStocks: async () => {
        return axios.get("/api/report/allstocks");
    },
    
    getTop10: async () => {
        return axios.get("/api/top10");
    }
};