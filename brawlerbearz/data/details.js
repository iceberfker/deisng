// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "Predictions"; // Skip if not NFT
    const serverName = "Brawler Bearz";
    const serverDescription = "The Brawler Bearz (4,169 supply / 72% staked) is an animated pixel NFT. It is the 1st on-chain dynamic NFT (dNFT) w/ equipable ERC1155 items.";
    const serverWebsite = "https://www.brawlerbearz.club/"; // include https://
    const serverTwitter = "https://x.com/BrawlerBearz"; // include https://
    const serverDiscord = "https://discord.gg/brawlerbearz"; // include https://
    const serverChain = "ethereum";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://etherscan.io/address/0xbd24a76f4135f930f5c49f6c30e0e30a61b97537";
    const gifImages = [
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fallofthethings.s3.amazonaws.com%2Fbrawlerbearz%2F31387424344589129418215063121402891504465502068674918350848",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fallofthethings.s3.amazonaws.com%2Fbrawlerbearz%2F37663280949271358903509271481575834287177539650171722268672",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fallofthethings.s3.amazonaws.com%2Fbrawlerbearz%2F6278346990318882717869386718142520371669620168979667484672",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fallofthethings.s3.amazonaws.com%2Fbrawlerbearz%2F1149450576849338280405312894447946560863630524315336704",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fallofthethings.s3.amazonaws.com%2Fbrawlerbearz%2F43940957350024774550798874991697142918525084877421537132544",
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