port module Ports exposing (onSessionChange, redirectTwitter, storeSession, redirectTop)

import Json.Encode exposing (Value)


port storeSession : Maybe String -> Cmd msg


port onSessionChange : (Value -> msg) -> Sub msg


port redirectTwitter : () -> Cmd msg


port redirectTop : () -> Cmd msg
