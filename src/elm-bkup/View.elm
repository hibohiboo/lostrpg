module View exposing (..)

import Characters.View exposing (..)
import Html exposing (Html, div, text)
import Login.View exposing (..)
import Messages exposing (Msg(..))
import Models exposing (Model)


view : Model -> Html Msg
view model =
    div []
        [ pageHead model
        , page model
        ]
