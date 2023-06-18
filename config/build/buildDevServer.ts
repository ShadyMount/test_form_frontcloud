import type { Configuration as DevServerConfig } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfig {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
        client: {
            overlay: false,
            logging: 'warn' // Want to set this to 'warn' or 'error'
        }
    };
}
