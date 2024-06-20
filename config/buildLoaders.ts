export function buildLoaders() {
    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    }

    return [tsLoader]
}
