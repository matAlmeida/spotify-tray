-- https://github.com/andrehaveman/spotify-node-applescript/blob/master/lib/scripts/volume_down.applescript

on min(x, y)
  if x ² y then
    return y
  else
    return x
  end if
end min

tell application "Spotify" to set sound volume to (my min(sound volume - 10, 0))