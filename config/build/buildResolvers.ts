import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // что проходит через webpack
        preferAbsolute: true, // абсолютные пути
        modules: [
            options.paths.src, 'node_modules',
        ],
        alias: {},
        mainFiles: ['index'],
    };
}
