import { config as con } from "dotenv";
con();

const _confit = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
};

const config = Object.freeze(_confit);
export default config;
