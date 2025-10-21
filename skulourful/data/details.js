// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "BTC"; // Skip if not NFT
    const serverName = "Official Skulourful";
    const serverDescription = "Skulourful is a 6,666 supply collection on the Ethereum blockchain. The project is founded by HATCH, which is the moniker of London-based artist & illustrator Dave Smith.";
    const serverWebsite = "https://skulourful.com/"; // include https://
    const serverTwitter = "https://x.com/skulourful"; // include https://
    const serverDiscord = "https://discord.gg/skulourful"; // include https://
    const serverChain = "ethereum";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = 

"https://etherscan.io/address/0x3a987f099e7f1d0ca6403570a9d5a69b819f86ee";
    const gifImages = [
        "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAE%252BC4vKArchB14VDRaG5KWob2VlSa1MmX0R%252BHnUNTx0IfA%252Bd872%252FGdgUTUcqqxCM8Qh9Hz23VwqSUW5to4cZDCgBaGIPczo%252BeN4S4izVXBtWlk5Gy4kZ5JwSOsQvuCmmXDHMnp3eY6eIgv4aeaKFssTOFAbcu3Akrxuo8XvsPM1x",

        "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuADZ4TJHfE5rNY8l5Q%252F4WLiZGmiUjZouRHQP7wfC8WAg7gLvUBTN4NKEEgj%252FYe7zCNfIfYDjRDAkU2iQniGfsGNABnvfqAfiS0RL%252F0kyeb9URi0SNIYAS2zcN6kjplLs9xIXmCX0C68X1ryb5XvSeFCXBVZRl8d7ckGO4VF%252FKDGow",

   "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAFA9uN4Lf8GiAZMcgWxrNFcTfm%252Fj5zN2NRlMtj9cvXyZ2dkgfARZ8wFcmstpcvIMPb6J9sOdF5UxpoNTLEEqa%252Bl935YR6bnf1bWtb45Lbd5iptIRn6EGjI8gXS1KY1Q8A3zGFmBwLUCJt7m4KVf%252Bmllmld%252FqWdqIY7KHYH%252F5aFPggscxcJAHyvh4SIdcqSYNiA%253D%253D",

    ];


// END OF EDIT







// DO NOT TOUCH

    document.querySelectorAll(".replace-server").forEach(el => {
        el.innerText = serverName;
    });

    document.getElementById("replaceDescription").innerText = serverDescription;

    const websiteLink = document.getElementById("replaceWebsite");
    websiteLink.innerText = new URL(serverWebsite).hostname;
    websiteLink.href = serverWebsite;

    const twitterLink = document.getElementById("replaceTwitter");
    const twitterUrl = new URL(serverTwitter);
    twitterLink.innerText = twitterUrl.hostname + twitterUrl.pathname;
    twitterLink.href = serverTwitter;

    const discordLink = document.getElementById("replaceDiscord");
    const discordUrl = new URL(serverDiscord);
    discordLink.innerText = discordUrl.hostname + discordUrl.pathname;
    discordLink.href = serverDiscord;

    const explorerUrl = document.getElementById("explorerLink");
    explorerUrl.href = explorerLink;

    let index = 0;
    const img = document.getElementById("nftGIF");

    setInterval(() => {
        img.src = gifImages[index];
        index = (index + 1) % gifImages.length;
    }, 150);

    const chainLogos = {
        abstract: "https://abscan.org/assets/generic/html/favicon-light.ico",
        apechain: "https://static1.tokenterminal.com//apechain/logo.png?logo_hash=0bcf0b91beec0e9cc66be298dcab89245320825b",
        arbitrum: "https://guild.xyz/networkLogos/arbitrum.svg",
        avax: "https://guild.xyz/explorerLogos/snowtrace.svg",
        base: "https://guild.xyz/networkLogos/base.svg",
        berachain: "https://berascan.com/assets/generic/html/favicon-light.ico",
        blast: "https://blastscan.io/assets/blast/images/favicon-light.ico?v=25.7.4.1",
        bsc: "https://guild.xyz/explorerLogos/bscscan-dark.svg",
        ethereum: "https://guild.xyz/explorerLogos/etherscan-dark.svg",
        flow: "https://www.flowscan.io/logo/flowscan-logo.svg",
        monad: "https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667f1590ccceec3eee19ec7c_logo.jpg",
        optimism: "https://guild.xyz/networkLogos/optimism.svg",
        polygon: "https://guild.xyz/networkLogos/polygon.svg",
        ronin: "https://guild.xyz/networkLogos/ronin.svg",
        sei: "https://guild.xyz/explorerLogos/seitrace.svg",
        shape: "https://shapescan.xyz/assets/favicon/favicon-16x16.png",
        solana: "https://avatars.githubusercontent.com/u/92743431?s=200&v=4",
        soneium: "https://guild.xyz/networkLogos/soneium.webp",
        unichain: "https://unichain.blockscout.com/assets/favicon/favicon-16x16.png",
        zora: "https://guild.xyz/networkLogos/zora.svg"
    };

    const chainLogo = chainLogos[serverChain];
    document.getElementById("serverChain").src = chainLogo;

    const logoBase = 'data/logo';
    const bannerBase = 'data/banner';
    const extensions = ['png', 'jpg', 'jpeg'];

    function tryLoadImage(base, callback) {
        for (const ext of extensions) {
            const path = `${base}.${ext}`;
            const img = new Image();
            img.src = path;

            img.onload = () => callback(path);
        }
    }

    tryLoadImage(logoBase, (path) => {
        document.querySelectorAll('.logo-img').forEach(el => el.src = path);
        const favicon = document.getElementById('favicon');
        if (favicon) favicon.href = path;
    });

    tryLoadImage(bannerBase, (path) => {
        const banner = document.querySelector('.banner-img');
        if (banner) banner.src = path;
    });

    const textContainer = document.getElementById("ownershipText");
    textContainer.innerHTML = isNFT ?
        `Own a(n) <span class="replace-server">${serverName}</span> NFT` :
        `Hold a minimum amount of <span class="replace-server">${ticker}</span>`;