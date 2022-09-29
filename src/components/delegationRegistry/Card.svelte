<script lang="ts">
import NavBar from './NavBar.svelte';
import { currentTheme } from '../../store';
import ArrowLeft from '../../assets/icons/arrow-left.svg';

export let header: string;
export let selectedTab: RevokeKind;
export let shadow = 'left';

export let navOptions: NavOption[];
</script>

<section class:shadow-left={shadow === 'left'} class:shadow-right={shadow === 'right'} class="card">
	<a href="/" class="back-button">
		<ArrowLeft width="100%" />
	</a>
	<h1 class="header">{header}</h1>

	<div class="graphic" class:dark={$currentTheme === 'dark'}>
		<slot name="illustration" />
	</div>

	<NavBar options={navOptions} bind:selected={selectedTab} />

	<slot name="content" />
</section>

<style>
h1 {
	user-select: none;
	text-align: center;
}

.card {
	margin: 2rem auto 2rem auto;
	border: 2px solid;
	width: 40rem;
	min-height: 45rem;
}

.back-button {
	color: inherit;
	display: block;
	position: relative;
	width: 3rem;
	top: 1rem;
	left: 1rem;
}

.shadow-left {
	box-shadow: -1px 0px 0px var(--outline-color), -2px 2px 0px var(--outline-color),
		-3px 3px 0px var(--outline-color), -4px 4px 0px var(--outline-color),
		-5px 5px 0px var(--outline-color), -6px 6px 0px var(--outline-color),
		-7px 7px 0px var(--outline-color), -8px 8px 0px var(--outline-color),
		-9px 9px 0px var(--outline-color), -10px 10px 0px var(--outline-color),
		-11px 11px 0px var(--outline-color), -12px 12px 0px 0px var(--outline-color);
}

.shadow-right {
	box-shadow: 1px 1px 0px var(--outline-color), 2px 2px 0px var(--outline-color),
		3px 3px 0px var(--outline-color), 4px 4px 0px var(--outline-color),
		5px 5px 0px var(--outline-color), 6px 6px 0px var(--outline-color),
		7px 7px 0px var(--outline-color), 8px 8px 0px var(--outline-color),
		9px 9px 0px var(--outline-color), 10px 10px 0px var(--outline-color),
		11px 11px 0px var(--outline-color), 12px 12px 0px 0px var(--outline-color);
}

.header {
	font-weight: 700;
	font-size: 4rem;
	text-decoration: underline 5px;
	width: 90%;
	margin: 1rem auto auto auto;
	justify-self: flex-end;
}

.graphic {
	display: flex;
	height: 10rem;
	border: 1px solid --var(--outline-color);
	width: 90%;
	margin: 1rem auto;
}

.dark {
	filter: invert(1) contrast(65%) brightness(120%);
}

@media (max-width: 680px) {
	.card {
		width: 97%;
	}
}
</style>
