import path from 'path';
import { buildConfigWebpack } from './config/webpack/buildConfigWebpack';
import { IBuildEnv } from './config/types/config';

export default (env: IBuildEnv) => {
    const mode = env.mode || 'development';
    const port = env.port || 3000;

    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    return buildConfigWebpack({
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
            locales: path.resolve(__dirname, 'public', 'locales'),
            buildLocales: path.resolve(__dirname, 'build', 'locales')
        },
        isDev,
        port,
        apiUrl,
        project: 'frontend'
    });
};
