module Characters.List exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class)
import Characters.Messages exposing (..)
import Characters.Models exposing (Character)

view : List Character -> Html Msg
view characters =
    div []
        [ nav characters
        , list characters
        ]

nav : List Character -> Html Msg
nav characters =
    div [ class "clearfix mb2 white bg-black" ]
        [ div [ class "left p2" ] [ text "Characters" ] ]


list : List Character -> Html Msg
list characters =
    div [ class "p2" ]
        [ table []
            [ thead []
                [ tr []
                    [ th [] [ text "Id" ]
                    , th [] [ text "Name" ]
                    , th [] [ text "Level" ]
                    , th [] [ text "Actions" ]
                    ]
                ]
            , tbody [] (List.map characterRow characters)
            ]
        ]


characterRow : Character -> Html Msg
characterRow character =
    tr []
        [ td [] [ text character.id ]
        , td [] [ text character.name ]
        , td []
            []
        ]
