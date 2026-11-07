import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { shaderCompiler } from '@galacean/engine-shader-compiler/bundler/rollup'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'galacean-cdn',
      enforce: 'pre',
      resolveId(id) {
        if (id === '@galacean/engine') {
          return {
            id: 'https://mdn.alipayobjects.com/rms/afts/file/A*0igtSZdV_z8AAAAAgCAAAAgAehQnAQ/galacean-engine-2.0.0-alpha.50.min.js',
            external: true,
          }
        }
      },
    },
    shaderCompiler({
      precompile: {
        input: 'src/effects/shaders',
        output: 'src/effects/.compiled',
        emitIndex: false,
        emitSources: false,
      },
    }),
    react(),
  ],
})
