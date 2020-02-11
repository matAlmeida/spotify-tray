const spotifyScripts = require("./scripts");

// Lib
async function getTrackString() {
  const info = await spotifyScripts.getState();
  if (info) {
    const track = await spotifyScripts.getTrack();
    return track2String({ ...track });
  } else {
    return "Wating music...";
  }
}

function track2String(track) {
  const { artist, name } = track;

  return `${artist} - ${name}`;
}

module.exports = {
  getTrackString
};
