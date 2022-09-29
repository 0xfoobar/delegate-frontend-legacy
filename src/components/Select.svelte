<script lang="ts">
export let options: Record<string | number, string>;
export let defaultValue: string;
export let handleClickFunc: (key: string) => void;
// used when defaultValue is not in options
export let fallBackPlaceHolder = '';

let isClickExpanded = false;
</script>

<ul>
	<li class="box">
		<div class="title" on:click={() => (isClickExpanded = !isClickExpanded)}>
			{defaultValue in options ? options[defaultValue] : fallBackPlaceHolder} ⌄
		</div>
		<ul class:visible={isClickExpanded}>
			{#each Object.entries(options) as [key, value]}
				<li
					class="option"
					on:click={() => (isClickExpanded = false)}
					on:click={() => handleClickFunc(key)}
				>
					{value}
				</li>
			{/each}
		</ul>
	</li>
</ul>

<style>
/* resets */
ul {
	display: inline-block;
	list-style: none;
	padding: 0;
}
ul li {
	display: inline-block;
	position: relative;
}

li > ul {
	left: -9999px;
	position: absolute;
	visibility: hidden;
}

li:hover > ul,
li:focus-within > ul {
	left: 0;
	visibility: visible;
}

.visible {
	left: 0;
	visibility: visible;
}

.box {
	width: 8rem;
	border: 2px dotted var(--outline-color);
	color: var(--outline-color);
	background-color: var(--background-color);
	border-radius: var(--box-radius);
	margin: auto;
	cursor: pointer;
	padding: 0.5rem;
}

.title {
	box-sizing: border-box;
}

.option {
	box-sizing: border-box;
	background-color: var(--background-color);
	width: 100%;
	border: 2px dotted var(--outline-color);
	border-radius: var(--box-radius);
	padding: 0.5rem;
}

.title:hover,
.option:hover {
	font-weight: bold;
	filter: brightness(80%);
}
</style>
