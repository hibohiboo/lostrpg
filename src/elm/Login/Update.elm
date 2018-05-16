module Login.Update exposing (..)

import Login.Messages exposing (Msg(..))
import Login.Models exposing (..)
import Login.Ports exposing (redirectTwitter)


update : Msg -> ( LoginUser, Cmd Msg )
update message =
    case message of
        Login ->
            ( newLoginUser, redirectTwitter "login" )
