module Messages exposing (..)

import Characters.Messages
import Navigation exposing (Location)


type Msg
    = CharactersMsg Characters.Messages.Msg
    | OnLocationChange Location
    | GetHello String
