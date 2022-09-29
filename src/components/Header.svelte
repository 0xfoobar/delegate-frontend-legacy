<script lang="ts">
import { page } from '$app/stores';
import { signerAddress, chainData, chainId } from 'svelte-ethers-store';
import { accountModalHidden } from '../store';
import { toShortAddress, changeNetwork } from '../utils';
import { chainOptions } from '../constants';

import Select from './Select.svelte';
</script>

<header class="header">
	<h1><a href="/">{$page.routeId ? 'DELEGATE.CASH' : ''}</a></h1>
	<div class="right">
		{#if $chainId}
			<Select
				options={chainOptions}
				defaultValue={$chainId.toString()}
				handleClickFunc={changeNetwork}
				fallBackPlaceHolder={$chainData?.name ? $chainData.name : ''}
			/>
		{/if}
		<button
			on:click={() => {
				$accountModalHidden = false;
			}}>{$signerAddress ? toShortAddress($signerAddress, 4) : 'Connect'}</button
		>
	</div>
</header>

<style>
a {
	color: inherit;
}

h1 {
	margin-right: 0.5rem;
}

.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0rem 1rem 0 1rem;
	color: var(--outline-color);
}

button {
	width: 9.2rem;
	align-self: center;
	border: 2px dotted var(--outline-color);
	padding: 0.5rem;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	color: var(--outline-color);
	background-color: var(--background-color);
}

button:hover {
	font-weight: bold;
	filter: brightness(150%);
}

.right {
	margin-top: 1rem;
	display: inline-flex;
	justify-content: flex-end;
	gap: 0.5rem;
	flex-wrap: wrap-reverse;
	align-items: baseline;
}

@media (max-width: 581px) {
	.right {
		margin-top: 1rem;
		gap: 0;
	}

	h1 {
		font-size: 6vw;
	}
}
</style>
