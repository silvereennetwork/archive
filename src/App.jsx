import "./App.css";

const games = [
  {
    name: "Ball Dodge",
    image: "https://moonlight.silvereen.net/src/static/icons/ball-dodge.png",
    link: "https://moonlight.silvereen.net/src/static/games/ball-dodge/index.html",
    description: "A simple game where you have to dodge the balls.",
    download:
      "https://moonlight.silvereen.net/src/static/games/ball-dodge/ball-dodge.zip",
  },
  {
    name: "3kh0 Assets",
    image: "http://web.archive.org/web/20230416012103if_/https://cdn.jsdelivr.net/gh/Rahib777-7/3kh0TEMP@main/images/logo.png",
    link: "https://3kh0-assets.silvereen.net/3kh0-assets/",
    description: "Yes... all the games",
    download:
      "https://3kh0-assets.silvereen.net/3kh0-assets.zip",
  },
];

const sites = [
  {
    name: "Moonlight",
    image:
      "https://moonlight.silvereen.net/src/static/images/moon-light-moon-background.png",
    link: "https://moonlight.silvereen.net",
    description: "The cure to boredom at your fingertips",
    download: "",
  },
  {
    name: "Corrupted",
    image: "https://corruptedgaming.online/corrupted-logo.png",
    link: "https://corruptedgaming.online",
    description: "Play all the retros in one place",
    download: "https://github.com/silvereennetwork/corrupted/",
  },
];

function Spacer15(pix) {
  return <div style={{ width: "1px", height: "15vh" }}></div>;
}

function Spacer5(pix) {
  return <div style={{ width: "1px", height: "5vh" }}></div>;
}

function Games() {
  const gamesObject = games.map((games) => (
    <a href={games.link} target="_new">
      <div class="object-div">
        <img src={games.image} alt={games.name} class="object-img"></img>
        <p class="object-title">{games.name}</p>
        <p class="object-description">{games.description}</p>
        <a href={games.download} target="_new" download>
          <span
            class="material-symbols-outlined"
            style={{ backgroundColor: "#1a1a1a", display: "block" }}
          >
            download
          </span>
        </a>
      </div>
    </a>
  ));

  return gamesObject;
}

function Sites() {
  const sitesObject = sites.map((sites) => {
    if (sites.download !== "") {
      return (
        <a href={sites.link} target="_new">
          <div class="object-div">
            <img src={sites.image} alt={sites.name} class="object-img"></img>
            <p class="object-title">{sites.name}</p>
            <p class="object-description">{sites.description}</p>
            <a href={sites.download} target="_new" download>
              <span
                class="material-symbols-outlined"
                style={{ backgroundColor: "#1a1a1a", display: "block" }}
              >
                download
              </span>
            </a>
          </div>
        </a>
      );
    } else {
      return (
        <a href={sites.link} target="_new">
          <div class="object-div">
            <img src={sites.image} alt={sites.name} class="object-img"></img>
            <p class="object-title">{sites.name}</p>
            <p class="object-description">{sites.description}</p>
          </div>
        </a>
      );
    }
  });

  return sitesObject;
}

export default function App() {
  return (
    <>
      <h1 class="center title">
        Silvereen Games <span style={{ color: "lime" }}>Archive</span>
      </h1>
      <Spacer15 />
      <h2 class="center">Games</h2>
      <hr></hr>
      <Spacer5 />
      <div class="objects-container">
        <Games />
      </div>
      <Spacer15 />
      <h2 class="center">Sites</h2>
      <hr />
      <Spacer5 />
      <div class="objects-container">
        <Sites />
      </div>
    </>
  );
}
