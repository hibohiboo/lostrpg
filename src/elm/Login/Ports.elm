port module Login.Ports exposing (..)

-- In ports
port jsLogin : (String -> msg) -> Sub msg
-- Out ports
port redirectTwitter : String -> Cmd msg
