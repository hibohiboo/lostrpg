module Page.Home exposing (Model, Msg, init, update, view)

{-| The homepage. You can get here via either the / or /#/ routes.
-}

import Data.Session exposing (Session)
import Html exposing (..)
import Html.Attributes exposing (attribute, class, classList, href, id, placeholder)
import Html.Events exposing (onClick)
import Http
import Page.Errored exposing (PageLoadError, pageLoadError)
import SelectList exposing (SelectList)
import Task exposing (Task)
import Util exposing ((=>), onClickStopPropagation)
import Views.Page as Page
import Views.Character.Feed as Feed exposing (FeedSource, globalFeed)

-- MODEL --


type alias Model =
    { feed : Feed.Model
    }


init : Session -> Task PageLoadError Model
init session =
    let
        feedSources =
            SelectList.singleton globalFeed
            -- if session.user == Nothing then
            --     SelectList.singleton globalFeed
            -- else
            --     SelectList.fromLists [] yourFeed [ globalFeed ]

        -- loadTags =
        --     Request.Article.tags
        --         |> Http.toTask

        loadSources =
            -- Feed.init session feedSources
            Feed.init {session|user = Nothing} feedSources

        handleLoadError _ =
            pageLoadError Page.Home "Homepage is currently unavailable."
    in
    Task.map Model loadSources
        |> Task.mapError handleLoadError



-- VIEW --


view : Session -> Model -> Html Msg
view session model =
    div [ class "home-page" ]
        [ viewBanner
        , div [ class "container page" ]
            [ div [ class "row" ]
                [ div [ class "col-md-9" ] (viewFeed model.feed)
                ]
            ]
        ]


viewBanner : Html msg
viewBanner =
    div [ class "" ]
        [ div [ class "container" ]
            [ h1 [ class "" ] [ text "キャラクター一覧" ]
            , p [] [ text "A place to share your knowledge." ]
            ]
        ]


viewFeed : Feed.Model -> List (Html Msg)
viewFeed feed =
    div [ class "feed-toggle" ]
        [ Feed.viewFeedSources feed |> Html.map FeedMsg ]
        :: (Feed.viewArticles feed |> List.map (Html.map FeedMsg))



-- UPDATE --


type Msg
    = FeedMsg Feed.Msg

update : Session -> Msg -> Model -> ( Model, Cmd Msg )
update session msg model =
    case msg of
        FeedMsg subMsg ->
            let
                ( newFeed, subCmd ) =
                    Feed.update session subMsg model.feed
            in
            { model | feed = newFeed } => Cmd.map FeedMsg subCmd
