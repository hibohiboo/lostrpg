module Login.Update exposing (..)

import Login.Messages exposing (Msg(..))
import Login.Models exposing (..)
import Login.Ports exposing (redirectTwitter, logoutAuth)


update : Msg -> ( LoginUser, Cmd Msg )
update message =
    case message of
        Login ->
            ( newLoginUser, redirectTwitter() )
        GetUid uid ->
            ( {newLoginUser|uid = uid}, Cmd.none)
        Logout ->
            (newLoginUser, logoutAuth())
