const path = require('path')//Ferramenta que cria caminho no explorer de acordo com as preferencias do sistema operacional (mac/windows/linux)

module.exports = {
    mode: 'development',//Arquivo não ficar minificado
    entry: './src/index.js',//JS principal
    output: {
        path: path.resolve(__dirname, 'public', 'js'),//Caminho de saída
        filename: 'bundle.js'//Nome do arquivo de saída
    },
    module: {
        rules:[{
            exclude: /node_modules/,//Excluir node_modules
            test: /\.js$/,//Teste se os arquivos são terminados em .js
            use: {
                loader: 'babel-loader',//Carregar babel-loader
                options: {
                    presets: ['@babel/env']//preset @babel/env
                }
            }
        },{
        test: /\.css$/,//Teste se o arquivo termina em .css
        use: ['style-loader', 'css-loader']//Preciso instalar esses loaders no terminal, para isso: npm install style-loader css-loader
    }]
    },
    devtool: 'source-map'//Fazer mapeamento do bundle
}