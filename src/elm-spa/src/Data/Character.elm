module Data.Character
    exposing
        ( Character
        , Slug
        , decoder
        , slugToString
        )

import Date exposing (Date)
import Html exposing (Attribute, Html)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Extra
import Json.Decode.Pipeline exposing (custom, decode, hardcoded, required)
import UrlParser


type alias Character =
    { name : String
    , slug: Slug
    }



-- SERIALIZATION --

decoder : Decoder Character
decoder =
    baseCharacterDecoder

baseCharacterDecoder : Decoder Character
baseCharacterDecoder =
    decode Character
        |> required "name" Decode.string
        |> required "slug" (Decode.map Slug Decode.string)

-- IDENTIFIERS --
type Slug
    = Slug String


slugParser : UrlParser.Parser (Slug -> a) a
slugParser =
    UrlParser.custom "SLUG" (Ok << Slug)


slugToString : Slug -> String
slugToString (Slug slug) =
    slug

-- VIEW --


view : Session -> Model -> Html Msg
view session model =
    let
        character =
            model.character
    in
    div [ class "article-page" ]
        [ text character.name ]