import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'trades',
  exposes: {
    './Routes': 'apps/trades/src/app/remote-entry/entry.routes.ts',
  },
  remotes: ['login'],
  shared: (libraryName, defaultConfig) => {
    if (libraryName === 'socket.io-client') {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: false,
        requiredVersion: '^4.8.1',
      };
    }

    // return default config for other libraries
    return defaultConfig;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
