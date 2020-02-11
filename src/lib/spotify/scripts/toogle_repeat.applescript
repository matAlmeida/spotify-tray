-- https://github.com/andrehaveman/spotify-node-applescript/blob/master/lib/scripts/toggle_repeating.applescript

tell application "Spotify"
  if repeating then
    set repeating to false
  else
    set repeating to true
  end if
end tell