module Characters.Models exposing (..)


type alias CharacterId =
    String


type alias Character =
    { id : CharacterId
    , name : String
    , level : Int
    }


new : Character
new =
    { id = "0"
    , name = ""
    , level = 1
    }