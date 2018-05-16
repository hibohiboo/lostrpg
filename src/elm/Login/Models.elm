module Login.Models exposing (..)


type alias Uid =
    String


type alias LoginUser =
    { uid : Uid
    , twitterId : String
    , twitterName : String
    }


newLoginUser : LoginUser
newLoginUser =
    { uid = ""
    , twitterId = ""
    , twitterName = "unknown"
    }
