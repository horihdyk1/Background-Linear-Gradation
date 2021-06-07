// 'production' か 'development' を指定

const MODE = "development";

module.exports = {
	// モード値を production に設定すると最適化された状態で、
	// development に設定するとソースマップ有効でJSファイルが出力される
	mode: MODE,
	entry: {
		app: `./source/js/containers/pages/index.tsx`,
	},
	output: {
		path: `${__dirname}/dist`,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".js", ".tsx", ".ts", ".d.ts"],
		modules: [`${__dirname}/node_modules`],
	},
};
