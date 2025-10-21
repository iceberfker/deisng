// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "Pioneer Legends"; // Skip if not NFT
    const serverName = "LILY";
    const serverDescription = "LILY - an expansion of The Lotus brand - aims to become the landing page of the new web pushing the boundaries through innovative technology, art and informed community.";
    const serverWebsite = "https://linktr.ee/thelilynft"; // include https://
    const serverTwitter = "https://x.com/thelilynft"; // include https://
    const serverDiscord = "https://discord.gg/fudinc"; // include https://
    const serverChain = "solana";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://solscan.io/token/ATDB6H3M3pzS7iTNiBeqxGbxmwx9nJZWLsvHjC8J7QrX?cluster=mainnet";
    const gifImages = [
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fshdw-drive.genesysgo.net%2FE8yeCMMgZCimwwh16LFMbWF4VDfQSzGWLcbXqFnrXMT6%2F4LR9HDZrJ5UR7quj6tgeBuSxk9YteMwUGMU6xqNHsY2j.png%3Fts%3D1689254128",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fshdw-drive.genesysgo.net%2FE8yeCMMgZCimwwh16LFMbWF4VDfQSzGWLcbXqFnrXMT6%2F2r3ukQ7raAuQxp3J2z13VDgmSY4CKCJRUHYu4YTkni5g.png%3Fts%3D1689253800",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fshdw-drive.genesysgo.net%2FE8yeCMMgZCimwwh16LFMbWF4VDfQSzGWLcbXqFnrXMT6%2FD4MRiuRxpE16AsjyiN9gYpjqUb9JjvtW1TahP7i3drwj.png%3Fts%3D1689257721",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fshdw-drive.genesysgo.net%2FE8yeCMMgZCimwwh16LFMbWF4VDfQSzGWLcbXqFnrXMT6%2F8Rth8J3zkKcEeHuFc7KzHwiC6KiWkbPptfnaeRs63HAr.png%3Fts%3D1689255254",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fshdw-drive.genesysgo.net%2FE8yeCMMgZCimwwh16LFMbWF4VDfQSzGWLcbXqFnrXMT6%2F75CmEP8Q3BdPk2MKxWwrm1rDFDML62N8Lr22M934saZt.png%3Fts%3D1689254701",

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