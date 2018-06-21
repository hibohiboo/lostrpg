module Views.Character exposing (view)

import Html exposing (..)
import Html.Attributes exposing (attribute, class, classList, href, id, placeholder, src)
import Route exposing (Route)
import Views.Author
import Data.Character exposing (Character)

-- VIEWS --

view : Character -> Html msg
view  char =
    -- let
    --     author =
    --         char.author
    -- in
    div [ class "article-preview" ]
        [ div [ class "article-meta" ]
            [
            --    a [ Route.href (Route.Profile author.username) ]
            --     [ img [ UserPhoto.src author.image ] [] ]
            -- , div [ class "info" ]
            --     [ Views.Author.view author.username
            --     , viewTimestamp article
            --     ]
            ]
        , a [ class "preview-link", Route.href (Route.Character char.slug) ]
            [ h1 [] [ text char.name ]
--            , p [] [ text article.description ]
            , span [] [ text "Read more..." ]
            ]
        ]



-- INTERNAL --


-- formattedTimestamp : Character a -> String
-- formattedTimestamp article =
--     Date.Format.format "%B %e, %Y" article.createdAt
