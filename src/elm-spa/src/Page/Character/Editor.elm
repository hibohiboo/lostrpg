module Page.Character.Editor exposing (Model, Msg, initEdit, initNew, update, view)

import Data.Character as Character exposing (Character)
import Data.Session exposing (Session)
import Data.User exposing (User)
import Html exposing (..)
import Html.Attributes exposing (attribute, class, defaultValue, disabled, href, id, placeholder, type_)
import Html.Events exposing (onInput, onSubmit)
import Http
import Page.Errored exposing (PageLoadError, pageLoadError)
import Request.Character
import Route
import Task exposing (Task)
import Util exposing ((=>), pair, viewIf)
import Validate exposing (Validator, ifBlank, validate)
import Views.Form as Form
import Views.Page as Page


-- MODEL --

type alias Model =
    { errors : List Error
    , editingCharacter : Maybe Character.Slug
    , name : String
    , isSaving : Bool
    }


initNew : Model
initNew =
    { errors = []
    , editingCharacter = Nothing
    , name = ""
    , isSaving = False
    }


initEdit : Session -> Character.Slug -> Task PageLoadError Model
initEdit session slug =
    let
        maybeAuthToken =
            session.user
                |> Maybe.map .token
    in
    Request.Character.get maybeAuthToken slug
        |> Http.toTask
        |> Task.mapError (\_ -> pageLoadError Page.Other "Character is currently unavailable.")
        |> Task.map
            (\character ->
                { errors = []
                , editingCharacter = Just slug
                , name = character.name
                , isSaving = False
                }
            )



-- VIEW --


view : Model -> Html Msg
view model =
    div [ class "editor-page" ]
        [ div [ class "container page" ]
            [ div [ class "row" ]
                [ div [ class "col-md-10 offset-md-1 col-xs-12" ]
                    [ Form.viewErrors model.errors
                    , viewForm model
                    ]
                ]
            ]
        ]


viewForm : Model -> Html Msg
viewForm model =
    let
        isEditing =
            model.editingCharacter /= Nothing

        saveButtonText =
            if isEditing then
                "キャラクター更新"
            else
                "キャラクター新規作成"
    in
    Html.form [ onSubmit Save ]
        [ fieldset []
            [ Form.input
                [ class "form-control-lg"
                , placeholder "Character Name"
                , onInput SetName
                , defaultValue model.name
                ]
                []
            , button [ class "btn btn-lg pull-xs-right btn-primary", disabled model.isSaving ]
                [ text saveButtonText ]
            ]
        ]



-- UPDATE --


type Msg
    = Save
    | SetName String
    | CreateCompleted (Result Http.Error Character)
    | EditCompleted (Result Http.Error Character)


update : User -> Msg -> Model -> ( Model, Cmd Msg )
update user msg model =
    -- let _ = Debug.log "このコード片は割とどこおいても大丈夫な気がする page update " msg in
    case msg of
        Save ->
            case validate modelValidator model of
                [] ->
                    case model.editingCharacter of
                        Nothing ->
                            -- let _ = Debug.log "このコード片は割とどこおいても大丈夫な気がする save " model in
                            user.token
                                |> Request.Character.create model
                                |> Http.send CreateCompleted
                                |> pair { model | errors = [], isSaving = True }

                        Just slug ->
                            user.token
                                |> Request.Character.update slug model
                                |> Http.send EditCompleted
                                |> pair { model | errors = [], isSaving = True }

                errors ->
                    { model | errors = errors } => Cmd.none

        SetName name ->
            { model | name = name } => Cmd.none

        CreateCompleted (Ok character) ->
            Route.Character character.slug
                |> Route.modifyUrl
                |> pair model

        CreateCompleted (Err error) ->
            { model
                | errors = model.errors ++ [ Form => "Server error while attempting to publish Character" ]
                , isSaving = False
            }
                => Cmd.none

        EditCompleted (Ok character) ->
            Route.Character character.slug
                |> Route.modifyUrl
                |> pair model

        EditCompleted (Err error) ->
            { model
                | errors = model.errors ++ [ Form => "Server error while attempting to save Character" ]
                , isSaving = False
            }
                => Cmd.none



-- VALIDATION --


type Field
    = Form
    | Name


type alias Error =
    ( Field, String )


modelValidator : Validator Error Model
modelValidator =
    Validate.all
        [ ifBlank .name (Name => "name can't be blank.")
        ]



-- INTERNAL --


redirectToCharacter : Character.Slug -> Cmd msg
redirectToCharacter =
    Route.modifyUrl << Route.Character
