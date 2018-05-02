module Characters.Commands exposing (..)

import Http
import Json.Decode as Decode exposing (field)
import Json.Encode as Encode
import Characters.Messages exposing (..)
import Characters.Models exposing (CharacterId, Character)


fetchAll : Cmd Msg
fetchAll =
    Http.get fetchAllUrl collectionDecoder
        |> Http.send OnFetchAll


fetchAllUrl : String
fetchAllUrl =
    "https://us-central1-lostrpg-751c1.cloudfunctions.net/fetchCharacers"


saveUrl : CharacterId -> String
saveUrl characterId =
    "http://192.168.50.10:4000/characters/" ++ characterId


saveRequest : Character -> Http.Request Character
saveRequest character =
    Http.request
        { body = memberEncoded character |> Http.jsonBody
        , expect = Http.expectJson memberDecoder
        , headers = []
        , method = "PATCH"
        , timeout = Nothing
        , url = saveUrl character.id
        , withCredentials = False
        }


save : Character -> Cmd Msg
save character =
    saveRequest character
        |> Http.send OnSave



-- DECODERS


collectionDecoder : Decode.Decoder (List Character)
collectionDecoder =
    Decode.list memberDecoder


memberDecoder : Decode.Decoder Character
memberDecoder =
    Decode.map3 Character
        (field "id" Decode.string)
        (field "name" Decode.string)
        (field "level" Decode.int)


memberEncoded : Character -> Encode.Value
memberEncoded character =
    let
        list =
            [ ( "id", Encode.string character.id )
            , ( "name", Encode.string character.name )
            , ( "level", Encode.int character.level )
            ]
    in
        list
            |> Encode.object