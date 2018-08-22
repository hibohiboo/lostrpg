module Data.User exposing (User, Username, decoder, encode, usernameDecoder, usernameParser, usernameToHtml, usernameToString, decodeUserFromJson)

import Data.AuthToken as AuthToken exposing (AuthToken)
import Data.UserPhoto as UserPhoto exposing (UserPhoto)
import Html exposing (Html)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (decode, required)
import Json.Encode as Encode exposing (Value)
import Json.Encode.Extra as EncodeExtra
import UrlParser
import Util exposing ((=>))


type alias User =
    { email : String
    , token : AuthToken
    , username : Username
    , bio : Maybe String
    , image : UserPhoto
    , createdAt : String
    , updatedAt : String
    , uid : String
    , twitterId : String
    , twitterName : String
    }



-- SERIALIZATION --


decoder : Decoder User
decoder =
    decode User
        |> required "email" Decode.string
        |> required "token" AuthToken.decoder
        |> required "username" usernameDecoder
        |> required "bio" (Decode.nullable Decode.string)
        |> required "image" UserPhoto.decoder
        |> required "createdAt" Decode.string
        |> required "updatedAt" Decode.string
        |> required "uid" Decode.string
        |> required "twitterId" Decode.string
        |> required "twitterName" Decode.string


encode : User -> Value
encode user =
    Encode.object
        [ "email" => Encode.string user.email
        , "token" => AuthToken.encode user.token
        , "username" => encodeUsername user.username
        , "bio" => EncodeExtra.maybe Encode.string user.bio
        , "image" => UserPhoto.encode user.image
        , "createdAt" => Encode.string user.createdAt
        , "updatedAt" => Encode.string user.updatedAt
        ]



-- IDENTIFIERS --


type Username
    = Username String


usernameToString : Username -> String
usernameToString (Username username) =
    -- let _ = Debug.log "このコード片は割とどこおいても大丈夫な気がする" username in
    username


usernameParser : UrlParser.Parser (Username -> a) a
usernameParser =
    UrlParser.custom "USERNAME" (Ok << Username)


usernameDecoder : Decoder Username
usernameDecoder =
    Decode.map Username Decode.string


encodeUsername : Username -> Value
encodeUsername (Username username) =
    Encode.string username


usernameToHtml : Username -> Html msg
usernameToHtml (Username username) =
    Html.text username

decodeUserFromJson : Value -> Maybe User
decodeUserFromJson json =
                        let
                            _ =
                                Debug.log "decodeUser" json
                                in
    json
        |> Decode.decodeValue Decode.string
        |> Result.toMaybe
        |> Maybe.andThen (Decode.decodeString decoder >> Result.toMaybe)