// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// const createCssLoader = (isDev: boolean) => ({
//     test: /\.s[ac]ss$/i,
//     use: [
//         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
//         {
//             loader: 'css-loader',
//             options: {
//                 modules: {
//                     auto: (filePath: string) => Boolean(filePath.includes('.module.scss')),
//                     localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
//                 },
//             },
//         },
//         'sass-loader',
//     ],
// });
//
// module.exports = createCssLoader
