module Login.Subscriptions exposing (..)

import Login.Ports exposing (jsLogin)
import Login.Messages exposing(..)
import Models exposing (Model)

subscriptions :  Sub Msg
subscriptions  =
    Sub.batch
        [ jsLogin GetUid
        ]
