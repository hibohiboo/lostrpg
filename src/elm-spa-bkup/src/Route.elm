module Route exposing (Route(..), fromLocation, href, modifyUrl)

-- import Data.Article as Article
import Data.User as User exposing (Username)
import Html exposing (Attribute)
import Html.Attributes as Attr
import Navigation exposing (Location)
import UrlParser as Url exposing ((</>), Parser, oneOf, parseHash, s, string)
import Data.Character as Character

-- ROUTING --


type Route
    = Home
    | Root
    | Login
    | Logout
    | Register
    | Settings
    -- | Article Article.Slug
    | Profile Username
    | NewCharacter
    -- | EditArticle Article.Slug
    | Character Character.Slug


route : Parser (Route -> a) a
route =
    oneOf
        [ Url.map Home (s "")
        , Url.map Login (s "login")
        , Url.map Logout (s "logout")
        , Url.map Settings (s "settings")
        , Url.map Profile (s "profile" </> User.usernameParser)
        , Url.map Register (s "register")
        -- , Url.map Article (s "article" </> Article.slugParser)
        , Url.map NewCharacter (s "editor")
        -- , Url.map EditArticle (s "editor" </> Article.slugParser)

        ]



-- INTERNAL --


routeToString : Route -> String
routeToString page =
    let
        pieces =
            case page of
                Home ->
                    []

                Root ->
                    []

                Login ->
                    [ "login" ]

                Logout ->
                    [ "logout" ]

                Register ->
                    [ "register" ]

                Settings ->
                    [ "settings" ]

                -- Article slug ->
                --     [ "article", Article.slugToString slug ]

                Profile username ->
                    [ "profile", User.usernameToString username ]

                NewCharacter ->
                    [ "editor" ]

                -- EditArticle slug ->
                --     [ "editor", Article.slugToString slug ]
                Character slug ->
                    ["editor"]
    in
    "#/" ++ String.join "/" pieces



-- PUBLIC HELPERS --


href : Route -> Attribute msg
href route =
    Attr.href (routeToString route)


modifyUrl : Route -> Cmd msg
modifyUrl =
    routeToString >> Navigation.modifyUrl


fromLocation : Location -> Maybe Route
fromLocation location =
    if String.isEmpty location.hash then
        Just Root
    else
        parseHash route location