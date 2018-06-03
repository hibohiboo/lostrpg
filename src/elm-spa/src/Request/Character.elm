module Request.Character
    exposing
        ( FeedConfig
        , ListConfig
        , defaultFeedConfig
        , defaultListConfig
        , feed
        , list
        , get
        , create
        , update
        )

import Data.Character as Character exposing (Character, slugToString)
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

get : Maybe AuthToken -> Character.Slug -> Http.Request Character
get maybeToken slug =
    let
        expect =
            Character.decoder
                |> Decode.field "character"
                |> Http.expectJson
    in
    apiUrl ("/character/" ++ Character.slugToString slug)
        |> HttpBuilder.get
        |> HttpBuilder.withExpect expect
        |> withAuthorization maybeToken
        |> HttpBuilder.toRequest

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
        |> buildFromQueryParams "/characters"
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
        |> buildFromQueryParams "/characters"
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


-- CREATE --


type alias CreateConfig record =
    { record
        | name : String
    }


type alias EditConfig record =
    { record
        | name : String
    }


create : CreateConfig record -> AuthToken -> Http.Request Character
create config token =
    let
        expect =
            Character.decoder
                |> Decode.field "character"
                |> Http.expectJson

        character =
            Encode.object
                [ "name" => Encode.string config.name
                ]

        body =
            Encode.object [ "character" => character ]
                |> Http.jsonBody
    in
    apiUrl "/characters"
        |> HttpBuilder.post
        |> withAuthorization (Just token)
        |> withBody body
        |> withExpect expect
        |> HttpBuilder.toRequest


update : Character.Slug -> EditConfig record -> AuthToken -> Http.Request Character
update slug config token =
    let
        expect =
            Character.decoder
                |> Decode.field "character"
                |> Http.expectJson

        character =
            Encode.object
                [ "name" => Encode.string config.name
                ]

        body =
            Encode.object [ "character" => character ]
                |> Http.jsonBody
    in
    apiUrl ("/characters/" ++ slugToString slug)
        |> HttpBuilder.put
        |> withAuthorization (Just token)
        |> withBody body
        |> withExpect expect
        |> HttpBuilder.toRequest
