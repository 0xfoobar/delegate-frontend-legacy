{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    utils.url = "github:numtide/flake-utils";
    foundry.url = "github:shazow/foundry.nix";
  };

  outputs = { self, nixpkgs, utils, foundry }:
  utils.lib.eachDefaultSystem (system:
  let
    pkgs = import nixpkgs {
      inherit system;
      overlays = [ foundry.overlay ];
    };
  in {
    devShell = pkgs.callPackage ./shell.nix {};
  });
}
