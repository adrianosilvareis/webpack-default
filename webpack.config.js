const path = require('path')
const webpack = require('webpack');

/**
 * plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin'); //adiciona o arquivo bundle dinamicamenta no index
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({template: 'src/index.html'});
// const UglifyPlugin = new webpack.optimize.UglifyJsPlugin(); 


module.exports = {
   entry: path.join(__dirname,'src', 'app', 'app'), //arquivo principal de entrada
   output: {
      filename: 'bundle.js' //nome do arquivo de saida
   },
   module: {
      loaders:[
         {  
            /**
             * transforma todo código ES6 ou ES7 em ES5 usando babel
             * é nescessario fazer a instalação das seguintes libs
             * babel-core, babel-loader, babel-preset-es2015
             */
            test: /\.js$/,
            exclude: /node_modules/, //conflito com UglifyJsPlugin
            loader: 'babel-loader',
            query: {
               presets: ['es2015']
            }
         },
         {  
            /**
             * insere o css na pagina dinâmicamente
             * nescessario instalar as seguintes libs
             * style-loader, css-loader
             */
            test: /\.css$/,
            loader: [
               {loader: 'style-loader' },
               {loader: 'css-loader'}
            ],
         },
         { 
            /**
             * carrega todos os formatos de arquivos abaixo, 
             * OBS fonts do bootstrap precisa ser carregada e so funciona com este plugin
             * necessario instalar a lib file-loader
             */
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file-loader'
         },
         {  
            /**
             * carrega os arquivos .html quando usado em require, ex.: templates
             */
            test:/\.html$/,
            loader: 'raw-loader'
         }
      ]
   },
   /**
    * carrega os plugins
    */
   plugins: [
      HtmlWebpackPluginConfig,
      // UglifyPlugin
   ]
}