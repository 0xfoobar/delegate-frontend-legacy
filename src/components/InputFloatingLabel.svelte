<script lang="ts">
/* Adapted from https://codepen.io/devesh8/pen/MWYEJEP */
export let label: string;
export let inputType = 'text';
export let placeholder = '';
export let value: string;
</script>

<div class="did-floating-label-content">
	{#if inputType === 'text'}
		<input
			id="floating-input-text"
			class="did-floating-input"
			bind:value
			type="text"
			{placeholder}
		/>
		<label for="floating-input-text" class="did-floating-label">
			{label}
		</label>
	{:else if inputType === 'number'}
		<input
			id="floating-input-number"
			class="did-floating-input"
			bind:value
			type="number"
			{placeholder}
		/>
		<label for="floating-input-text" class="did-floating-label">
			{label}
		</label>
	{/if}
</div>

<style>
.did-floating-label-content {
	position: relative;
	margin-bottom: 1.25rem;
}
.did-floating-label {
	color: var(--outline-color);
	font-size: 1rem;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 1rem;
	top: 0.85rem;
	padding: 0 0.3rem;
	background: var(--background-color);
	transition: 0.2s ease all;
	-moz-transition: 0.2s ease all;
	-webkit-transition: 0.2s ease all;
}
.did-floating-input {
	font-size: 1rem;
	display: block;
	width: 100%;
	height: 3rem;
	padding: 0 1.25rem;
	background: var(--background-color);
	color: var(--outline-color);
	caret-color: var(--outline-color);
	border: 1px solid var(--outline-color);
	box-sizing: border-box;
}
.did-floating-input:focus {
	outline: none;
}
.did-floating-input:focus ~ .did-floating-label {
	top: -0.5rem;
	font-size: 0.8rem;
}
.did-floating-input:not(:placeholder-shown) ~ .did-floating-label {
	top: -0.5rem;
	font-size: 0.8rem;
}
</style>
