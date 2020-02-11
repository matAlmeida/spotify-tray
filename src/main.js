const { app, Tray, Menu } = require("electron");
const path = require("path");

const spotify = require("./lib/spotify");
const spotifyScripts = require("./lib/spotify/scripts");

app.dock.hide();

app.on("ready", () => {
  console.info("Running spotify-tray...");
  const tray = new Tray(
    path.resolve(__dirname, "assets", "spotifyTemplate.png")
  );

  const titleInterval = setInterval(() => {
    updateTitle(tray);
  }, 1000);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Open Spotify",
      type: "normal",
      click: () => {
        spotifyScripts.open();
      }
    },
    { type: "separator" },
    {
      label: "Quit SpotifyTray",
      type: "normal",
      click: () => {
        app.exit(0);
      }
    }
  ]);

  tray.setContextMenu(contextMenu);

  app.on("quit", () => clearInterval(titleInterval));
});

async function updateTitle(tray) {
  const running = await spotifyScripts.isRunning();
  if (running) {
    const track = await spotify.getTrackString();
    tray.setTitle(track);
  } else {
    tray.setTitle("Open Spotify");
  }
}
