interface ContractAddress {
	delegationRegistry: string;
}

// for prompting user to switch changes via header select
export const chainOptions: Record<string, string> = {
	1: 'Ethereum',
	137: 'Polygon',
	42220: 'Celo',
	5: 'Goerli',
	80001: 'Mumbai'
};

export const contractAddresses: Record<number | string, ContractAddress> = {
	// eth main chain
	1: {
		delegationRegistry: '0x00000000000076A84feF008CDAbe6409d2FE638B'
	},
	// polygon
	137: {
		delegationRegistry: '0x00000000000076A84feF008CDAbe6409d2FE638B'
	},
	// celo
	42220: {
		delegationRegistry: '0x00000000000076A84feF008CDAbe6409d2FE638B'
	},
	// goerli
	5: {
		delegationRegistry: '0x00000000000076A84feF008CDAbe6409d2FE638B'
	},
	// mumbai
	80001: {
		delegationRegistry: '0x00000000000076A84feF008CDAbe6409d2FE638B'
	},
	// local node
	1337: {
		delegationRegistry: '0x5fbdb2315678afecb367f032d93f642f64180aa3'
	}
};

export const nftExplorerURL: Record<number | string, string> = {
	1: 'https://www.nftscan.com',
	137: 'https://polygon.nftscan.com'
};
