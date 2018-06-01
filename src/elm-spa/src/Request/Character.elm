module Request.Character
    exposing
        ( FeedConfig
        , ListConfig
        , defaultFeedConfig
        , defaultListConfig
        , feed
        , list
        )

import Data.Character as Character exposing (Character)
import Data.Character.Feed as Feed exposing (Feed)
import Data.AuthToken exposing (AuthToken, withAuthorization)
import Data.User as User exposing (Username)
import Http
import HttpBuilder exposing (RequestBuilder, withBody, withExpect, withQueryParams)
import Json.Decode as Decode
import Json.Encode as Encode
import Request.Helpers exposing (apiUrl)
import Util exposing ((=>))


-- SINGLE --


-- LIST --


type alias ListConfig =
    { 
    limit : Int
    , offset : Int
    }


defaultListConfig : ListConfig
defaultListConfig =
    {
    limit = 20
    , offset = 0
    }


list : ListConfig -> Maybe AuthToken -> Http.Request Feed
list config maybeToken =
    [ "limit" => Just (toString config.limit)
    , "offset" => Just (toString config.offset)
    ]
        |> List.filterMap maybeVal
        |> buildFromQueryParams "/fetchCharacters"
        |> withAuthorization maybeToken
        |> HttpBuilder.toRequest



-- FEED --


type alias FeedConfig =
    { limit : Int
    , offset : Int
    }


defaultFeedConfig : FeedConfig
defaultFeedConfig =
    { limit = 10
    , offset = 0
    }


feed : FeedConfig -> AuthToken -> Http.Request Feed
feed config token =
    [ "limit" => Just (toString config.limit)
    , "offset" => Just (toString config.offset)
    ]
        |> List.filterMap maybeVal
        |> buildFromQueryParams "/fetchCharacters"
        |> withAuthorization (Just token)
        |> HttpBuilder.toRequest

-- HELPERS --


maybeVal : ( a, Maybe b ) -> Maybe ( a, b )
maybeVal ( key, value ) =
    case value of
        Nothing ->
            Nothing

        Just val ->
            Just (key => val)


buildFromQueryParams : String -> List ( String, String ) -> RequestBuilder Feed
buildFromQueryParams url queryParams =
    url
        |> apiUrl
        |> HttpBuilder.get
        |> withExpect (Http.expectJson Feed.decoder)
        |> withQueryParams queryParams
