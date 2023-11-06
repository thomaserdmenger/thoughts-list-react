import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  "react/prop-types": "off",
  base: "/thoughts-list-react",
  plugins: [react()],
});
