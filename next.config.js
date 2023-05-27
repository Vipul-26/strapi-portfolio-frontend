const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const git = new GitRevisionPlugin();

module.exports = {
    webpack(config, { webpack }) {
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: ['svgr/webpack'],
            },
            {
                test: /\.(jpg|JGP|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot|pdf)$/gi,
                use: ['file-loader'],
            }
        )
        const date = new Date();
        const buildData = `
        version: ${git.version()},
        branch: ${git.branch()},
        commit hash: ${git.commithash()},
        build time: ${date.toDateString()} ${date.toTimeString()}`;
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.BUILD_DATA': JSON.stringify(buildData),
            }),
        );
        return config;
    },
};