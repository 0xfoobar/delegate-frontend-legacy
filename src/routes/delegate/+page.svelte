<script lang="ts">
import Card from '../../components/delegationRegistry/Card.svelte';
import Delegate from '../../components/delegationRegistry/Delegate.svelte';
import King from '../../assets/illustrations/king.svg';

let selectedDelegateTab: DelegateKind = 'wallet';
const delegateNavOptions = [
	{
		key: 'wallet',
		value: 'Wallet',
		tooltip: 'Allow the delegate to act on your behalf for all assets in your wallet'
	},
	{
		key: 'contract',
		value: 'Contract',
		tooltip: 'Allow the delegate to act on your behalf for a specific contract'
	},
	{
		key: 'token',
		value: 'NFT',
		tooltip: 'Allow the delegate to act on your behalf for a specific NFT/token'
	}
];
</script>

<section>
	<Card
		shadow="left"
		header="DELEGATE"
		navOptions={delegateNavOptions}
		bind:selectedTab={selectedDelegateTab}
	>
		<King width="100%" slot="illustration" />
		<Delegate slot="content" delegateKind={selectedDelegateTab} />
	</Card>
</section>

<style>
section {
	margin: auto;
	flex: 1;
	width: 100%;
}
</style>
