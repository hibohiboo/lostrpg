module Login.Subscriptions exposing (..)

import Login.Ports exposing (jsLogin)
import Login.Messages exposing(..)

subscriptions :  Sub Msg
subscriptions  =
    Sub.batch
        [ jsLogin GetUid
        ]
