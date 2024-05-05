import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { jsxScopedCssPlugin } from 'rollup-plugin-jsx-scoped-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsxScopedCssPlugin()],
})
