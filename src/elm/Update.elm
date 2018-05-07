module Update exposing (..)

import Characters.Update
import Messages exposing (Msg(..))
import Models exposing (Model)
import Routing exposing (parseLocation)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        CharactersMsg subMsg ->
            let
                ( updatedCharacters, cmd ) =
                    Characters.Update.update subMsg model.characters
            in
            ( { model | characters = updatedCharacters }, Cmd.map CharactersMsg cmd )

        OnLocationChange location ->
            let
                newRoute =
                    parseLocation location
            in
            ( { model | route = newRoute }, Cmd.none )

        GetHello hello ->
            ( { model | test = hello }, Cmd.none )
