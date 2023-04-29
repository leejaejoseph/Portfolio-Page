export default {
  base: '/Portfolio-Page/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: 'src/index.html',
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'other-vendor': ['lodash', 'moment'],
        },
      },
    },
  },
};