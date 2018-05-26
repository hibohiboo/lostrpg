module Login.Commands exposing (..)

import Login.Messages exposing (..)
import Http
import Json.Decode as Decode exposing (field)
import Json.Encode as Encode
import Login.Models exposing (..)

fetch : String -> Cmd Msg
fetch uid =
    Http.get  (fetchUrl uid) memberDecoder
        |> Http.send OnFetch


fetchUrl : String -> String
fetchUrl uid =
    "https://us-central1-lostrpg-751c1.cloudfunctions.net/fetchMember/?uid=" ++ uid

memberDecoder : Decode.Decoder Member
memberDecoder =
    Decode.map3 Member
        (field "uid" Decode.string)
        (field "twitterId" Decode.string)
        (field "twitterName" Decode.string)