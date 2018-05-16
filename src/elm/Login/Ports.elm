port module Login.Ports exposing (..)

port jsLogin : (String -> msg) -> Sub msg
