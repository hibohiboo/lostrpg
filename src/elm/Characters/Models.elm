module Characters.Models exposing (..)

type alias CharacterId = 
  String

type alias Character =
  {
    id : CharacterId
  , name : String
  }

new : Character
new = 
  {
    id = "0"
  , name = ""
  }