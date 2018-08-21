module Main exposing (..)

import Json.Decode as Decode exposing (Value, Decoder, decodeString, field, string)
import Html exposing (..)
import Html.Attributes exposing (..)
import Data.Session exposing (Session)
import Data.User exposing (User, decoder, decodeUserFromJson, usernameToString)


-- モデル


type alias Model =
    { session : Session }


init : Value -> ( Model, Cmd Msg )
init val =
    ( initialModel val, Cmd.none )


initialModel : Value -> Model
initialModel val =
    { session = { user = decodeUserFromJson val } }



-- メッセージ


type Msg
    = NoOp



-- ビュー


view : Model -> Html Msg
view model =
    loginView model


loginView : Model -> Html Msg
loginView model =
    let
        user =
            model.session.user
    in
        case user of
            Nothing ->
                div []
                    [ a [ href "./login.html" ]
                        [ text "ログイン" ]
                    ]

            Just user ->
                Html.text ("Hello " ++ usernameToString user.username)



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
