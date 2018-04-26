module Main exposing (..)

import Html exposing (Html, div, text, program)
import Models exposing (Model)
import Msgs exposing (Msg)
import View exposing (view)
import Update exposing (update)

init : ( Model, Cmd Msg )
init =
    ( "Hello", Cmd.none )

-- サブスクリプション(購読)
subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

-- MAIN
main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }