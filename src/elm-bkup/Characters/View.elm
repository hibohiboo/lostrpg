module Characters.View exposing (..)

import Characters.Edit
import Characters.List
import Characters.Models exposing (CharacterId)
import Common.View exposing (notFoundView)
import Html exposing (Html, div, text)
import Messages exposing (Msg(..))
import Models exposing (Model)
import Routing exposing (Route(..))


page : Model -> Html Msg
page model =
    case model.route of
        CharactersRoute ->
            Html.map CharactersMsg (Characters.List.view model.characters)

        CharacterRoute id ->
            characterEditPage model id

        NotFoundRoute ->
            notFoundView


characterEditPage : Model -> CharacterId -> Html Msg
characterEditPage model characterId =
    let
        maybeCharacter =
            model.characters
                |> List.filter (\character -> character.id == characterId)
                |> List.head
    in
    case maybeCharacter of
        Just character ->
            Html.map CharactersMsg (Characters.Edit.view character)

        Nothing ->
            notFoundView