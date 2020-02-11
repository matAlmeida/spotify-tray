-- https://github.com/andrehaveman/spotify-node-applescript/blob/master/lib/scripts/volume_up.applescript

on max(x, y)
  if x ² y then
    return x
  else
    return y
  end if
end max

tell application "Spotify" to set sound volume to (my max(sound volume + 10, 100))