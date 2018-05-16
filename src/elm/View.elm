module View exposing (..)

import Html exposing (Html, div, text)
import Messages exposing (Msg(..))
import Models exposing (Model)
import Characters.Edit
import Characters.List
import Characters.Models exposing (CharacterId)
import Routing exposing (Route(..))
import Characters.View exposing(..)
import Login.View exposing(..)

view : Model -> Html Msg
view model =
    div []
        [ 
          pageHead model ,
          page model
        ]


