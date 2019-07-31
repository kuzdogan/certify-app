module.exports = function (app) {
        var Web3 = app.Web3;

        app.configureWeb3 = configureWeb3;

        function configureWeb3(config, cb) {
                return new Promise((resolve, reject) => {
                        var web3;
                        if (typeof web3 !== 'undefined') web3 = new Web3(web3.currentProvider);
                        else web3 = new Web3(new Web3.providers.HttpProvider(config.Ethereum[config.environment].rpc));

                        if (typeof web3 !== 'undefined') {
                                return resolve(web3);
                        }

                        reject({code: 500, title: "Error", message: "check RPC"});
                });
        }
}

