/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MessageTest,
  MessageTestInterface,
} from "../../../contracts/MessageTest.sol/MessageTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "txId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ENDPOINTS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MESSAGEv3",
    outputs: [
      {
        internalType: "contract IMessageV3",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "RECEIVED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridge",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_chains",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sourceChainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "messageProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_confirmations",
        type: "uint16",
      },
    ],
    name: "sendMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "_txId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_confirmations",
        type: "uint16",
      },
    ],
    name: "sendRevert",
    outputs: [
      {
        internalType: "uint256",
        name: "_txId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "setExsig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610d918061007e6000396000f3fe6080604052600436106100a05760003560e01c8063b80ae90a11610064578063b80ae90a1461016b578063c60853f61461018b578063c7209bf7146101ab578063d0bcf7e0146101d9578063f2fde38b1461020f578063f94a3c091461022f57600080fd5b80630d029802146100ac5780635f46e740146100e9578063715018a61461010b57806373fee3ee146101205780638da5cb5b1461014d57600080fd5b366100a757005b600080fd5b3480156100b857600080fd5b506001546100cc906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100f557600080fd5b5061010961010436600461081c565b61024f565b005b34801561011757600080fd5b506101096103d5565b34801561012c57600080fd5b5061014061013b3660046108cd565b6103e9565b6040516100e0919061092c565b34801561015957600080fd5b506000546001600160a01b03166100cc565b34801561017757600080fd5b50610109610186366004610992565b610483565b34801561019757600080fd5b506101096101a6366004610a13565b610554565b3480156101b757600080fd5b506101cb6101c6366004610a2e565b6105be565b6040519081526020016100e0565b3480156101e557600080fd5b506100cc6101f43660046108cd565b6003602052600090815260409020546001600160a01b031681565b34801561021b57600080fd5b5061010961022a366004610a13565b610617565b34801561023b57600080fd5b506101cb61024a366004610a2e565b610690565b6001546001600160a01b031633146102ae5760405162461bcd60e51b815260206004820152601e60248201527f4d657373616765546573743a2063616c6c6572206e6f7420627269646765000060448201526064015b60405180910390fd5b6000868152600360205260409020546001600160a01b038681169116146103175760405162461bcd60e51b815260206004820152601c60248201527f4d657373616765546573743a2063616c6c6572206e6f74206f7572730000000060448201526064016102a5565b60008061032683850185610a7b565b9150915081156103785760405162461bcd60e51b815260206004820152601a60248201527f4d657373616765546573743a20666f726365642072657665727400000000000060448201526064016102a5565b60008981526002602052604090206103908282610bcd565b507f759f3194cb37398bfc0eaf4421c44c7eaaa241e5b3d114d4d0cba8e7fbae241089826040516103c2929190610c8d565b60405180910390a1505050505050505050565b6103dd6106ca565b6103e76000610724565b565b6002602052600090815260409020805461040290610b44565b80601f016020809104026020016040519081016040528092919081815260200182805461042e90610b44565b801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b505050505081565b61048b6106ca565b6001600160a01b038516156104b657600180546001600160a01b0319166001600160a01b0387161790555b8260005b8181101561054b578383828181106104d4576104d4610ca6565b90506020020160208101906104e99190610a13565b600360008888858181106104ff576104ff610ca6565b90506020020135815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550808061054390610cbc565b9150506104ba565b50505050505050565b61055c6106ca565b60015460405163630429fb60e11b81526001600160a01b0383811660048301529091169063c60853f690602401600060405180830381600087803b1580156105a357600080fd5b505af11580156105b7573d6000803e3d6000fd5b5050505050565b6000806001604051806040016040528060068152602001651c995d995c9d60d21b8152506040516020016105f3929190610ce3565b604051602081830303815290604052905061060f848483610774565b949350505050565b61061f6106ca565b6001600160a01b0381166106845760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102a5565b61068d81610724565b50565b60008060006040518060400160405280600b81526020016a1a195b1b1bc81ddbdc9b1960aa1b8152506040516020016105f3929190610ce3565b6000546001600160a01b031633146103e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600154600084815260036020526040808220549051633f6b724360e21b815291926001600160a01b039081169263fdadc90c926107bd9216908890879089908890600401610cfe565b6020604051808303816000875af11580156107dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060f9190610d42565b80356001600160a01b038116811461081757600080fd5b919050565b600080600080600080600060c0888a03121561083757600080fd5b873596506020880135955061084e60408901610800565b945061085c60608901610800565b93506080880135925060a088013567ffffffffffffffff8082111561088057600080fd5b818a0191508a601f83011261089457600080fd5b8135818111156108a357600080fd5b8b60208285010111156108b557600080fd5b60208301945080935050505092959891949750929550565b6000602082840312156108df57600080fd5b5035919050565b6000815180845260005b8181101561090c576020818501810151868301820152016108f0565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061093f60208301846108e6565b9392505050565b60008083601f84011261095857600080fd5b50813567ffffffffffffffff81111561097057600080fd5b6020830191508360208260051b850101111561098b57600080fd5b9250929050565b6000806000806000606086880312156109aa57600080fd5b6109b386610800565b9450602086013567ffffffffffffffff808211156109d057600080fd5b6109dc89838a01610946565b909650945060408801359150808211156109f557600080fd5b50610a0288828901610946565b969995985093965092949392505050565b600060208284031215610a2557600080fd5b61093f82610800565b60008060408385031215610a4157600080fd5b82359150602083013561ffff81168114610a5a57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610a8e57600080fd5b82358015158114610a9e57600080fd5b9150602083013567ffffffffffffffff80821115610abb57600080fd5b818501915085601f830112610acf57600080fd5b813581811115610ae157610ae1610a65565b604051601f8201601f19908116603f01168101908382118183101715610b0957610b09610a65565b81604052828152886020848701011115610b2257600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600181811c90821680610b5857607f821691505b602082108103610b7857634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610bc857600081815260208120601f850160051c81016020861015610ba55750805b601f850160051c820191505b81811015610bc457828155600101610bb1565b5050505b505050565b815167ffffffffffffffff811115610be757610be7610a65565b610bfb81610bf58454610b44565b84610b7e565b602080601f831160018114610c305760008415610c185750858301515b600019600386901b1c1916600185901b178555610bc4565b600085815260208120601f198616915b82811015610c5f57888601518255948401946001909101908401610c40565b5085821015610c7d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b82815260406020820152600061060f60408301846108e6565b634e487b7160e01b600052603260045260246000fd5b600060018201610cdc57634e487b7160e01b600052601160045260246000fd5b5060010190565b821515815260406020820152600061060f60408301846108e6565b60018060a01b038616815284602082015260a060408201526000610d2560a08301866108e6565b61ffff949094166060830152509015156080909101529392505050565b600060208284031215610d5457600080fd5b505191905056fea26469706673582212200ed66252b8e50eb7effceb0fb0b29714b08ff94fd8fe8cded9ece4de32ed1ebc64736f6c63430008110033";

type MessageTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessageTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MessageTest__factory extends ContractFactory {
  constructor(...args: MessageTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MessageTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MessageTest__factory {
    return super.connect(runner) as MessageTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessageTestInterface {
    return new Interface(_abi) as MessageTestInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MessageTest {
    return new Contract(address, _abi, runner) as unknown as MessageTest;
  }
}