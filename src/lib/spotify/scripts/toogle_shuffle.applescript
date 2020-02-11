-- https://github.com/andrehaveman/spotify-node-applescript/blob/master/lib/scripts/toggle_shuffling.applescript

tell application "Spotify"
  if shuffling then
    set shuffling to false
  else
    set shuffling to true
  end if
end tell