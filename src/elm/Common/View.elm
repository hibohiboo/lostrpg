module Common.View exposing (..)

import Html exposing (Html, div, text)


notFoundView : Html msg
notFoundView =
    div []
        [ text "Not found"
        ]
