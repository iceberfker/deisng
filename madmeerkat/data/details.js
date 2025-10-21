// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "GMR"; // Skip if not NFT
    const serverName = "Mad Meerkat NFT";
    const serverDescription = "The Polygon Mad Meerkat Collection represents a pivotal step towards our vision of Madness- Creating a holistic adventure that welcomes individuals from all chains to uncover the potential behind Web 3.0 as One MM.";
    const serverWebsite = "https://madmeerkat.io/"; // include https://
    const serverTwitter = "https://x.com/MadMeerkatNFT"; // include https://
    const serverDiscord = "https://discord.gg/madmeerkat"; // include https://
    const serverChain = "polygon";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://polygonscan.com/address/0x2f5b31d2b4891f0ed183d56dd6ebd55249ca1d0c";
    const gifImages = [
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2F5Gd9JK9bwHMyBCCXlmiVXjWdtvk0ewAQVES2H9hSTB1ICKLa%252BegnnIYNejQRM5IMobC77LoiheDyk1sjnB11uBJKJ01T7vBErHcNuSYY2b2%252B5VcRs0zTueVYE83BooMR6CF14I2XWv9zvST05p1LgpflTHoaaR2CCi8im7a%252FQ%252FSna2oXDcHFudfOK77rkrmE.png",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2F5Gd9JK9bwHMyBCCXlmiVXjWdtvk0ewAQVES2H9hSTB1ICKLa%252BegnnIYNejQRM5IMobC77LoiheDyk1sjnB11uBJKJ01T7vBErHcNuSYY2b1MxGkao0SfeCIYZkc6c3TxCfw4Wju9APSjji9deZjdTrGBqKLfjTxJ2cJ%252BXQrue5enhl%252FEyWCyk2uqUGaIDLDd.png",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2F5Gd9JK9bwHMyBCCXlmiVXjWdtvk0ewAQVES2H9hSTB1ICKLa%252BegnnIYNejQRM5IMobC77LoiheDyk1sjnB11uBJKJ01T7vBErHcNuSYY2b3n2iUVq3K83aUEelZpwX18%252F5f1jFaYAFyvQiGH3aWvdtAjPTUGDufNdhxxEYwKUq%252Bhqfwz4ggN8LPrQZkVIbCL.png",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2F7%252FrdF%252Fe%252F0iXY8HduhRCoIehkmFeXPeOQQFbbmIPfjCb6d3AUAV3bPYNUNHO5JghESNsSR1Bx1feJDT2uc4XGFVZnaC5CqKFHFxBoVEzv6T2FCVA4xtoP8uU0DMNoftLpy%252FiL0QTiNTKbxYDafTMAxw%253D%253D",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2F7%252FrdF%252Fe%252F0iXY8HduhRCoIehkmFeXPeOQQFbbmIPfjCYMajxJ8khhpbOL%252BoUYH5%252FoeRAw3DCXBdIjEaBWrojJT0keyhZHYQOcJqKGPZqQ%252BKECB78C%252F6mneAUT4Zs3z8DK6SPJcZOozKJjRPZyvWPn1Q%253D%253D",
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
        solana: "https://solscan.io/favicon.ico",
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