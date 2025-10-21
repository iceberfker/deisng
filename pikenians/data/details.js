// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "BTC"; // Skip if not NFT
    const serverName = "Pikenians";
    const serverDescription = "First NFT Collection made for Purple Ecosystem";
    const serverWebsite = "http://www.pikenians.xyz/"; // include https://
    const serverTwitter = "https://x.com/pikenians"; // include https://
    const serverDiscord = "https://discord.gg/pikenians"; // include https://
    const serverChain = "solana";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://solscan.io/token/EC2fra7j5fVssXdAga72fm8KrHQGKhBSfynbAKqjyhFu";
    const gifImages = [
        "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fassets.pinit.io%2FHtDYWkb5Xf7tjs8SPgBsF5nhsW1TaxLkg72ZCMrXiJSw%2F571845b4-9523-4e76-9fa6-9b4569d3306d%2F598",
        "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fassets.pinit.io%2FHtDYWkb5Xf7tjs8SPgBsF5nhsW1TaxLkg72ZCMrXiJSw%2F571845b4-9523-4e76-9fa6-9b4569d3306d%2F1477",

        "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fassets.pinit.io%2FHtDYWkb5Xf7tjs8SPgBsF5nhsW1TaxLkg72ZCMrXiJSw%2F571845b4-9523-4e76-9fa6-9b4569d3306d%2F1873",

        "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fassets.pinit.io%2FHtDYWkb5Xf7tjs8SPgBsF5nhsW1TaxLkg72ZCMrXiJSw%2F571845b4-9523-4e76-9fa6-9b4569d3306d%2F1421",

     
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