module Login.Update exposing (..)

import Login.Commands exposing (fetch)
import Login.Messages exposing (Msg(..))
import Login.Models exposing (..)
import Login.Ports exposing (logoutAuth, redirectTwitter)


update : Msg -> ( LoginUser, Cmd Msg )
update message =
    case message of
        Login ->
            ( newLoginUser, redirectTwitter () )

        GetUid uid ->
            ( { newLoginUser | uid = uid }, fetch uid )

        Logout ->
            ( newLoginUser, logoutAuth () )

        OnFetch (Ok newCharacters) ->
            ( newLoginUser, Cmd.none )

        OnFetch (Err error) ->
            ( newLoginUser, Cmd.none )
