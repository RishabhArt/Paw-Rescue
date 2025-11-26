import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), '');

  // Extract necessary environment variables
  const apiTarget = env.VITE_API_URL || 'http://localhost:3001';
  const clerkFrontendApi = env.VITE_CLERK_FRONTEND_API || 'desired-crow-80.clerk.accounts.dev';
  const clerkPublishableKey = env.VITE_CLERK_PUBLISHABLE_KEY;

  // Log loaded environment variables for debugging
  console.log('Environment Variables:', {
    VITE_CLERK_PUBLISHABLE_KEY: clerkPublishableKey ? '✅ Set' : '❌ Missing',
    VITE_CLERK_FRONTEND_API: clerkFrontendApi,
    VITE_API_URL: apiTarget
  });

  return {
    plugins: [react()],
    base: '/',
    define: {
      'import.meta.env.VITE_CLERK_PUBLISHABLE_KEY': JSON.stringify(clerkPublishableKey),
      'import.meta.env.VITE_API_URL': JSON.stringify(apiTarget),
      'import.meta.env.VITE_CLERK_FRONTEND_API': JSON.stringify(clerkFrontendApi),
      'process.env': {
        VITE_CLERK_PUBLISHABLE_KEY: JSON.stringify(clerkPublishableKey),
        VITE_API_URL: JSON.stringify(apiTarget),
        VITE_CLERK_FRONTEND_API: JSON.stringify(clerkFrontendApi)
      }
    },
    build: {
      outDir: 'dist/client', // Updated to match server.ts expectations
      sourcemap: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            clerk: ['@clerk/clerk-react'],
          },
        },
      },
      // Add emptyOutDir to ensure clean builds
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      open: true,
      hmr: {
        clientPort: 3000,
      },
      proxy: {
        // API endpoints
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
        '/pets': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
        '/auth': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
        '/ngos': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
        '/animal-shelters': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
        '/rescue-reports': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
        // Clerk OAuth and API endpoints
        '/v1': {
          target: `https://${clerkFrontendApi}`,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/v1/, '/v1')
        },
        '/v1/verify': {
          target: `https://${clerkFrontendApi}`,
          changeOrigin: true,
          secure: false,
        },
        '/oauth': {
          target: `https://${clerkFrontendApi}`,
          changeOrigin: true,
          secure: false,
        },
        '/sso-callback': {
          target: `https://${clerkFrontendApi}`,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/sso-callback/, '')
        },
        '/.well-known': {
          target: `https://${clerkFrontendApi}`,
          changeOrigin: true,
          secure: false,
        }
      },
      cors: {
        origin: [
          'http://localhost:3000',
          'http://localhost:3001',
          `https://${clerkFrontendApi}` 
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
        allowedHeaders: [
          'X-CSRF-Token',
          'X-Requested-With',
          'Accept',
          'Accept-Version',
          'Content-Length',
          'Content-MD5',
          'Content-Type',
          'Date',
          'X-Api-Version',
          'Authorization',
          'x-clerk-auth-reason',
          'x-clerk-auth-message',
          'x-clerk-auth-status',
          'x-clerk-auth-version',
          'x-clerk-debug',
          'x-clerk-source',
          'x-clerk-user-agent'
        ].join(', ')
      }
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@clerk/clerk-react'
      ],
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis'
        }
      }
    }
  };
});
