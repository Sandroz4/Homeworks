const formElement = document.querySelector("form");
const infoContainer = document.querySelector("div");

const displayCryptoData = (cryptoInfo) => {
    const cryptoDetails = cryptoInfo[0];
    infoContainer.innerHTML = `
        <img src="${cryptoDetails.image}" width="150px" alt="${cryptoDetails.name}">
        <div>
            <h2>${cryptoDetails.name}</h2>
            <p class="symbol">Symbol: ${cryptoDetails.symbol.toUpperCase()}</p>
            <p>Current Price: $${cryptoDetails.current_price}</p>
            <p>Market Capitalization: $${cryptoDetails.market_cap.toLocaleString()}</p>
            <p>Market Rank: ${cryptoDetails.market_cap_rank}</p>
            <p>Circulating Supply: ${cryptoDetails.circulating_supply.toLocaleString()}</p>
            <p>24h Price Change: ${cryptoDetails.price_change_percentage_24h}%</p>
        </div>
    `;
};

const getCryptoData = async (cryptoId) => {
    try {
        const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoId}`;
        const response = await fetch(apiUrl);
        const cryptoData = await response.json();
        displayCryptoData(cryptoData);
    } catch (error) {
        console.error("Failed to fetch cryptocurrency data:", error);
    }
};

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const cryptoId = formElement.coinInput.value.trim();
    if (cryptoId) {
        getCryptoData(cryptoId);
    } else {
        console.log("Please enter a valid cryptocurrency ID.");
    }
});
