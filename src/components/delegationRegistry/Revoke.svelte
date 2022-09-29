<script lang="ts">
import { contracts, connected, signerAddress, chainId } from 'svelte-ethers-store';

import { connectedToSupportedChain, currentTheme } from '../../store';
import HammerLoader from '../HammerLoader.svelte';
import InputFloatingLabel from '../InputFloatingLabel.svelte';
import RevokeItemPaginator from './RevokeItemPaginator.svelte';
import PuzzledMan from '../../assets/illustrations/puzzled.svg';

let delegateWalletPromise: Promise<string[]> | undefined;
let delegateTokenPromise: Promise<DelegateResponse[]> | undefined;
let delegateContractPromise: Promise<DelegateResponse[]> | undefined;

export let revokeKind: RevokeKind;

let revokeVault: string;

$: contractKey = 'delegationRegistry' + $chainId;

$: if (!$connected || !connectedToSupportedChain) {
	delegateWalletPromise = undefined;
	delegateContractPromise = undefined;
	delegateTokenPromise = undefined;
}

$: if ($connectedToSupportedChain && $contracts[contractKey]) {
	// fetch initial data
	if (revokeKind === 'wallet') {
		delegateWalletPromise = $contracts[contractKey].getDelegatesForAll($signerAddress);
	} else if (revokeKind === 'contract') {
		delegateContractPromise = $contracts[contractKey].getContractLevelDelegations($signerAddress);
	} else if (revokeKind === 'token') {
		delegateTokenPromise = $contracts[contractKey].getTokenLevelDelegations($signerAddress);
	}

	// fire up event listeners for ui update
	$contracts[contractKey].on('DelegateForAll', (vault: string) => {
		if (vault === $signerAddress) {
			delegateWalletPromise = $contracts[contractKey].getDelegatesForAll($signerAddress);
		}
	});
	$contracts[contractKey].on('DelegateForContract', (vault: string) => {
		if (vault === $signerAddress) {
			delegateContractPromise = $contracts[contractKey].getContractLevelDelegations($signerAddress);
		}
	});
	$contracts[contractKey].on('DelegateForToken', (vault: string) => {
		if (vault === $signerAddress) {
			delegateTokenPromise = $contracts[contractKey].getTokenLevelDelegations($signerAddress);
		}
	});
}
</script>

<div class="container">
	{#if revokeKind === 'wallet'}
		{#await delegateWalletPromise}
			<div class="loader"><HammerLoader /></div>
		{:then delegates}
			{#if delegates && 'length' in delegates}
				{#if delegates.length === 0}
					<div class="empty-items">
						<div class:dark={$currentTheme === 'dark'}><PuzzledMan /></div>
						No wallet delegates
					</div>
				{:else}
					<RevokeItemPaginator {delegates} columns={['Delegate', '']} />
				{/if}
			{/if}
		{:catch err}
			Error fetching delegates {err.code}
		{/await}
	{:else if revokeKind === 'contract'}
		{#await delegateContractPromise}
			<div class="loader"><HammerLoader /></div>
		{:then delegates}
			{#if delegates && 'length' in delegates}
				{#if delegates.length === 0}
					<div class="empty-items">
						<div class:dark={$currentTheme === 'dark'}><PuzzledMan /></div>
						No contract delegates
					</div>
				{:else}
					<RevokeItemPaginator {delegates} columns={['Delegate', 'Contract', '']} />
				{/if}
			{/if}
		{:catch err}
			Error fetching delegates {err.code}
		{/await}
	{:else if revokeKind === 'token'}
		{#await delegateTokenPromise}
			<div class="loader"><HammerLoader /></div>
		{:then delegates}
			{#if delegates && 'length' in delegates}
				{#if delegates.length === 0}
					<div class="empty-items">
						<div class:dark={$currentTheme === 'dark'}><PuzzledMan /></div>
						No token delegates
					</div>
				{:else}
					<RevokeItemPaginator {delegates} columns={['Delegate', 'Contract', 'Token ID', '']} />
				{/if}
			{/if}
		{:catch err}
			Error fetching delegates {err.code}
		{/await}
	{:else if revokeKind === 'other'}
		<div class="other-tab">
			<div class="revoke-self">
				<InputFloatingLabel
					bind:value={revokeVault}
					label="Vault address"
					inputType="text"
					placeholder="nook.eth"
				/>
				<button
					disabled={!$connectedToSupportedChain}
					on:click={$contracts[contractKey].revokeSelf(revokeVault)}>Revoke self</button
				>
			</div>

			<button
				disabled={!$connectedToSupportedChain}
				on:click={$contracts[contractKey].revokeAllDelegates()}>Revoke all delegates</button
			>
		</div>
	{/if}
</div>

<style>
.other-tab {
	width: 80%;
	display: flex;
	height: 100%;
	margin: 1rem auto;
	flex-direction: column;
	justify-content: space-between;
}

.revoke-self {
	height: 17rem;
}

button {
	width: 100%;
	background: var(--outline-color);
	color: var(--background-color);
	border: 2px solid grey;
	padding: 0.2rem 1rem 0.2rem 1rem;
	height: 3rem;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	margin: auto;
	font-weight: bold;
}

button:disabled {
	cursor: not-allowed !important;
}

button:hover {
	box-shadow: var(--outline-color) -1px 1px, var(--outline-color) -2px 2px,
		var(--outline-color) -3px 3px, var(--outline-color) -4px 4px, var(--outline-color) -5px 5px,
		var(--outline-color) -6px 6px;
	transform: translate3d(6px, -6px, 0);
	transition-delay: 0s;
	transition-duration: 0.4s;
	transition-property: all;
	transition-timing-function: line;
}

.loader {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 3rem auto;
}

.empty-items {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
}

.dark {
	filter: invert(1) contrast(50%) brightness(90%);
}
</style>
