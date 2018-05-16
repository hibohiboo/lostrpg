module View exposing (..)

import Html exposing (Html, div, text)
import Messages exposing (Msg(..))
import Models exposing (Model)
import Characters.View exposing(..)
import Login.View exposing(..)

view : Model -> Html Msg
view model =
    div []
        [ 
          pageHead model,
          page model
        ]


