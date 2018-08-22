module Main exposing (..)

{-| The login page.
-}

import Data.Session exposing (Session)
import Data.User exposing (User, decoder, decodeUserFromJson)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Http
import Json.Decode as Decode exposing (Value, Decoder, decodeString, field, string)
import Json.Decode.Pipeline exposing (decode, optional)
import Ports exposing (redirectTwitter, redirectTop)
import Util exposing ((=>))


init : Value -> ( Model, Cmd Msg )
init val =
    let
        model =
            initialModel val

        cmd =
            case model.session.user of
                Nothing ->
                    Cmd.none

                Just user ->
                    Cmd.batch [ redirectTop () ]
    in
        let
            _ =
                Debug.log "このコード片は割とどこおいても大丈夫な気がする" model.session
        in
            ( model, cmd )



-- MODEL --


type alias Model =
    { session : Session
    , status : Status
    }


type Status
    = Blank
    | Display


initialModel : Value -> Model
initialModel val =
    let
        user =
            decodeUserFromJson val

        status =
            case user of
                Nothing ->
                    Display

                Just user ->
                    Blank
    in
        { session = { user = user }, status = status }



-- VIEW --


view : Model -> Html Msg
view model =
    case model.status of
        Display ->
            page

        Blank ->
            Html.text ""


page : Html Msg
page =
    div []
        [ h1 [] [ text "ログイン" ]
        , div [ class "auth-page" ]
            [ div [ class "container page" ]
                [ div [ class "row" ]
                    [ twitterLoginButton ]
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
    | SetUser (Maybe User)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        session =
            model.session
    in
        case msg of
            TwitterLogin ->
                model
                    => Cmd.batch [ redirectTwitter () ]

            NoOp ->
                case model.session.user of
                    Nothing ->
                        ( model, Cmd.none )

                    Just user ->
                        model
                            => Cmd.batch [ redirectTop () ]

            SetUser user ->
                { model | session = { session | user = user } }
                    => Cmd.batch [ redirectTop () ]



-- サブスクリプション(購読)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Sub.map SetUser sessionChange ]


sessionChange : Sub (Maybe User)
sessionChange =
    Ports.onSessionChange (decodeUserFromJson)


main : Program Value Model Msg
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
