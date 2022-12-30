import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  appType: 'spa',
  base: './',
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@routes': path.resolve(__dirname, './src/routes/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@templates': path.resolve(__dirname, './src/templates/')
    }
  }
})
