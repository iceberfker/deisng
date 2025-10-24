// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "Pioneer Legends"; // Skip if not NFT
    const serverName = "Elon Yacht Club";
    const serverDescription = "This project was born out of admiration for Elon Musk. We are delighted to bring together supporters of the world's richest man under one roof in multiple series.";
    const serverWebsite = "https://opensea.io/0xdb0e2b56752cd7cb8218c52e5f2ddab3094270b3/created"; // include https://
    const serverTwitter = "https://x.com/BoredElon_YC"; // include https://
    const serverDiscord = "https://discord.gg/AFgHKnZ7"; // include https://
    const serverChain = "base";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://opensea.io/0xdb0e2b56752cd7cb8218c52e5f2ddab3094270b3/created";
    const gifImages = [
   "https://i2.seadn.io/base/0xaf3e083e2c6dae235c20912e0d028032d6cea85b/b62e47098220c7ac1db43f7fdbd96a/a1b62e47098220c7ac1db43f7fdbd96a.png?w=1000",
   "https://i2.seadn.io/ape_chain/0x244ac3c5c2912ee9809babd1a2539e01e2507d4e/3c5f69ac674e6ceebbfb3c692b2f59/6e3c5f69ac674e6ceebbfb3c692b2f59.webp?w=1000",
   "https://i2.seadn.io/base/0xaf3e083e2c6dae235c20912e0d028032d6cea85b/1ce40133d8569c35f0f4db9dd8ce16/cf1ce40133d8569c35f0f4db9dd8ce16.png?w=1000",
   "https://i2.seadn.io/ape_chain/0x244ac3c5c2912ee9809babd1a2539e01e2507d4e/be7daf703bc9d0783f5f1c3c929f3e/3bbe7daf703bc9d0783f5f1c3c929f3e.webp?w=1000",
   "https://i2.seadn.io/base/0x475d53405976fc46000f8bcc425756b607ab4cbe/68cf92e50122c4d63a689a652e78d6/9a68cf92e50122c4d63a689a652e78d6.png?w=1000",
   "https://i2.seadn.io/base/0x75085a91ab33f01f838acd5b83ba6409883d5cd7/3120fd096d4e7d057c48fafd67fcf0/de3120fd096d4e7d057c48fafd67fcf0.webp?w=1000",

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