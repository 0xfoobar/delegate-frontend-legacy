<!-- Adapted from https://codepen.io/PaulinaSurazynska/details/bGVpBOb -->
<script lang="ts">
import { onMount } from 'svelte';
import { currentTheme } from '../store';
import Moon from '../assets/icons/moon-solid.svg';
import Sun from '../assets/icons/sun-solid.svg';

const prefersDarkThemes = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const cssVars = new Map();

function refreshCssVars() {
	const values = [];
	for (const [key, value] of cssVars) {
		values.push(`--${key}:${value}`);
	}
	document.documentElement.style.cssText = values.join(';');
}

function setCssVars(name: string, value: string) {
	cssVars.set(name, value);
	refreshCssVars();
}

/* let currentTheme; */
const applyTheme = () => {
	const preferredTheme = prefersDarkThemes() ? 'dark' : 'light';
	$currentTheme = localStorage.getItem('theme') ?? preferredTheme;
	if ($currentTheme === 'dark') {
		setCssVars('background-color', '#333');
		setCssVars('outline-color', '#fdfdfd');
		setCssVars('link-color', 'pink');
		document.body.classList.remove('light');
		document.body.classList.add('dark');
	} else {
		setCssVars('background-color', '#fdfdfd');
		setCssVars('outline-color', '#333');
		setCssVars('link-color', 'orange');
		document.body.classList.remove('dark');
		document.body.classList.add('light');
	}
};

const toggleTheme = () => {
	const stored = localStorage.getItem('theme');
	if (stored) {
		// clear storage
		localStorage.removeItem('theme');
	} else {
		// store opposite of preference
		localStorage.setItem('theme', prefersDarkThemes() ? 'light' : 'dark');
	}
	applyTheme();
};

onMount(() => {
	applyTheme();
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
});
</script>

<div>
	<input
		checked={$currentTheme !== 'dark'}
		on:click={toggleTheme}
		type="checkbox"
		class="checkbox"
		id="checkbox"
	/>
	<label for="checkbox" class="label">
		<Moon fill="pink" class="moon" width="0.8rem" />
		<div class="sun"><Sun fill="orange" class="sun" width="0.9rem" /></div>
		<div class="ball" /></label
	>
</div>

<style>
* {
	box-sizing: border-box;
	cursor: pointer;
}
.checkbox {
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

.label {
	width: 3rem;
	height: 1.56rem;
	background-color: var(--outline-color);
	display: flex;
	border-radius: 50px;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	position: relative;
	transform: scale(1.5);
}

.ball {
	width: 20px;
	height: 20px;
	background-color: var(--background-color);
	position: absolute;
	top: 2px;
	left: 2px;
	border-radius: 50%;
	transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.checkbox:checked + .label .ball {
	transform: translateX(24px);
}

.sun {
	margin-left: 0.4rem;
	margin-top: 0.1rem;
}
</style>
