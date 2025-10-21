// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "BTC"; // Skip if not NFT
    const serverName = "froyo";
    const serverDescription = "froyo kittens is a collection hand drawn and composed by jessie morii.";
    const serverWebsite = "https://www.froyoverse.io/"; // include https://
    const serverTwitter = "https://x.com/froyoverse"; // include https://
    const serverDiscord = "https://discord.gg/froyoverse"; // include https://
    const serverChain = "ethereum";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://etherscan.io/address/0x22d4c35a4f2b229a928b1b569b2f60225976426a";
    const gifImages = [

        "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAITPZ53br8NsYKKwTWPgYSis6S2odHKEfbhCEHGtglSUrYA33Y9g5IFB9aE2bvMT%252FTra6%252F1OR2BP3jgrzxvY5FaPZV8gpQUIyAxHJM%252B%252BfO9E2rrbkogPpSXa41y8XYv8EAtpPfD833xXozGetsaUqfqespwompfMPY8fuiscuyhK1N6V0sRL%252FL4pU93G8B%252FsEg%253D%253D",

"https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuACtUvmOYIrGESqxLZhgCGC%252BMiorHUTn2tvSu9%252FhkKQVfViOMV2ZIjI6ZQ36Ijwyk2nKcsLR%252F%252Bg3ApKPo8NYyBVuFQ%252FNfV15hXWQuiMuRGkFQal61do6j6EpAOAk5jvREdcDB5oSBbWjLyvqYJ3TXKLbksxITk3zKN0TvNGk8ACHbOExrfKUklzsWYZV5ZZN9EQ%253D%253D",

"https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAH5V8ZYTEFANBvTE4TVEfOX35YmcPBorHboxJ1WymbiYOentarbcHNuWOvtW2R0FqHP0MR4I31EISON5VzjTMfaEKKltdjTEvOtkjr89DoGhYSoIwNbzWYZ%252F7jq2EZBdNtmBv2HnVCK59pMarR9hgkv33ion2KFGs30AktHx6Ty%252BNQIt8slnuZzAtW9Rs6UbzA%253D%253D",

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