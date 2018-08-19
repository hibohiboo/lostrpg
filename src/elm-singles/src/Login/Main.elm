module Main exposing (..)

{-| The login page.
-}

import Data.Session exposing (Session)
import Data.User exposing (User)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Http
import Json.Decode as Decode exposing (Decoder, decodeString, field, string)
import Json.Decode.Pipeline exposing (decode, optional)
import Ports exposing (redirectTwitter)
import Util exposing ((=>))


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )



-- MODEL --


type alias Model =
    {}


initialModel : Model
initialModel =
    {}



-- VIEW --


view : Model -> Html Msg
view model =
    div [ class "auth-page" ]
        [ div [ class "container page" ]
            [ div [ class "row" ]
                [ twitterLoginButton
                ]
            ]
        ]


twitterLoginButton : Html Msg
twitterLoginButton =
    div []
        [ button [ class "btn ml1 h1", onClick TwitterLogin ]
            [ text "twitterでログイン" ]
        ]


viewSignIn : Model -> Html Msg
viewSignIn model =
    div [ class "col-md-6 offset-md-3 col-xs-12" ]
        [ h1 [ class "text-xs-center" ] [ text "Sign in" ]
        ]



-- UPDATE --


type Msg
    = TwitterLogin
    | NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        TwitterLogin ->
            model
                => Cmd.batch [ redirectTwitter () ]

        NoOp ->
            ( model, Cmd.none )



-- サブスクリプション(購読)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
