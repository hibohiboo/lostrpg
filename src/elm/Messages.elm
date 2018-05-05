module Messages exposing (..)

import Navigation exposing (Location)
import Characters.Messages


type Msg
    = CharactersMsg Characters.Messages.Msg
    | OnLocationChange Location
    | GetHello String