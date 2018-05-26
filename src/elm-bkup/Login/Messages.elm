module Login.Messages exposing (..)

import Http
import Login.Models exposing (..)


type Msg
    = Login
    | GetUid String
    | Logout
    | OnFetch (Result Http.Error Member)
