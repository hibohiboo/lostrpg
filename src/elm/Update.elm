module Update exposing (..)

import Messages exposing (Msg(..))
import Models exposing (Model)
import Characters.Update


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        CharactersMsg subMsg ->
            let
                ( updatedCharacters, cmd ) =
                    Characters.Update.update subMsg model.characters
            in
                ( { model | characters = updatedCharacters }, Cmd.map CharactersMsg cmd )