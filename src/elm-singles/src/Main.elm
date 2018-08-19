module Main exposing (..)

import Json.Decode as Decode exposing (Value, Decoder, decodeString, field, string)
import Html exposing (..)
import Html.Attributes exposing (..)


-- モデル


type alias Model =
    String


init : Value -> ( Model, Cmd Msg )
init val =
    ( "Hello", Cmd.none )



-- メッセージ


type Msg
    = NoOp



-- ビュー


view : Model -> Html Msg
view model =
    div []
        [ a [ href "./login.html" ]
            [ text "ログイン" ]
        ]



-- 更新


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- サブスクリプション(購読)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- MAIN


main : Program Value Model Msg
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
