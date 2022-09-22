<script lang="ts">
import { contracts, chainId } from 'svelte-ethers-store';

import { connectedToSupportedChain } from '../../store';
import InputFloatingLabel from '../InputFloatingLabel.svelte';

export let delegateKind: DelegateKind;

let newDelegateAddress: string;
let newDelegateContractAddress: string;
let newDelegateTokenId: string;

$: contractKey = 'delegationRegistry' + $chainId;

function addNewDelegate() {
	if (delegateKind === 'wallet') {
		$contracts[contractKey].delegateForAll(newDelegateAddress, true);
	} else if (delegateKind === 'contract') {
		$contracts[contractKey].delegateForContract(
			newDelegateAddress,
			newDelegateContractAddress,
			true
		);
	} else if (delegateKind === 'token') {
		$contracts[contractKey].delegateForToken(
			newDelegateAddress,
			newDelegateContractAddress,
			newDelegateTokenId,
			true
		);
	}
}
</script>

<div class="container">
	<div class="inputs">
		<InputFloatingLabel
			bind:value={newDelegateAddress}
			label="Delegate address"
			placeholder="nook.eth"
		/>

		{#if delegateKind === 'contract' || delegateKind === 'token'}
			<InputFloatingLabel
				bind:value={newDelegateContractAddress}
				label="Contract address"
				placeholder="0x50c57894C3..."
			/>
		{/if}

		{#if delegateKind === 'token'}
			<InputFloatingLabel
				bind:value={newDelegateTokenId}
				label="Token ID"
				inputType="number"
				placeholder="0"
			/>
		{/if}
	</div>

	<button disabled={!$connectedToSupportedChain} on:click={addNewDelegate}
		>Create new delegate</button
	>
</div>

<style>
.container {
	width: 30rem;
	margin: 1rem auto;
	display: flex;
	flex-direction: column;
}

.inputs {
	height: 17rem;
}

button {
	background: var(--outline-color);
	color: var(--background-color);
	border: 2px solid var(--background-color);
	padding: 0.2rem 1rem 0.2rem 1rem;
	width: 30rem;
	height: 3rem;
	font: inherit;
	font-weight: bold;
	cursor: pointer;
	outline: inherit;
	margin: auto;
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

button:disabled {
	cursor: not-allowed !important;
}

@media (max-width: 750px) {
	.container {
		width: 100%;
	}
	.inputs {
		margin: auto;
		width: 80%;
	}
	button {
		width: 80%;
	}
}
</style>
