// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "Predictions"; // Skip if not NFT
    const serverName = "Party Penguins";
    const serverDescription = "Party Penguins is an NFT collection of 9,999 unique and flippin' cool penguins.";
    const serverWebsite = "https://partypenguins.club/"; // include https://
    const serverTwitter = "https://x.com/PartyPenguinNFT"; // include https://
    const serverDiscord = "https://discord.gg/PartyPenguins"; // include https://
    const serverChain = "ethereum";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://etherscan.io/address/0x31f3bba9b71cb1d5e96cd62f0ba3958c034b55e9";
    const gifImages = [
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAGQkMKYhpmMMPV2ibs%252Fhnaqgb6X%252FoGwVEAqLUhVXv5i28D2yYqvxDupFJxBZmFhyZiQE9yfcXWYPje%252F1uINn5x17ax9aAdRz9vIb1v8IAqaliEWacHLPDDvO1mI8%252BH5WWwxXhe1AdN%252B%252BroZ73JU9yNgM5BwHFZPPNT4kwlgDZ7eFVbuDFTQIBBU5ApRDndynaQ%253D%253D",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuABaGJd3%252F0HUcIO9IXGK60Rcl8wcVV5fQqz9XZDQ4zbm47a27qrJA5QDaB1IHNuF%252FMWAMApNzZNTcTYJi6FeXYK1fhLkzfb11ZjpNfkR0RsNXx2lBbAXTsTxCfFlU65jR%252FRliPk71nfwv%252FXh%252FpHpz0C0k%252FRbcOB1luDhTlidrzg27",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAFFTnqLGCNIb%252F56cVJYLDN%252Fzgv3C%252BPfgLp3UJhrilwumh%252ByaFhrFy1%252FZnz6M0Wz3fYLo172O%252B0iTN7FgqHHo2fJ1kJJFrOaD%252B07azEhCnq%252Bk3mo15W1yvISJT67%252BCfGEk0q8yE9uPhfPHuJZGhWqCpmGjGRzsB02ynoy6kcyGTL4fNp87NjJDNU0k%252BhZ8F1FJw%253D%253D",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAElf3bqTo0WCVb2TGY3Md5ZHwdTaqbruaqtnSV9cLQ3pkaFddrTiR%252FH4BdSBFHFGqdy%252Bhd9vDLefAibRnw%252BjAC0qV%252BfBdwmyNkMa4n%252FE%252BThoICVGNObOXcmWt873DEHFrsbDkrncqe%252FVD2zWlGNqkH5%252FQWIGoE95JLX1nzNjpLz9",
   "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAEvtASMixYbagso0bPcBqA1jo%252BNok486qQbRfCmXuUiQMynj4T4j2m7drGErvcj%252BXGAbtaP1eKpC%252FfN0lotwu8w9zEaROdtp0UK4D4pC8oN%252BwTOJ2mDPgu%252FCxJKXLti%252B%252FDdkmMnezJGm4rqk6%252FRCdw11ZNzC0hgku%252BKh4lavtMQgbBd%252FHDudrJ85enccA5%252BsHA%253D%253D",
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