// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "Pioneer Legends"; // Skip if not NFT
    const serverName = "TronWars";
    const serverDescription = "The war has begun, 8.888 Trons are responsible for maintaining order.";
    const serverWebsite = "https://tronwars.ai/"; // include https://
    const serverTwitter = "https://x.com/thetronwars"; // include https://
    const serverDiscord = "https://discord.gg/thetronwars"; // include https://
    const serverChain = "ethereum";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://etherscan.io/address/0x537b2279d8f625a1b74cf3c1f0e2122fb047a6b0";
    const gifImages = [
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAO8p4kCdRpxeZoTqGUJWJxhyFgnjCgQmwl9CN1a39TDtD%252BRAbWwwZ3OoLkc7H2dNM1r0P1QtMnVNCx%252FpPC9nJjIseqDAAtHDZdXVhx3CYrvqpBPZal%252FBv7Nnxs5NpK0viRxg4HlkH0CTVGiAIYl%252FBoLNTXEmmSuIDiCImygWmPCXSPF%252B3ZGOSiKuYCd7IIbvzA%253D%253D",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuADfT%252FhyJqkHlbdocx3PLuvIwZAEdUJfxPmVCphgoPro9oRk2hS5KsgQ%252BwyVm2DS%252B1m%252FbFgpOmH6ZA2TEtIOOmC7%252BGGRDzJhTxigxrS7rXZUev9j%252FrjYiedMX48J6msswS5WgsPfFh5G%252FSK0qzAnoRpy2IBMBGRQj%252B2IpQhe8MFQB",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuADQs%252FDC%252FVvZDKpNAaVUCkxvNzrknHjRqnKXs%252B9lZO2M%252BktWTJ4nRqe0TtdhP41W9ocKAk1ywDmny7pePwEoN%252FvbudOhDiMZbYVdh7lHUTspDsXY1ZAUuZr0OfhXxrvEChZQ3U0nGTvVHbB0J47KCL0fi3Y7d50XCI2Lokg46YiDZxNmXrPojyEItm9sdADao3Q%253D%253D",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAJ0nFj5GAM%252BXjeo32DvGMiTxzAFMCpMpd4dl4eMrb5VwcsVfrv52BH4ULUrFBCKmog19BOvBLAja6FRAJ6BWOQYm3WJ4yO3nNVR%252BoD6R8IipPpbO0lMvO4ZAyEZORM7A3K4WXQNEWOhQsAbJ5wrLiXVVkFT8qKXVEmDtgQQWef8JNB5K4%252F9%252BYg8zcjATUKrR2g%253D%253D",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAN8dJiFNEHeQ2jgGXL7b1VCHAFPZV7ghJtZKaYWsjJq53Bmy5ZjM5N%252FbJ6x%252BKpTRoO9lvr8AhT8dAsMoNJ6m2OZTMFPAXuXpah9Bf%252BjG91drukO4Al5kbBXRmx9Cwxyr0rl4awLXLFP72WjflcedMEDg3uPx3uY42tLWcfyApg1omPuY8vm1NqLy1aYvY48Wbw%253D%253D",

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