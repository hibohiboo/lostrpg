module Main exposing (..)

import Navigation exposing (Location)
import Messages exposing (Msg(..))
import Models exposing (Model, initialModel)
import App exposing (init, subscriptions)
import Update exposing (update)
import View exposing (view)

main : Program Never Model Msg
main =
    Navigation.program OnLocationChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }

