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
		value: 'Wallet'
	},
	{
		key: 'contract',
		value: 'Contract'
	},
	{
		key: 'token',
		value: 'NFT'
	}
];

const revokeNavOptions = [...delegateNavOptions, { key: 'other', value: 'Other' }];

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
