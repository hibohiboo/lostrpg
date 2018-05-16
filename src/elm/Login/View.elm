module Login.View exposing (..)

import Html exposing (Html, div, text)
import Messages exposing (Msg(..))
import Models exposing (Model)
import Login.Models exposing(LoginUser)

pageHead : Model -> Html Msg
pageHead model = 
    let user = model.loginUser
    in
    case user.uid of
    "" -> loginButton
    _ ->  logoutButton user

logoutButton : LoginUser -> Html Msg
logoutButton user =
    div []
        [ text ("" ++ user.twitterName)
        ]
loginButton :  Html Msg
loginButton =
    div []
        [ text ("ログイン")
        ]