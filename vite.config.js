import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

const domain = "scat.test";
const homedir = require("os").homedir();

console.log(homedir);

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],
    server: {
        https: {
            // key: homedir + "/.config/valet/Certificates/" + domain + ".key",
            // cert: homedir + "/.config/valet/Certificates/" + domain + ".crt",
            key: homedir + "/.config/herd/config/valet/Certificates/" + domain + ".key",
            cert: homedir + "/.config/herd/config/valet/Certificates/" + domain + ".crt",
        },
        host: domain,
        hmr: {
            host: domain,
        },
    },
});
