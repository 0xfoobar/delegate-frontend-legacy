# delegate-cash-frontend

An interface for [EIP-5636: Delegation Registry](https://eips.ethereum.org/EIPS/eip-5639), with source code available at [0xfoobar/token-delegation](https://github.com/0xfoobar/token-delegation),

Built with [svelte-kit](https://svelte.dev/), [ethers](https://ethers.io/#!/app-link/welcome.ethers.space/) and [svelte-ethers-store](https://gitlab.com/clb1/svelte-ethers-store).

## Quick start

A nix dev environment with all the needed dependencies for running the frontend and compiling the contracts, and running an evm local chain is included for convenience

0. Clone the project with submodules `git clone --recurse-submodules git@github.com:0xfoobar/delegate-cash-frontend.git`
1. Install [nix](https://nix.dev/tutorials/install-nix)
2. Enable [flake support](https://nixos.wiki/wiki/Flakes#Enable_flakes)
3. Run `nix develop`, this will install all npm deps and compile the contracts
4. (optional) install [direnv](https://direnv.net/) and run `echo "use flake > .envrc` to automatically load all deps when entering the folder
5. On a new terminal enter `anvil --chain-id 1337` to run an ethereum local node, copy one of the private keys and import to metamask to be able to sign transactions
6. On a separate terminal enter `./deploy-contracts.sh` to deploy the contracts to a local fork
7. Run `npm run dev` to start a frontend dev server

## Credits

Initial version by [0xnook](https://github.com/0xnook/)

Illustrations by [denkishi](https://www.fiverr.com/denkishi)

UI components [table](https://codepen.io/pablorgarcia/pen/ARdVgx), [floating label inputs](https://codepen.io/devesh8/pen/MWYEJEP), [theme toggler](https://codepen.io/PaulinaSurazynska/details/bGVpBOb) and [hammer loader](https://www.fiverr.com/denkishi), where taken and adapted from individual codepen authors.

Design inspired by a beloved swedish furniture manufacturer.
