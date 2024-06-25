import {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {IBuildOptions} from "./types/config";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    const {paths, port} = options

    return {
        static: paths.build,
        open: true,
        port
    }
}
