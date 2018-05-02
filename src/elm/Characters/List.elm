module Characters.List exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class)
import Characters.Messages exposing (..)
import Characters.Models exposing (Player)

view : List Character -> Html Msg
view characters =
    div []
        [ nav characters
        , list characters
        ]

