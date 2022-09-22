<script lang="ts">
import { accountModalHidden } from '../store';
import Header from '../components/Header.svelte';
import AccountModal from '../components/AccountModal.svelte';
import ChainWarning from '../components/ChainWarning.svelte';
import Footer from '../components/Footer.svelte';
</script>

<ChainWarning />
{#key $accountModalHidden}
	<AccountModal bind:hide={$accountModalHidden} />
{/key}

<div class="wrapper">
	<Header />
	<!-- Page contents -->
	<slot />
	<Footer />
</div>

<style>
.wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
	width: 100vw;
}
</style>
