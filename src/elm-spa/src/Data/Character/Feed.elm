module Data.Character.Feed exposing (Feed, decoder)

import Data.Character as Character exposing (Character)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (decode, required)


type alias Feed =
    { characters : List Character 
    , charactersCount : Int
    }



-- SERIALIZATION --


decoder : Decoder Feed
decoder =
    decode Feed
        |> required "characters" (Decode.list Character.decoder)
        |> required "charactersCount" Decode.int
