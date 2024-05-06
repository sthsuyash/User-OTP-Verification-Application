import app from "./app";
import config from "./config";

const PORT: string | number = config.server.port || 3000;
const API_URL: string = "http://localhost:3000/api/v1"

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at ${API_URL}`);
});
