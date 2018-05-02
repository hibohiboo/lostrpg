module Models exposing (..)

import Characters.Models exposing (Character)


type alias Model =
    { characters : List Character
    }


initialModel : Model
initialModel =
    { characters = [ Character "1" "Sam" ]
    }