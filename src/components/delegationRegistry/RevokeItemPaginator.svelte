<script lang="ts">
import { chainId, contracts, chainData } from 'svelte-ethers-store';
import { nftExplorerURL } from '../../constants';

import Table from '../Table.svelte';

export let columns: string[];
export let delegates: DelegateResponse[] | string[];

let page = 0;

$: itemCount = delegates?.length ? delegates.length : 0;
$: pageCount = itemCount > 0 ? Math.ceil(itemCount / 5) - 1 : 0;
$: firstPageItem = 5 * page;

$: isFirstPage = page === 0;
$: isLastPage = page === pageCount;

$: contractKey = 'delegationRegistry' + $chainId;

let rows: TableCell[][];
$: contractKey &&
	(rows = delegates.map((delegate) => {
		if (typeof delegate === 'object') {
			let cells: TableCell[] = [
				{
					value: delegate.delegate,
					onClick:
						'explorers' in $chainData
							? () =>
									window.open(
										$chainData?.explorers[0]?.url + '/address/' + delegate.delegate,
										'_blank'
									)
							: undefined
				}
			];
			if (delegate?.contract_ !== undefined) {
				cells.push({
					value: delegate.contract_,
					onClick:
						'explorers' in $chainData
							? () =>
									window.open(
										$chainData?.explorers[0]?.url + '/address/' + delegate.contract_,
										'_blank'
									)
							: undefined
				});
			}
			if (delegate?.tokenId !== undefined) {
				cells.push({
					value: delegate.tokenId,
					onClick:
						$chainId in nftExplorerURL
							? () =>
									window.open(
										'https://polygon.nftscan.com' +
											'/' +
											delegate.contract_ +
											'/' +
											delegate.tokenId,
										'_blank'
									)
							: undefined
				});
			}
			if (cells.length > 0) {
				cells.push({
					value: 'Revoke',
					onClick: () => $contracts[contractKey].revokeDelegate(delegate.delegate),
					isButton: true
				});
			}
			return cells;
		} else {
			return [
				{
					value: delegate,
					onClick: () =>
						window.open($chainData?.explorers[0]?.url + '/address/' + delegate, '_blank')
				},
				{
					value: 'Revoke',
					onClick: () => $contracts[contractKey].revokeDelegate(delegate),
					small: true,
					isButton: true
				}
			];
		}
	}));
</script>

<div class="container">
	<Table {columns} rows={rows.slice(firstPageItem, firstPageItem + 5)} />

	<div class="page-picker" class:hidden={pageCount === 0}>
		<div class="arrow" on:click={() => (!isFirstPage ? page-- : '')} class:hidden={isFirstPage}>
			←
		</div>
		<div class="not-selected" on:click={() => page--}>{!isFirstPage ? page : ''}</div>
		<div class="selected">{page + 1}</div>
		<div class="not-selected" on:click={() => page++}>{page !== pageCount ? page + 2 : ''}</div>
		<div class="arrow" on:click={() => (!isLastPage ? page++ : '')} class:hidden={isLastPage}>
			→
		</div>
	</div>
</div>

<style>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	margin: auto;
	width: 85%;
	height: 100%;
}

.page-picker {
	display: flex;
	font-size: 1rem;
	justify-content: center;
	align-items: baseline;
	margin-bottom: 1rem;
	height: 2rem;
}

.not-selected {
	opacity: 0.6;
}

.selected,
.not-selected {
	margin: 0 0.5rem 0 0.5rem;
	cursor: pointer;
}

.selected {
	text-align: center;
	width: 1.2rem;
	height: 1.2rem;
	border-bottom: 1px solid var(--outline-color);
	padding: 0.2rem;
	cursor: pointer;
}

.arrow {
	width: 1rem;
	cursor: pointer;
	margin: 0 1rem 0 1rem;
}

.hidden {
	visibility: hidden;
}

@media (max-width: 750px) {
	.container {
		width: 92%;
	}
}
</style>
