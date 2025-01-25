import { withModuleFederation } from '@nx/module-federation/angular';
import * as Dotenv from 'dotenv-webpack';
import merge from 'webpack-merge';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
//export default withModuleFederation(config, { dts: false });


const federatedModules = async () => withModuleFederation({ ...config }, { dts: false });

export default async (config, context) => {
  const federatedModuleConfig = await federatedModules();
  return merge(federatedModuleConfig(config), {
    plugins: [
      new Dotenv({
        path: `.env.development`, // Path to your production .env file
        systemvars: true, // Load system environment variables
      }),
    ],
  })
}