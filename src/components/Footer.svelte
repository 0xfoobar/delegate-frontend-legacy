<script lang="ts">
import ThemeToggle from './ThemeToggle.svelte';
import Github from '../assets/icons/github.svg';
</script>

<footer class="container">
	<div class="toggle">
		<ThemeToggle />
	</div>

	<div class="right">
		<div
			class="github"
			on:click={() => window.open('https://github.com/0xnook/token-delegation-interface', '_blank')}
		>
			<Github fill="currentColor" width="2rem" />
		</div>
	</div>
</footer>

<style>
footer {
	height: 1rem;
	width: 100%;
	border-top: 1px solid grey;
	color: grey;
}

.container {
	display: flex;
	justify-content: space-between;
	margin: auto;
	align-content: center;
	/* width:95%; */
}

.github {
	margin: 1.5rem 2rem;
	color: var(--outline-color);
	cursor: pointer;
}

.toggle {
	margin: 0.5rem 0 0 2rem;
	cursor: pointer;
}
</style>
