module Characters.Update exposing (..)

import Characters.Commands exposing (save)
import Characters.Messages exposing (Msg(..))
import Characters.Models exposing (Character, CharacterId)
import Navigation


changeLevelCommands : CharacterId -> Int -> List Character -> List (Cmd Msg)
changeLevelCommands characterId howMuch characters =
    let
        cmdForCharacter existingCharacter =
            if existingCharacter.id == characterId then
                save { existingCharacter | level = existingCharacter.level + howMuch }
            else
                Cmd.none
    in
    List.map cmdForCharacter characters


updateCharacter : Character -> List Character -> List Character
updateCharacter updatedCharacter characters =
    let
        select existingCharacter =
            if existingCharacter.id == updatedCharacter.id then
                updatedCharacter
            else
                existingCharacter
    in
    List.map select characters


update : Msg -> List Character -> ( List Character, Cmd Msg )
update message characters =
    case message of
        OnFetchAll (Ok newCharacters) ->
            ( newCharacters, Cmd.none )

        OnFetchAll (Err error) ->
            ( characters, Cmd.none )

        ShowCharacters ->
            ( characters, Navigation.newUrl "#characters" )

        ShowCharacter id ->
            ( characters, Navigation.newUrl ("#characters/" ++ id) )

        ChangeLevel id howMuch ->
            ( characters, changeLevelCommands id howMuch characters |> Cmd.batch )

        OnSave (Ok updatedCharacter) ->
            ( updateCharacter updatedCharacter characters, Cmd.none )

        OnSave (Err error) ->
            ( characters, Cmd.none )
