<script lang="ts">
import { contracts, connected } from 'svelte-ethers-store';
</script>

{#if $connected && $contracts.delegationRegistry}
	<div class="container">test</div>
{:else}
	Please connect wallet
{/if}

<style>
.container {
	display: flex;
	flex-wrap: wrap;
}
</style>
