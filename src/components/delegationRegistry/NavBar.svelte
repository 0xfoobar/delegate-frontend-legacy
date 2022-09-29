<script lang="ts">
export let options: NavOption[];
export let selected = options[0].key;
</script>

<nav>
	<ul>
		{#each options as option}
			<li
				data-tooltip={option.tooltip}
				class:selected={selected === option.key}
				on:click={() => (selected = option.key)}
			>
				{option.value}
			</li>
		{/each}
	</ul>
</nav>

<style>
nav {
	margin-right: 5rem;
}
ul {
	display: flex;
	margin-left: 1rem;
}

li:not(:first-child) {
	margin-left: 1.5rem;
}
li {
	font-size: 1.2rem;
	list-style-type: none;
	color: grey;
	cursor: pointer;
}

li:hover {
	color: var(--outline-color);
}

.selected {
	font-weight: 700;
	color: var(--outline-color);
	list-style-type: '⋄';
	text-decoration: underline;
}
</style>
