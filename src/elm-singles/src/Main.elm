module Main exposing (..)

import Json.Decode as Decode exposing (Value, Decoder, decodeString, field, string)
import Html exposing (..)
import Html.Attributes exposing (..)
import Data.Session exposing (Session)
import Data.User exposing (User, decoder, decodeUserFromJson, usernameToString)
import Util exposing ((=>))
import Html.Events exposing (onClick)
import Ports exposing (storeSession)

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
    | Logout



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
                div []
                    [ Html.text ("Hello " ++ usernameToString user.username)
                    , button [ onClick Logout ] [ text "Logout" ]
                    ]



-- 更新


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        Logout ->
            let
                session =
                    model.session
            in
                { model | session = { session | user = Nothing } } => Cmd.batch [ Ports.storeSession Nothing ]



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
