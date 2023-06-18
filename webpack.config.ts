import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { buildEnv, BuildPaths } from './config/build/types/config';

export default (env: buildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'), // входная точка, path resolve __dirname - текущая папка
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'), // выбираем файл шаблона,
        src: path.resolve(__dirname, 'src'),
    };
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });
};
