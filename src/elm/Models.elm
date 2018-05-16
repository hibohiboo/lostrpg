module Models exposing (..)

import Characters.Models exposing (Character)
import Login.Models exposing(..)
import Routing


type alias Model =
    { characters : List Character
    , route : Routing.Route
    , test : String
    , loginUser : LoginUser
    }


initialModel : Routing.Route -> Model
initialModel route =
    { characters = []
    , route = route
    , test = ""
    , loginUser = newLoginUser
    }
