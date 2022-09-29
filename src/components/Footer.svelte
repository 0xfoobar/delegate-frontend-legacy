<script lang="ts">
import { chainData } from 'svelte-ethers-store';
import { contractAddresses } from '../constants';
import ThemeToggle from './ThemeToggle.svelte';

import Github from '../assets/icons/github.svg';
import Etherscan from '../assets/icons/etherscan.svg';

// send to etherscan if on invalid chain, else to corresponding explorer
$: etherscanLink =
	'explorers' in $chainData &&
	$chainData?.explorers[0].url &&
	$chainData.chainId in contractAddresses
		? $chainData.explorers[0].url +
		  '/address/' +
		  contractAddresses[$chainData.chainId].delegationRegistry
		: 'https://etherscan.io/address/' + contractAddresses[1].delegationRegistry;
</script>

<footer class="container">
	<div class="toggle">
		<ThemeToggle />
	</div>

	<div class="right">
		<div class="logo" on:click={() => window.open(etherscanLink, '_blank')}>
			<Etherscan fill="currentColor" width="2rem" />
		</div>
		<div
			class="logo"
			on:click={() => window.open('https://github.com/0xfoobar/delegate-cash-frontend', '_blank')}
		>
			<Github fill="currentColor" width="2rem" />
		</div>
	</div>
</footer>

<style>
footer {
	width: 100%;
	border-top: 1px solid grey;
	color: grey;
}

.container {
	display: flex;
	justify-content: space-between;
	align-content: center;
}

.logo {
	color: var(--outline-color);
	cursor: pointer;
}

.toggle {
	margin: 0.5rem 0 0 2rem;
	cursor: pointer;
}

.right {
	display: flex;
	gap: 1rem;
	margin: 1.5rem 2rem;
}
</style>
