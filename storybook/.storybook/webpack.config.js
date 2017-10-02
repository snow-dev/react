

const  path = require('path');

const config = {

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, '../')
            },
        ],
    },
};

module.exports = config;
