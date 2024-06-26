import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/config";

export function buildLoaders({isDev}: IBuildOptions) {
    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module/,
                        localIdentName: isDev ? "[name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [tsLoader, styleLoader]
}
