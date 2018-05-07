module Characters.Edit exposing (..)

import Characters.Messages exposing (..)
import Characters.Models exposing (..)
import Html exposing (..)
import Html.Attributes exposing (class, href, value)
import Html.Events exposing (onClick)


view : Character -> Html Msg
view model =
    div []
        [ nav model
        , form model
        ]


nav : Character -> Html Msg
nav model =
    div [ class "clearfix mb2 white bg-black p1" ]
        [ listBtn ]


form : Character -> Html Msg
form character =
    div [ class "m3" ]
        [ h1 [] [ text character.name ]
        , formLevel character
        ]


formLevel : Character -> Html Msg
formLevel character =
    div
        [ class "clearfix py1"
        ]
        [ div [ class "col col-5" ] [ text "Level" ]
        , div [ class "col col-7" ]
            [ span [ class "h2 bold" ] [ text (toString character.level) ]
            , btnLevelDecrease character
            , btnLevelIncrease character
            ]
        ]


btnLevelDecrease : Character -> Html Msg
btnLevelDecrease character =
    a [ class "btn ml1 h1", onClick (ChangeLevel character.id -1) ]
        [ i [ class "fa fa-minus-circle" ] [] ]


btnLevelIncrease : Character -> Html Msg
btnLevelIncrease character =
    a [ class "btn ml1 h1", onClick (ChangeLevel character.id 1) ]
        [ i [ class "fa fa-plus-circle" ] [] ]


listBtn : Html Msg
listBtn =
    button
        [ class "btn regular"
        , onClick ShowCharacters
        ]
        [ i [ class "fa fa-chevron-left mr1" ] [], text "List" ]
