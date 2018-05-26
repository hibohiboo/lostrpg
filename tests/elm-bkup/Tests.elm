module Tests exposing (..)

-- Test target modules

import Login.Models exposing (..)
import Test exposing (..)
import TestExp exposing (..)


all : Test
all =
    describe "users"
        [ "empty user"
            => newLoginUser
            === { uid = ""
                , displayName = ""
                , twitterId = ""
                , twitterName = "unknown"
                }
        ]
