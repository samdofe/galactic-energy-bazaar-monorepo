import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';
import merge from 'webpack-merge';
import * as Dotenv from 'dotenv-webpack';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
const federatedModules = async () => withModuleFederation(
  {
    ...config,
    /*
     * Remote overrides for production.
     * Each entry is a pair of a unique name and the URL where it is deployed.
     *
     * e.g.
     * remotes: [
     *   ['app1', 'https://app1.example.com'],
     *   ['app2', 'https://app2.example.com'],
     * ]
     */
    remotes: [
      ['login', 'http://localhost:8081']
    ]
  },
  { dts: false }
);

export default async (config, context) => {
  const federatedModuleConfig = await federatedModules();
  return merge(federatedModuleConfig(config), {
    plugins: [
      new Dotenv({
        path: `.env.production`, // Path to your production .env file
        systemvars: true, // Load system environment variables
      }),
    ],
  })
}
