{ mkShell, git, nodejs, solc, foundry-bin }:
mkShell {
    nativeBuildInputs = [ git nodejs foundry-bin solc ];
    shellHook = ''
        # check if node dependencies are installed
        if [ ! -d ./node_modules ] 
        then
            echo "node_modules not present, installing"
            npm install
        fi

        # add npm binaries to path
        export PATH="$PWD/node_modules/.bin/:$PATH"

        # clone contract submodules if not present
        if [ ! -f ./token-delegation/foundry.toml ] 
        then
          git submodule init
          git submodule update 
        fi

        # compile contracts 
        # need to descend into contract submodule cus forge -c fails
        if [ ! -d ./token-delegation/out ] 
        then
            cd token-delegation
            forge build
            # needs to be run twice for some reason
            forge build
            cd ..
        fi

        # make shell scripts executable
        chmod +x deploy-contracts.sh
    '';
}

