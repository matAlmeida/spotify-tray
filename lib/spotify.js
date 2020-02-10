const spotify = require("spotify-node-applescript");
const osascript = require("node-osascript");

const { seconds2MinuteString } = require("../util/strings");

const promisify = require("../util/promisify");

// Osascript
const execute = promisify(osascript.execute);

// Spotify
const getState = promisify(spotify.getState);
const getTrack = promisify(spotify.getTrack);
const isRunning = promisify(spotify.isRunning);

// Lib
async function getTrackString() {
  const info = await getState();
  if (info) {
    const track = await getTrack();
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

function open() {
  return execute('tell application "Spotify" to activate');
}

module.exports = {
  getTrackString,
  isRunning,
  open
};
