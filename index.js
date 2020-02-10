const { app, Tray } = require("electron");
const path = require("path");

const spotify = require("./lib/spotify");

app.dock.hide();

app.on("ready", () => {
  console.info("Running spotify-tray...");
  const tray = new Tray(
    path.resolve(__dirname, "assets", "spotifyTemplate.png")
  );

  const titleInterval = setInterval(() => {
    updateTitle(tray);
  }, 1000);

  tray.on("click", () => {
    spotify.open();
  });

  app.on("quit", () => clearInterval(titleInterval));
});

async function updateTitle(tray) {
  const running = await spotify.isRunning();
  if (running) {
    const track = await spotify.getTrackString();
    tray.setTitle(track);
  } else {
    tray.setTitle("Open Spotify");
  }
}
