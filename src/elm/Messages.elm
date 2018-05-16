module Messages exposing (..)

import Characters.Messages
import Navigation exposing (Location)
import Login.Messages

type Msg
    = CharactersMsg Characters.Messages.Msg
    | LoginMsg Login.Messages.Msg
    | OnLocationChange Location
    | GetHello String
