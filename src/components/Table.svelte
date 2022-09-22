<!-- Adapted from https://codepen.io/pablorgarcia/pen/ARdVgx -->
<script lang="ts">
export let columns: string[];

export let rows: TableCell[][];
</script>

<table class="container">
	<thead>
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				{#each row as cell}
					<td class:button={cell.isButton} on:click={cell.onClick ?? undefined}>{cell.value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
th {
	line-height: 1em;
	font-weight: bold;
	font-size: 1rem;
	color: var(--background-color);
	background-color: var(--outline-color);
	border-top: 2px dotted var(--outline-color);
	border-bottom: 2px dotted var(--outline-color);
}

.container td {
	font-weight: normal;
	font-size: 1em;
	text-overflow: hidden;
}

.container {
	text-align: left;
	overflow: hidden;
	width: 100%;
	margin: 0 auto;
	display: table;
	padding: 0 0 2rem 0;
}

.container td,
.container th {
	padding-bottom: 2%;
	padding-top: 2%;
	padding-left: 2%;
	max-width: 4rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

tr {
	color: black;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
	background-color: #dcdcdc;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
	background-color: #bababa;
}

.container td:hover {
	background-color: #949494;
	cursor: pointer;
	box-shadow: var(--background-color) -1px 1px, var(--background-color) -2px 2px,
		var(--background-color) -3px 3px, var(--background-color) -4px 4px,
		var(--background-color) -5px 5px, var(--background-color) -6px 6px;
	transform: translate3d(6px, -6px, 0);
	transition-delay: 0s;
	transition-duration: 0.4s;
	transition-property: all;
	transition-timing-function: line;
}

.button {
	font-weight: bold !important;
	color: var(--background-color);
	background-color: var(--outline-color) !important;
	max-width: 3rem !important;
	padding-right: 0 !important;
}

.button:hover {
	color: var(--background-color);
	background-color: var(--outline-color) !important;
}
</style>
