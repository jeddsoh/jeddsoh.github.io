import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React, { useState } from 'react';`
  }
})
This code adds an esbuild option to the configuration object, which allows you to inject the import statement for React and useState at the beginning of each JSX file. The jsxInject option specifies the code to inject, which in this case is the import statement for React and useState.
*/