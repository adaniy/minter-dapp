require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Le Baron NFT";
const description = "This is a transcending project featuring Baron Samedi, also written Baron Samdi, Bawon Samedi or Bawon Sanmdi. He is one of the loa of Haitian Vodou. He is a loa of the dead, along with Baron's numerous other incarnations Baron Cimetière, Baron La Croix and Baron Criminel. He is syncretized with Saint Martin de Porres. Do not miss the announcement of the start of distribution of gifts by subscribing to the pages of Le Baron project on Discord, Twitter and Instagram. We have many more surprises prepared, it will be amazing and very rewarding! Run to brilliance. Sprint to excellence. Soar to transcendence.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Head" },
      { name: "Eyes" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1080,
  height: 1350,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://lebaron.netlify.app", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Le Baron NFT';
const CONTRACT_SYMBOL = 'LBR';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xf43701a88E3FA55b7e5BF4D92DfaD91693982D6f';
const TREASURY_ADDRESS = '0xf43701a88E3FA55b7e5BF4D92DfaD91693982D6f';
const MAX_SUPPLY = 3781; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 8; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-05T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-04-03T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xf43701a88E3FA55b7e5BF4D92DfaD91693982D6f"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0xf43701a88E3FA55b7e5BF4D92DfaD91693982D6f","0x075C393934Ca81Dab106A02c6429d1DdE49d2A68","0xC3360E22C9C46Ae2488dA31Fd47fFac6715A4713","0x2293499925C0B8158D58dB21a419D111Fe488182","0x6bf70423580A16056233b7d34C947f25C669D69A","0x2462e026cd31d28eb11ad96E164b50C3E812Af40","0x3220437374d3892B8F5973F53B8220f456D517a2","0x11DE10E584FB8DB46Cff519eC2D0eFD1cdb10582","0x4Cb77fca8AE64C6A07A08E754ED6bade5E2DBb3A","0x537d8DFA6e44Ed9D6115E068235CA9489537A100","0xbAC2266BFDCD481001337F83b68eF60b2b04aBc2","0xf7a7ba104a3faa6fe25d6c108ba0ebf15b5bdb94","0x193b9F68889dd946C4012C9188AbFbf177b9D2ad","0x89016572739AA52145c1340738f925EDD53D2426","0xd77417cf1A159Bd7F40c02b98D5e51c0b20f7100","0xB24B84EfB5B77EB8C6D6A1Cd3a201cbE713FeC2b","0x932575d395AB955BB8500936702F18664934B64a","0xcd9978ba079ef9e870640dd107bdb4d79b7ea856","0xeafA33e161B4eD608b501f818Eaf8F1D6a951aC2","0x123408C9006232E6dbdA3D0e0B9344F62BF680f8","0xBFA0abAd40ad037d8c6Be288Dca59EC1C87743C6","0xdf44bd579d551d74a764da3ef6279b144aba4ffc","0xFb99bE689E21D5B31aEf6AE3BaA51c3E04a328cB","0x51193b51Ac6416491F2415F432340aAC7EaDCD54","0x631081d4d9d691aE79C2dd300e95c3493933A565","0xD28A4d60FaD919cA2Fa6357976B036602dcF3f9D","0x13e217afE6879d5F748e74F96Fa5db8Be2d632F7","0x95f25c0dB7454400DC90eFF4791583f7fA46FAaA","0x25A304E4d1eAeE5C2eD3381F9D7ccD102b5DD24C","0x298b7E7D6CA067AB79f76b0e1122B527fA0d9a8C","0xB84c6807f201c613360B23c695500001791b3C36","0x87c0902b5206c49D097Fb5cb5585d47ef3DDa52c","0x87AC2eb52b8929DC7f05D4d3586cCE67453F0522","0x0C732227C0b95E85cE784Bc2A305bdfCE642aDbB","0x9871D929C13e4CcAA227F4241F1Fe96c8a1D6740","0xC3360E22C9C46Ae2488dA31Fd47fFac6715A4713"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Run to brilliance. Sprint to excellence. Soar to transcendence. Le Baron"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeib4a3ofarnyce5inp7jxfadpfbs2qccvpx5beexb4e426rmwsvsbe"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://lebaron.netlify.app",
  creators: [
    {
      address: "0xf43701a88E3FA55b7e5BF4D92DfaD91693982D6f",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
