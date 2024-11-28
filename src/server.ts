import app from "./app";
import config from "./config/config";
import logger from "./config/logger";

const main = () => {
    try {
        const PORT = config.PORT || 3000;
        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
            logger.error("This is an error log 1");
            logger.error("This is an error log 2");
            logger.warn("This is a warning log");
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

main();
