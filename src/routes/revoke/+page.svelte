<script lang="ts">
import Card from '../../components/delegationRegistry/Card.svelte';
import Revoke from '../../components/delegationRegistry/Revoke.svelte';
import Decapitation from '../../assets/illustrations/decapitation.svg';

let selectedRevokeTab: RevokeKind = 'wallet';

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
	}
];
</script>

<section>
	<Card
		shadow="left"
		header="REVOKE"
		navOptions={revokeNavOptions}
		bind:selectedTab={selectedRevokeTab}
	>
		<Decapitation slot="illustration" height="90%" width="100%" />
		<Revoke slot="content" revokeKind={selectedRevokeTab} />
	</Card>
</section>

<style>
section {
	margin: auto;
	flex: 1;
	width: 100%;
}
</style>
