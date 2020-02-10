function seconds2MinuteString(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec - minutes * 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

module.exports = {
  seconds2MinuteString
};
