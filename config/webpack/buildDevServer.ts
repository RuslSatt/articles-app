import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from '../types/config';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    const { paths, port, isDev } = options;

    return {
        static: paths.build,
        open: true,
        port,
        historyApiFallback: true,
        client: {
            overlay: isDev
        }
    };
}
