module Characters.Update exposing(..)

import Characters.Messages exposing(Msg(..))
import Characters.Models exposing(Character)

update : Msg -> List Character -> (List Character, Cmd Msg)
update message characters = 
  case message of 
    NoOp -> 
      (characters, Cmd.none)