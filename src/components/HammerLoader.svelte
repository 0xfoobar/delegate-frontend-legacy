<!-- adapted from https://codepen.io/kh-mamun/pen/bQMEYM -->
<div>
	<div class="hammer-loader">
		<span class="hammer">
			<span />
		</span>
	</div>
	<div class="loading">Loading...</div>
</div>

<style>
.loading {
	margin-left: 20px;
}

.hammer-loader {
	display: flex;
}

.hammer {
	animation: hammer 1s infinite;
	background: var(--outline-color);
	border-radius: 5px;
	height: 120px;
	position: relative;
	transform-origin: 100% 100%;
	width: 14px;
}
.hammer::before,
.hammer::after {
	background: var(--outline-color);
	content: '';
	position: absolute;
}
.hammer::before {
	border-radius: 45%;
	height: 24px;
	left: 50%;
	top: 3px;
	transform: translate(-50%, 0);
	width: 28px;
}
.hammer::after {
	animation: hammerRight 1s 0.55s infinite;
	border-radius: 3px 2px 2px 3px;
	height: 20px;
	right: -16px;
	top: 5px;
	width: 10px;
}
.hammer span {
	background: var(--outline-color);
	border-radius: 4px;
	height: 10px;
	left: -16px;
	position: absolute;
	top: 10px;
	width: 14px;
}
.hammer span::before {
	background: var(--outline-color);
	border-radius: 3px;
	content: '';
	height: 14px;
	left: 0;
	position: absolute;
	top: -2px;
	width: 8px;
}

@keyframes hammer {
	0%,
	100% {
		transform: rotate(0deg);
	}
	20%,
	40% {
		transform: rotate(86deg);
	}
}
</style>
