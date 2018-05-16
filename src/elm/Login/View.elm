module Login.View exposing (..)

import Html exposing (Html, div, text, a)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class, href, value)
import Messages exposing (Msg(..))
import Login.Messages exposing (Msg(..))
import Models exposing (Model)
import Login.Models exposing(LoginUser)

pageHead : Model -> Html Messages.Msg
pageHead model = 
    let user = model.loginUser
    in
    case user.uid of
    "" -> Html.map LoginMsg (loginButton)
    _ -> logoutButton user

logoutButton : LoginUser -> Html Messages.Msg
logoutButton user =
    div []
        [ text ("" ++ user.twitterName)
        ]
  
loginButton : Html Login.Messages.Msg
loginButton =
    div []
        [ a [class "btn ml1 h1",  onClick (Login )]
        [ text ("ログイン") ]
        ]