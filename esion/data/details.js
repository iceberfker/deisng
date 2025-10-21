// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "BTC"; // Skip if not NFT
    const serverName = "ESION";
    const serverDescription = "ESION is a collection of 6,000 generative Dream Catcher PFP's. Each NFT comes with two unique and interchangeable artworks, Reality and Nightmare mode. Each Dream Catcher grants membership to the ESION Club.";

    const serverWebsite = "https://esionnft.com/"; // include https://
    const serverTwitter = "https://x.com/ESION_Club"; // include https://
    const serverDiscord = "https://discord.gg/esion"; // include https://
    const serverChain = "ethereum";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://etherscan.io/address/0xbcd1a163dee3ac31342eb6626f28e45d637dd091";
    const gifImages = [

        "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2F28SsxFrHoAzyiyUIVmrVwlczOlntRxQAii%252B%252F%252BYY7DijlhphgH4R1jjdJms%252FGpGfOsO72g0P8uSWinUaxG2%252BmnTZBcRnOtl8msY44nx2TRA4%253D",

"https://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuAE%2Fmp2Hpf66s44cGIpA1gdqTF0%2FkmJqct1Z6VQIlsF2Q4LJdmYJghPnk6YQ3z1J5ETa6QWkZ1MoWAYKAjKiDbbLFZ8oS5t6yA%2FSjs93SbJON3vuCNEN849aCzulIRoGPX0qpwL2TamFtU1NBmNqn2NJpHbUFX2%2FuCWKOz0kzzKfB3m6VBzIa%2FbMAivrCsIV4ww%3D%3D",

"https://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuABnYq%2BtR2ku55EVDGiLSGJJUqmRugL4gGXRt20G48FZBEQTzE1fP%2FW0s98fJ%2FYRvcQT%2FWUusfkZqTfDQKEpit46wKEIU7B%2FWFSugCeK4kXgfJSAwxYUFaEwnPv5fT1iaxpXMG9%2F8%2BycPSqcdA8YxWS4mhX0x0SO%2FxZcdgqLdAc3LkIkfEfKP0p3Wg3277X5Msw%3D%3D",

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