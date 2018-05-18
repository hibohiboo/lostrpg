module Messages exposing (..)

import Characters.Messages
import Login.Messages
import Navigation exposing (Location)


type Msg
    = CharactersMsg Characters.Messages.Msg
    | LoginMsg Login.Messages.Msg
    | OnLocationChange Location
  