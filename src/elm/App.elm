port module App exposing (..)

import Characters.Commands exposing (fetchAll)
import Login.Subscriptions
import Messages exposing (Msg(..))
import Models exposing (Model, initialModel)
import Navigation exposing (Location)
import Routing exposing (Route)


init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            Routing.parseLocation location
    in
    ( initialModel currentRoute, Cmd.map CharactersMsg fetchAll )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.map LoginMsg Login.Subscriptions.subscriptions
