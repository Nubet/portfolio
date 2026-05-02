import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const enableAsyncCss = env.VITE_ENABLE_ASYNC_CSS !== 'false'

  return {
    plugins: [
      react(),
      ...(enableAsyncCss
        ? [
            {
              name: 'async-css-delivery',
              transformIndexHtml(html: string) {
                return html.replace(
                  /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
                  '<link rel="preload" as="style" crossorigin href="$1" onload="this.onload=null;this.rel=\'stylesheet\'">\n    <noscript><link rel="stylesheet" crossorigin href="$1"></noscript>',
                )
              },
            },
          ]
        : []),
    ],
    base: '/portfolio/',
  }
})
