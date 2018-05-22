module Login.Models exposing (..)


type alias Uid =
    String


type alias LoginUser =
    { uid : Uid
    , displayName : String
    , twitterId : String
    , twitterName : String
    }


newLoginUser : LoginUser
newLoginUser =
    { uid = ""
    , displayName = ""
    , twitterId = ""
    , twitterName = "unknown"
    }
