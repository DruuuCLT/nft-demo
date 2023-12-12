// SPDX-License-Identifier: MIT
// (c)2021-2023 Atlas
// security-contact: atlas@cryptolink.tech
pragma solidity ^0.8.9;

import "./MessageV3ClientUpgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract SimpleNFT is ERC721EnumerableUpgradeable, MessageV3ClientUpgradeable {
    using Counters for Counters.Counter;
    Counters.Counter private COUNTER;

    string public BASE_URI  = "https://nfts.s3.de.io.cloud.ovh.net/";
    uint   public BUY_PRICE = 0.001 ether;
    IERC20 public BUY_TOKEN = IERC20(address(0));
    uint public BRIDGE_PRICE = 0; // Set any amount you want
    address public REFERRAL = 0xb11cadFdD2De8c84D626CC45Bfe02B8EffABB3eC; // Any address you want if you want to implement a referral system

    event Mint(address to, uint id);
    event Received(uint id);

    constructor(address _buyToken) {
        BUY_TOKEN = IERC20(_buyToken);
    }

    function init() public initializer onlyInitializing {
        __ERC721_init("Simple Cross Chain NFT", "sNFT");
        // @note Needed to set the owner for the modifiers like onlyOwner
        __MessageV3Client_init();
    }

    /** USER */
    function mint() external returns (uint _nftId) {
        SafeERC20.safeTransferFrom(BUY_TOKEN, msg.sender, address(this), BUY_PRICE);

        _nftId = _mint(msg.sender);
    }

    function _mint(address _to) private returns (uint _nftId) {
        uint _currId = COUNTER.current();
        require(_currId < 1000, "mint at max capacity");

        _nftId = (block.chainid * 10**7) + _currId;
        emit Mint(_to, _nftId);
        COUNTER.increment();

        _safeMint(_to, _nftId);
    }

    function bridge(address _to, uint _chainId, uint _nftId) public onlyActiveBridge(_chainId) returns (uint _txId) {
        require(_ownerOf(_nftId) == msg.sender, "you do not own this nft");

        // take fee for bridging
        SafeERC20.safeTransferFrom(BUY_TOKEN, msg.sender, address(this), BRIDGE_PRICE);

        // burn the nft from source chain
        _burn(_nftId);
        
        // data package to send across chain
        bytes memory _data = abi.encode(
            _to,
            _nftId
        );

        // send cross chain message, please have a look at _sendMessage() inside of MessageV3ClientUpgradeable in this repo
        // If you want you can set your own allowed destination addresses by using function configureBridge() defined inside of MessageV3ClientUpgradeable in this repo
        // This is similar to calling IMessageV3(BRIDGE).sendMessage()
        // Our message is being sent here, from the source chain
        return _sendMessage(
            _chainId,      // id of the destination chain
            REFERRAL,      // referrer (optional)
            _data          // arbitrary data package to send
        );
    }

    /** BRIDGE RECEIVER */
    function messageProcess(uint, uint _sourceChainId, address _sender, address, uint, bytes calldata _data) external override onlySelfBridge(_sender, _sourceChainId) {
        // Your message is being received here. Our infrastructure will call this method on the destination chain.
        // process data package from source chain
        (address _to, uint _nftId) = abi.decode(_data, (address, uint));

        emit Received(_nftId);
        // mint/send nft
        _safeMint(_to, _nftId);
    }

    /** VIEWS */
    function walletOfOwner(address _owner) external view returns (uint[] memory _nftIds) {
        uint _count = balanceOf(_owner);
        _nftIds = new uint[](_count);

        for (uint x = 0; x < _count; x++) {
            _nftIds[x] = tokenOfOwnerByIndex(_owner, x);
        }
    }

    function tokenURI(uint _nftId) public view override returns (string memory _uri) {
        return string(abi.encodePacked(BASE_URI, _nftId, ".json"));
    }
}