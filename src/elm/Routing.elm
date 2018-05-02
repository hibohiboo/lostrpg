module Routing exposing (..)

import Navigation exposing (Location)
import Characters.Models exposing (CharacterId)
import UrlParser exposing (..)


type Route
    = CharactersRoute
    | CharacterRoute CharacterId
    | NotFoundRoute


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map CharactersRoute top
        , map CharacterRoute (s "characters" </> string)
        , map CharactersRoute (s "characters")
        ]


parseLocation : Location -> Route
parseLocation location =
    case (parseHash matchers location) of
        Just route ->
            route

        Nothing ->
            NotFoundRoute