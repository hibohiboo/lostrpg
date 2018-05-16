port module App exposing (..)

import Characters.Commands exposing (fetchAll)
import Messages exposing (Msg(..))
import Models exposing (Model, initialModel)
import Navigation exposing (Location)
import Routing exposing (Route)
import Login.Ports exposing (..)

init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            Routing.parseLocation location
    in
    ( initialModel currentRoute, Cmd.map CharactersMsg fetchAll )

-- subscriptions : Model -> Sub Msg
-- subscriptions model =
--     Sub.none


port hello : String -> Cmd msg


port jsHello : (String -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
    [    jsHello GetHello
    ]
