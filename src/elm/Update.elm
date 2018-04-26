module Update exposing (..)

import Models exposing (Model)
import Msgs exposing (..)

-- 更新
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

