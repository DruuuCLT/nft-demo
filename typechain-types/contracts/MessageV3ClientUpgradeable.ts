/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface MessageV3ClientUpgradeableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BRIDGE"
      | "CHAINS"
      | "FEE_TOKEN"
      | "__MessageV3Client_init"
      | "configureBridge"
      | "messageProcess"
      | "owner"
      | "renounceOwnership"
      | "setExsig"
      | "setMaxfee"
      | "setMaxgas"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(functionFragment: "BRIDGE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CHAINS",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "FEE_TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "__MessageV3Client_init",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "configureBridge",
    values: [
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      AddressLike[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "messageProcess",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setExsig",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxfee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxgas",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "BRIDGE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CHAINS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "FEE_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "__MessageV3Client_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageProcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setExsig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMaxfee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMaxgas", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MessageV3ClientUpgradeable extends BaseContract {
  connect(runner?: ContractRunner | null): MessageV3ClientUpgradeable;
  waitForDeployment(): Promise<this>;

  interface: MessageV3ClientUpgradeableInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  BRIDGE: TypedContractMethod<[], [string], "view">;

  CHAINS: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, string, bigint] & {
        fee: bigint;
        price: bigint;
        endpoint: string;
        confirmations: bigint;
      }
    ],
    "view"
  >;

  FEE_TOKEN: TypedContractMethod<[], [string], "view">;

  __MessageV3Client_init: TypedContractMethod<[], [void], "nonpayable">;

  configureBridge: TypedContractMethod<
    [
      _bridge: AddressLike,
      _chains: BigNumberish[],
      _prices: BigNumberish[],
      _endpoints: AddressLike[],
      _confirmations: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  messageProcess: TypedContractMethod<
    [
      arg0: BigNumberish,
      _sourceChainId: BigNumberish,
      _sender: AddressLike,
      arg3: AddressLike,
      arg4: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setExsig: TypedContractMethod<[_signer: AddressLike], [void], "nonpayable">;

  setMaxfee: TypedContractMethod<[_maxFee: BigNumberish], [void], "nonpayable">;

  setMaxgas: TypedContractMethod<[_maxGas: BigNumberish], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BRIDGE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "CHAINS"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, string, bigint] & {
        fee: bigint;
        price: bigint;
        endpoint: string;
        confirmations: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "FEE_TOKEN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "__MessageV3Client_init"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "configureBridge"
  ): TypedContractMethod<
    [
      _bridge: AddressLike,
      _chains: BigNumberish[],
      _prices: BigNumberish[],
      _endpoints: AddressLike[],
      _confirmations: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "messageProcess"
  ): TypedContractMethod<
    [
      arg0: BigNumberish,
      _sourceChainId: BigNumberish,
      _sender: AddressLike,
      arg3: AddressLike,
      arg4: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setExsig"
  ): TypedContractMethod<[_signer: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMaxfee"
  ): TypedContractMethod<[_maxFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMaxgas"
  ): TypedContractMethod<[_maxGas: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
