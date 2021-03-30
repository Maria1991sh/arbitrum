/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from '@ethersproject/contracts'

import type { BeaconProxy } from '../BeaconProxy'

export class BeaconProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    beacon: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<BeaconProxy> {
    return super.deploy(beacon, data, overrides || {}) as Promise<BeaconProxy>
  }
  getDeployTransaction(
    beacon: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): TransactionRequest {
    return super.getDeployTransaction(beacon, data, overrides || {})
  }
  attach(address: string): BeaconProxy {
    return super.attach(address) as BeaconProxy
  }
  connect(signer: Signer): BeaconProxy__factory {
    return super.connect(signer) as BeaconProxy__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BeaconProxy {
    return new Contract(address, _abi, signerOrProvider) as BeaconProxy
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x60806040526040516108ba3803806108ba8339818101604052604081101561002657600080fd5b81516020830180516040519294929383019291908464010000000082111561004d57600080fd5b90830190602082018581111561006257600080fd5b825164010000000081118282018810171561007c57600080fd5b82525081516020918201929091019080838360005b838110156100a9578181015183820152602001610091565b50505050905090810190601f1680156100d65780820380516001836020036101000a031916815260200191505b5060408181527f656970313936372e70726f78792e626561636f6e0000000000000000000000008252519081900360140190206000805160206107fa83398151915260001990910114925061012a91505057fe5b61013d82826001600160e01b0361014416565b50506104f3565b610157826102a260201b6100311760201c565b6101925760405162461bcd60e51b815260040180806020018281038252602581526020018061083b6025913960400191505060405180910390fd5b61020a826001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101ce57600080fd5b505afa1580156101e2573d6000803e3d6000fd5b505050506040513d60208110156101f857600080fd5b50516102a2602090811b61003117901c565b6102455760405162461bcd60e51b81526004018080602001828103825260348152602001806108866034913960400191505060405180910390fd5b6000805160206107fa83398151915282815581511561029d5761029b6102726001600160e01b036102a816565b8360405180606001604052806021815260200161081a6021913961032460201b6100371760201c565b505b505050565b3b151590565b60006102bb6001600160e01b0361043c16565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102f357600080fd5b505afa158015610307573d6000803e3d6000fd5b505050506040513d602081101561031d57600080fd5b5051905090565b6060610338846001600160e01b036102a216565b6103735760405162461bcd60e51b81526004018080602001828103825260268152602001806108606026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106103b15780518252601f199092019160209182019101610392565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610411576040519150601f19603f3d011682016040523d82523d6000602084013e610416565b606091505b5090925090506104308282866001600160e01b0361044f16565b925050505b9392505050565b6000805160206107fa8339815191525490565b6060831561045e575081610435565b82511561046e5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156104b85781810151838201526020016104a0565b50505050905090810190601f1680156104e55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6102f8806105026000396000f3fe60806040523661001357610011610017565b005b6100115b61001f61002f565b61002f61002a61013c565b6101af565b565b3b151590565b606061004284610031565b61007d5760405162461bcd60e51b815260040180806020018281038252602681526020018061029d6026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106100bb5780518252601f19909201916020918201910161009c565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101308282866101d3565b925050505b9392505050565b6000610146610277565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017e57600080fd5b505afa158015610192573d6000803e3d6000fd5b505050506040513d60208110156101a857600080fd5b5051905090565b3660008037600080366000845af43d6000803e8080156101ce573d6000f35b3d6000fd5b606083156101e2575081610135565b8251156101f25782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561023c578181015183820152602001610224565b50505050905090810190601f1680156102695780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50549056fe416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374a264697066735822122053dcbd8c0863f6517a5117ac7b858fc300ba6a67685a286f909e85f8150b82c764736f6c634300060b0033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50426561636f6e50726f78793a2066756e6374696f6e2063616c6c206661696c6564426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374426561636f6e50726f78793a20626561636f6e20696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374'
