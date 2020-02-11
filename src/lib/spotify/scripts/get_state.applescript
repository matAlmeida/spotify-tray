-- Based on
-- https://github.com/andrehaveman/spotify-node-applescript/blob/master/lib/scripts/get_state.applescript

tell application "Spotify"
  set cstate to "{"
  set cstate to cstate & "\"volume\": " & sound volume
  set cstate to cstate & ",\"position\": " & (player position as integer)
  set cstate to cstate & ",\"state\": \"" & player state & "\""
  set cstate to cstate & ",\"repeating\": " & (repeating as boolean)
  set cstate to cstate & ",\"shuffling\": " & (shuffling as boolean)
  set cstate to cstate & "}"

  return cstate
end tell