<script lang="ts">
import { defaultEvmStores, connected, signerAddress, chainData } from 'svelte-ethers-store';
import { onMount, onDestroy } from 'svelte';

import { clickOutside, toShortAddress, handleConnect } from '../utils';
import { providerType } from '../store';

import Copy from '../assets/icons/copy.svg';
import Check from '../assets/icons/check.svg';
import Link from '../assets/icons/link.svg';

export let hide = false;

let delayPassed = false;
let hideTimeOutId: number;

$: changing = false;
$: copying = false;

async function handleCopy() {
	navigator.clipboard.writeText($signerAddress);
	copying = true;
	await new Promise((r) => setTimeout(r, 1000));
	copying = false;
}

function handleOutsideClick() {
	if (delayPassed) {
		changing = false;
		hide = true;
	}
}

async function handleDisconnect() {
	defaultEvmStores.disconnect();
	$providerType = null;
	localStorage.removeItem('providertype');
	localStorage.removeItem('walletconnect');
	hide = true;
}

onMount(async () => {
	hideTimeOutId = await new Promise((r) => setTimeout(r, 1000));
	delayPassed = true;
});

onDestroy(() => {
	clearTimeout(hideTimeOutId);
});
</script>

<section class:hide class="modal">
	<div use:clickOutside={handleOutsideClick} class="modal-content">
		{#if $connected && !changing}
			<div class="modal-header">
				<b>Account</b>
				<div>
					<div on:click={() => (changing = true)} class="text-button">Change</div>
					<div on:click={handleDisconnect} class="text-button">Disconnect</div>
				</div>
			</div>
			<div class="round-border modal-body">
				<p>{toShortAddress($signerAddress, 8)}</p>
				<br />
				<div class="mini-buttons">
					{#if !copying}
						<div on:click={handleCopy} class="mini-button">
							<Copy width="0.8rem" />
							Copy address
						</div>
					{:else}
						<div on:click={handleCopy} class="mini-button">
							<Check width="0.8rem" />&nbsp;Address copied
						</div>
					{/if}
					<div
						on:click={() =>
							window.open($chainData.explorers[0].url + '/address/' + $signerAddress, '_blank')}
						class="mini-button"
					>
						<Link width="0.8rem" />&nbsp;View in block explorer
					</div>
				</div>
			</div>
		{:else}
			<div class="modal-header">
				<b>Connect</b>
			</div>
			<div class="modal-body">
				<div
					on:click={() =>
						handleConnect('metamask').then(() => {
							changing = false;
						})}
					class="round-border provider-option"
				>
					<div>
						<span class:hide={$providerType !== 'metamask'}>&#8226;</span>
						Metamask
					</div>
					<img class="wallet-logo" alt="Metamask logo" src="/metamask.png" />
				</div>
				<div
					on:click={() =>
						handleConnect('walletconnect').then(() => {
							changing = false;
						})}
					class="round-border provider-option"
				>
					<div>
						<span class:hide={$providerType !== 'walletconnect'} class="green">&#8226;</span>
						WalletConnect
					</div>
					<img class="wallet-logo" alt="WalletConnect logo" src="/walletconnect.svg" />
				</div>
			</div>
		{/if}
		<button class="mini-pill-button" on:click={() => (hide = true)}>Close</button>
	</div>
</section>

<style>
.modal {
	position: fixed;
	z-index: 3;
	left: 0;
	top: 0;
	overflow: auto;
	width: 100%;
	height: 100%;
	background-color: rgba(60, 60, 60, 0.8);
	padding-top: 50px;
}

.modal-content {
	z-index: 4;
	border: 2px solid var(--outline-color);
	border-radius: 7px;
	max-width: 22rem;
	margin: auto;
	background-color: var(--background-color);
	opacity: 1;
	padding: 2rem;
	text-align: center;
}

.modal-body {
	display: flex;
	flex-direction: column;
	text-align: left;
	padding: 1rem;
	color: var(--outline-color);
}

p {
	display: inline-block;
	margin: 0.5rem 0 0.5rem 0;
	cursor: pointer;
	color: var(--outline-color);
}

.mini-pill-button {
	border: 1px solid var(--outline-color);
	border-radius: 8px;
	cursor: pointer;
	height: 2rem;
	width: 10rem;
	margin: 1rem;
	font-weight: 700;
	margin: 1rem auto auto auto !important;
}

.mini-pill-button:hover {
	border: 1px solid var(--outline-color);
	font-weight: 800;
}

.modal-header {
	display: flex;
	justify-content: space-between;
	color: var(--outline-color);
	text-align: left;
	margin: 0.5rem 0 1rem 0;
}

.mini-buttons {
	display: flex;
	column-gap: 0.7rem;
}

.mini-button {
	font-size: 0.7rem;
	cursor: pointer;
	color: grey;
}

.mini-button:hover {
	font-size: 0.7rem;
	cursor: pointer;
	color: var(--outline-color);
}

.text-button {
	cursor: pointer;
	font-size: 0.8rem;
	display: inline-block;
	margin: 0 1rem 0 0.2rem;
	width: 3.2rem;
}

.text-button:hover {
	font-weight: 700;
}

.hide {
	display: none;
}

.round-border {
	border: 1px solid grey;
	border-radius: 7px;
}

.provider-option {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	padding: 0.5rem;
	margin: 0.2rem;
}

.provider-option:hover {
	border: 1px solid var(--outline-color);
	font-weight: 600;
}

.provider-option > div {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.wallet-logo {
	width: 1.5rem;
	height: 1.5rem;
}
</style>
