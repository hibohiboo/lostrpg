module Login.View exposing (..)

import Html exposing (Html, a, div, text)
import Html.Attributes exposing (class, href, value)
import Html.Events exposing (onClick)
import Login.Messages exposing (Msg(..))
import Login.Models exposing (LoginUser)
import Messages exposing (Msg(..))
import Models exposing (Model)


pageHead : Model -> Html Messages.Msg
pageHead model =
    let
        user =
            model.loginUser
    in
    case user.uid of
        "" ->
            Html.map LoginMsg loginButton

        _ ->
            Html.map LoginMsg (logoutButton user)


logoutButton : LoginUser -> Html Login.Messages.Msg
logoutButton user =
    div []
        [ a [class "btn ml1 h1", onClick Logout]
         [text "ログアウト：" ],
          text user.uid
        ]


loginButton : Html Login.Messages.Msg
loginButton =
    div []
        [ a [ class "btn ml1 h1", onClick Login ]
            [ text "ログイン" ]
        ]

