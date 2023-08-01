const qouteEl = document.getElementById("quotes");
const quoteBtn = document.getElementById("quotesBtn");

const generateQuote = async () => {
  try {
    const url = "https://api.chucknorris.io/jokes/random";
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch(url, config);
    const data = await res.json();
    qouteEl.innerHTML = data.value;
  } catch (error) {
    console.log(error, "NOT WORKING");
  }
};

quoteBtn.addEventListener("click", generateQuote);
