import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions):webpack.RuleSetRule[] {
    const fileLoader = {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fontsLoader = {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        }

    const cssLoader = buildCssLoader(isDev);

    // Если не используем ts - нужен babel
    const typescriptLoader = {
        test: /\.tsx?$/, // какие файлы проходят через лоадер
        use: 'ts-loader', // какое лоадер используем
        exclude: /node_modules/, // что исключаем
    };
    return [ // лоадеры для определенных файлов
        typescriptLoader,
        cssLoader,
        fileLoader,
        svgLoader,
        fontsLoader
    ];
}
