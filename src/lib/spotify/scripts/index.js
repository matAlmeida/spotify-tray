const path = require("path");
const applescript = require("applescript");

const promisify = require("../../../util/promisify");

// Applescript
const execFile = promisify(applescript.execFile);

function execAppleScript(scriptName) {
  return execFile(path.resolve(__dirname, `${scriptName}.applescript`));
}

async function open() {
  try {
    await execAppleScript("open");
  } catch (error) {
    throw new Error(error);
  }
}

async function isRunning() {
  try {
    const running = await execAppleScript("is_running");

    return Boolean(running);
  } catch (error) {
    throw new Error(error);
  }
}

async function getState() {
  try {
    const state = await execAppleScript("get_state");

    return JSON.parse(state);
  } catch (error) {
    throw new Error(error);
  }
}

async function getTrack() {
  try {
    const track = await execAppleScript("get_track");

    return JSON.parse(track);
  } catch (error) {
    throw new Error(error);
  }
}

async function raiseVolume() {
  try {
    await execAppleScript("volume_up");
  } catch (error) {
    throw new Error(error);
  }
}

async function reduceVolume() {
  try {
    await execAppleScript("volume_down");
  } catch (error) {
    throw new Error(error);
  }
}

async function togglePlay() {
  try {
    await execAppleScript("toggle_play");
  } catch (error) {
    throw new Error(error);
  }
}

async function toggleShuffle() {
  try {
    await execAppleScript("toggle_shuffle");
  } catch (error) {
    throw new Error(error);
  }
}

async function toggleRepeat() {
  try {
    await execAppleScript("toggle_repeat");
  } catch (error) {
    throw new Error(error);
  }
}

async function nextTrack() {
  try {
    await execAppleScript("next_track");
  } catch (error) {
    throw new Error(error);
  }
}

async function previousTrack() {
  try {
    await execAppleScript("previous_track");
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  open,
  isRunning,
  getState,
  getTrack,
  raiseVolume,
  reduceVolume,
  togglePlay,
  toggleShuffle,
  toggleRepeat,
  nextTrack,
  previousTrack
};
