<script lang="ts">
import { connected } from 'svelte-ethers-store';
import { connectedToSupportedChain } from '../store';
</script>

<div class:hidden={!$connected || $connectedToSupportedChain}>Connected to unsupported chain!</div>

<style>
div {
	text-align: center;
	border-bottom: 4px dotted;
	padding: 1rem 0 1rem 0;
	background-color: #dcdcdc;
	color: black;
}

.hidden {
	display: none;
}
</style>
