const spotifyScripts = require("./scripts");
const { seconds2MinuteString } = require("../../util/strings");

// Lib
async function getTrackString() {
  const info = await spotifyScripts.getState();
  if (info) {
    const track = await spotifyScripts.getTrack();
    return track2String({ ...track, position: info.position });
  } else {
    return "Wating music...";
  }
}

function track2String(track) {
  const { artist, name, position, duration } = track;

  const currentTime = seconds2MinuteString(position);
  const totalTime = seconds2MinuteString(Math.floor(duration / 1000));

  return `${currentTime} | ${totalTime} - ${artist} - ${name}`;
}

module.exports = {
  getTrackString
};
