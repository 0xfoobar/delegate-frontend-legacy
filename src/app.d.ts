// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

interface NavOption {
	key: string;
	value: string;
	tooltip: string;
}

interface DelegateResponse {
	delegate: string;
	contract_?: string;
	tokenId?: number;
}

type DelegateKind = 'wallet' | 'contract' | 'token';

type RevokeKind = DelegateKind | 'other';

interface TableCell {
	value: string | number;
	onClick?: function;
	isButton?: boolean; // for inverting color
}
