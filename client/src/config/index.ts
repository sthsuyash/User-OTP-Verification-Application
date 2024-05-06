let serverUrl;

if (import.meta.env.MODE === "production") {
    serverUrl = import.meta.env.VITE_PROD_URL;
} else {
    serverUrl = "http://localhost:3000/api/v1";
}

const config = {
    serverUrl: serverUrl
};

export default config;
