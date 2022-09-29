<script lang="ts">
import { currentTheme } from '../../store';

import King from '../../assets/illustrations/king.svg';
import Decapitation from '../../assets/illustrations/decapitation.svg';

$: outerWidth = 0;
</script>

<svelte:window bind:outerWidth />

<main class="container">
	<h1>DELEGATE.CASH</h1>
	<p>An immutable primitive to safely claim airdrops for vaulted NFTs, <a href="https://0xfoobar.substack.com/p/delegatecash">see details here</a></p>

	<section class="box-container">
		<a href="/delegate" class="box shadow-left">
			<figure class:dark={$currentTheme === 'dark'}>
				<King width="90%" height="80%" />
			</figure>
			<div class="box-title">DELEGATE</div>
		</a>

		<a
			href="/revoke"
			class="box shadow-right"
			class:shadow-left={outerWidth < 612}
			class:shadow-right={outerWidth >= 612}
		>
			<figure class:dark={$currentTheme === 'dark'}>
				<Decapitation width="80%" height="80%" />
			</figure>
			<div class="box-title">REVOKE</div>
		</a>
	</section>
</main>

<style>
a {
	color: var(--link-color);
}
.container {
	height: 100%;
	margin: auto;
	margin-bottom: 2rem;
	flex: 1;
}

p {
	font-weight: 600;
	margin-bottom: 3rem;
}

h1 {
	font-size: 3.5rem;
	margin-bottom: 0;
	text-decoration: underline;
}

h1,
p {
	text-align: center;
	user-select: none;
}

.box-container {
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	align-items: center;
	gap: 2rem;
}

.box {
	display: inline-flex;
	text-decoration: none;
	color: var(--outline-color);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 22rem;
	height: 22rem;
	border: 1px solid var(--outline-color);
	cursor: pointer;
}

figure {
	display: inline-flex;
	margin: auto;
	align-items: center;
	justify-content: center;
}

.box:hover {
	text-decoration: underline;
}

.box-title {
	font-size: 2.5rem;
	font-weight: 600;
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

.dark {
	filter: invert(1) contrast(65%) brightness(120%);
}

@media (max-width: 500px) {
	h1 {
		font-size: 10vw;
	}
	p {
		font-size: 4vw;
	}
}
</style>
