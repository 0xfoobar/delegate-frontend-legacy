<script lang="ts">
import Card from './Card.svelte';
import Delegate from './Delegate.svelte';
import Revoke from './Revoke.svelte';
import King from '../../assets/illustrations/king.svg';
import Decapitation from '../../assets/illustrations/decapitation.svg';

let selectedDelegateTab: DelegateKind = 'wallet';
let selectedRevokeTab: RevokeKind = 'wallet';

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

const revokeNavOptions = [
	{
		key: 'wallet',
		value: 'Wallet',
		tooltip: 'Revoke previously set wallet delegates'
	},
	{
		key: 'contract',
		value: 'Contract',
		tooltip: 'Revoke previously set contract delegates'
	},
	{
		key: 'token',
		value: 'NFT',
		tooltip: 'Revoke previously set NFT/token delegates'
	}, 
	{
		key: 'other',
		value: 'Other',
		tooltip: 'Revoke all delegates or revoke yourself from a vault'
	}, 
];

$: outerWidth = 0;
</script>

<svelte:window bind:outerWidth />

<main class="container">
	<Card
		shadow="left"
		header="DELEGATE"
		navOptions={delegateNavOptions}
		bind:selectedTab={selectedDelegateTab}
	>
		<King width="100%" slot="illustration" />
		<Delegate slot="content" delegateKind={selectedDelegateTab} />
	</Card>

	<Card
		shadow={outerWidth > 1495 ? 'right' : 'left'}
		header="REVOKE"
		bind:selectedTab={selectedRevokeTab}
		navOptions={revokeNavOptions}
	>
		<Decapitation slot="illustration" height="90%" width="100%" />
		<Revoke slot="content" revokeKind={selectedRevokeTab} />
	</Card>
</main>

<style>
.container {
	display: flex;
	flex-wrap: wrap;
	margin: auto auto 3rem;
	gap: 3rem;
	justify-content: center;
	height: 100%;
}

@media (max-width: 750px) {
	.container {
		width: 98%;
	}
}
</style>
