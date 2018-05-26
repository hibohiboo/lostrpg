module Routing exposing (..)

import Characters.Models exposing (CharacterId)
import Navigation exposing (Location)
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
    case parseHash matchers location of
        Just route ->
            route

        Nothing ->
            NotFoundRoute
