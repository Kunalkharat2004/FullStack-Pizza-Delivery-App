import app from "./app";
import config from "./config/config";

const main = () => {
    try {
        const PORT = config.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

main();
