module Models exposing (..)

import Characters.Models exposing (Character)
import Routing


type alias Model =
    { characters : List Character
    , route : Routing.Route
    }


initialModel : Routing.Route -> Model
initialModel route =
    { characters = []
    , route = route
    }