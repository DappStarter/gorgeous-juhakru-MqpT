require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remember exchange half area symptom two'; 
let testAccounts = [
"0x150d3c306d364aed2c23ddc9ffef6056854de51bda8c68e798d475a742ac582e",
"0x5d1b5f6642ed0ce728467e77f00e8d3d1cc255d7a86723e747cb0ebd317a93a0",
"0xdc26e23ad4131abdb613e5997fc86570f62a2daa5422835f5feff830ccf69095",
"0xba84116e36e1b77c54c8cc7fdc6f72ef767eb67af9e6723731ac95355c93940d",
"0x34d66d5e52b7af1e23dc05fb0bd08e3afa5d91d93668b0d3695e9862ce69149e",
"0xdb4075029f4aff16ca96030372e7dc584a3365ff8a95bc1c8f73ce2619207339",
"0x1ac5fe0cdabd1126d96193bbde701002640717aa266e610fcb36c0fabe68076a",
"0x98ccd68784b37d84aa40a278b35ea4366e2c7d658325fed2d3f00df05ce9a1c4",
"0x1933e102c81ee5d824e64179d1aa69aa31023b5d7b9b94ae637e9682a1372049",
"0x169c24489b1c7fa6e2fbdb66b0740152c7f4a1cda242c63c1e6e93d298d35eba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

