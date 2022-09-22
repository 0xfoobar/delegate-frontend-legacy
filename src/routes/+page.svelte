<script lang="ts">
import { onMount } from 'svelte';
import { connected } from 'svelte-ethers-store';

import { handleConnect } from '../utils';
import { providerType, connectedToSupportedChain } from '../store';

import Main from '../components/delegationRegistry/Main.svelte';

// reattach contracts on chainId change
$: $connectedToSupportedChain;

onMount(async () => {
	if (!$connected) {
		if ($providerType === 'metamask') {
			handleConnect('metamask');
		} else if ($providerType === 'walletconnect') {
			handleConnect('walletconnect');
		}
	}
});
</script>

<Main />
