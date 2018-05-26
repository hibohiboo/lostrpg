module Login.Subscriptions exposing (..)

import Login.Messages exposing (..)
import Login.Ports exposing (jsLogin)


subscriptions : Sub Msg
subscriptions =
    Sub.batch
        [ jsLogin GetUid
        ]
