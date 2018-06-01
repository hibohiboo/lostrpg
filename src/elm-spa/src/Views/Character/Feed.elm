module Views.Character.Feed exposing (FeedSource, Model, Msg,  globalFeed, init, update, viewArticles, viewFeedSources)

import Data.Article as Article exposing (Article, Tag)
import Data.Character.Feed exposing (Feed)
import Data.AuthToken exposing (AuthToken)
import Data.Session exposing (Session)
import Data.User exposing (Username)
import Dom.Scroll
import Html exposing (..)
import Html.Attributes exposing (attribute, class, classList, href, id, placeholder, src)
import Html.Events exposing (onClick)
import Http
import Request.Character
import SelectList exposing (Position(..), SelectList)
import Task exposing (Task)
import Util exposing ((=>), onClickStopPropagation, pair, viewIf)
import Views.Article
import Views.Errors as Errors
import Views.Page exposing (bodyId)
import Views.Spinner exposing (spinner)
import Views.Character

-- MODEL --


type Model
    = Model InternalModel


{-| This should not be exposed! We want to benefit from the guarantee that only
this module can create or alter this model. This way if it ever ends up in
a surprising state, we know exactly where to look: this file.
-}
type alias InternalModel =
    { errors : List String
    , feed : Feed
    , feedSources : SelectList FeedSource
    , activePage : Int
    , isLoading : Bool
    }


init : Session -> SelectList FeedSource -> Task Http.Error Model
init session feedSources =
    let
        source =
            SelectList.selected feedSources

        toModel ( activePage, feed ) =
            Model
                { errors = []
                , activePage = activePage
                , feed = feed
                , feedSources = feedSources
                , isLoading = False
                }
    in
    source
        |> fetch (Maybe.map .token session.user) 1
        |> Task.map toModel



-- VIEW --


viewArticles : Model -> List (Html Msg)
viewArticles (Model { activePage, feed, feedSources }) =
    List.map Views.Character.view feed.characters
        ++ [ pagination activePage feed (SelectList.selected feedSources) ]


viewFeedSources : Model -> Html Msg
viewFeedSources (Model { feedSources, isLoading, errors }) =
    ul [ class "nav nav-pills outline-active" ] <|
        SelectList.toList (SelectList.mapBy viewFeedSource feedSources)
            ++ [ Errors.view DismissErrors errors, viewIf isLoading spinner ]


viewFeedSource : Position -> FeedSource -> Html Msg
viewFeedSource position source =
    li [ class "nav-item" ]
        [ a
            [ classList [ "nav-link" => True, "active" => position == Selected ]
            , href "javascript:void(0);"
            , onClick (SelectFeedSource source)
            ]
            [ text (sourceName source) ]
        ]


sourceName : FeedSource -> String
sourceName source =
    case source of
        GlobalFeed ->
            "Global Feed"

limit : FeedSource -> Int
limit feedSource =
    case feedSource of
        GlobalFeed ->
            10


pagination : Int -> Feed -> FeedSource -> Html Msg
pagination activePage feed feedSource =
    let
        charactersPerPage =
            limit feedSource

        totalPages =
            ceiling (toFloat feed.charactersCount / toFloat charactersPerPage)
    in
    if totalPages > 1 then
        List.range 1 totalPages
            |> List.map (\page -> pageLink page (page == activePage))
            |> ul [ class "pagination" ]
    else
        Html.text ""


pageLink : Int -> Bool -> Html Msg
pageLink page isActive =
    li [ classList [ "page-item" => True, "active" => isActive ] ]
        [ a
            [ class "page-link"
            , href "javascript:void(0);"
            , onClick (SelectPage page)
            ]
            [ text (toString page) ]
        ]



-- UPDATE --


type Msg
    = DismissErrors
    | SelectFeedSource FeedSource
    | FeedLoadCompleted FeedSource (Result Http.Error ( Int, Feed ))
    | SelectPage Int


update : Session -> Msg -> Model -> ( Model, Cmd Msg )
update session msg (Model internalModel) =
    updateInternal session msg internalModel
        |> Tuple.mapFirst Model


updateInternal : Session -> Msg -> InternalModel -> ( InternalModel, Cmd Msg )
updateInternal session msg model =
    case msg of
        DismissErrors ->
            { model | errors = [] } => Cmd.none

        SelectFeedSource source ->
            source
                |> fetch (Maybe.map .token session.user) 1
                |> Task.attempt (FeedLoadCompleted source)
                |> pair { model | isLoading = True }

        FeedLoadCompleted source (Ok ( activePage, feed )) ->
            { model
                | feed = feed
                , feedSources = selectFeedSource source model.feedSources
                , activePage = activePage
                , isLoading = False
            }
                => Cmd.none

        FeedLoadCompleted _ (Err error) ->
            { model
                | errors = model.errors ++ [ "Server error while trying to load feed" ]
                , isLoading = False
            }
                => Cmd.none

        SelectPage page ->
            let
                source =
                    SelectList.selected model.feedSources
            in
            source
                |> fetch (Maybe.map .token session.user) page
                |> Task.andThen (\feed -> Task.map (\_ -> feed) scrollToTop)
                |> Task.attempt (FeedLoadCompleted source)
                |> pair model


scrollToTop : Task x ()
scrollToTop =
    Dom.Scroll.toTop bodyId
        -- It's not worth showing the user anything special if scrolling fails.
        -- If anything, we'd log this to an error recording service.
        |> Task.onError (\_ -> Task.succeed ())


fetch : Maybe AuthToken -> Int -> FeedSource -> Task Http.Error ( Int, Feed )
fetch token page feedSource =
    let
        defaultListConfig =
            Request.Character.defaultListConfig

        articlesPerPage =
            limit feedSource

        offset =
            (page - 1) * articlesPerPage

        listConfig =
            { defaultListConfig | offset = offset, limit = articlesPerPage }

        task =
            case feedSource of

                GlobalFeed ->
                    Request.Character.list listConfig token
                        |> Http.toTask
    in
    task
        |> Task.map (\feed -> ( page, feed ))


replaceArticle : Article a -> Article a -> Article a
replaceArticle newArticle oldArticle =
    if newArticle.slug == oldArticle.slug then
        newArticle
    else
        oldArticle


selectFeedSource : FeedSource -> SelectList FeedSource -> SelectList FeedSource
selectFeedSource source sources =
    let
        withoutTags =
            sources
                |> SelectList.toList
                |> List.filter (not << isTagFeed)

        newSources =
            case source of
                GlobalFeed ->
                    withoutTags
    in
    case newSources of
        [] ->
            -- This should never happen. If we had a logging service set up,
            -- we would definitely want to report if it somehow did happen!
            sources

        first :: rest ->
            SelectList.fromLists [] first rest
                |> SelectList.select ((==) source)


isTagFeed : FeedSource -> Bool
isTagFeed source =
            False



-- FEEDSOURCE --


type FeedSource
    = GlobalFeed


globalFeed : FeedSource
globalFeed =
    GlobalFeed
