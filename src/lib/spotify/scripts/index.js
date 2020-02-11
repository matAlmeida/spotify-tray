const path = require("path");
const applescript = require("applescript");

const promisify = require("../../../util/promisify");

// Applescript
const execFile = promisify(applescript.execFile);

async function open() {
  try {
    await execFile(path.resolve(__dirname, "open.applescript"));
  } catch (error) {
    throw new Error(error);
  }
}

async function isRunning() {
  try {
    const running = await execFile(
      path.resolve(__dirname, "is_running.applescript")
    );

    return Boolean(running);
  } catch (error) {
    throw new Error(error);
  }
}

async function getState() {
  try {
    const state = await execFile(
      path.resolve(__dirname, "get_state.applescript")
    );

    return JSON.parse(state);
  } catch (error) {
    throw new Error(error);
  }
}

async function getTrack() {
  try {
    const track = await execFile(
      path.resolve(__dirname, "get_track.applescript")
    );

    return JSON.parse(track);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  open,
  isRunning,
  getState,
  getTrack
};
