module View exposing (..)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class, href)
import Models exposing (Model)
import Msgs exposing (Msg)

-- ビュー
view : Model -> Html Msg
view model =
    div [class "container"]
      [ 
        div[class "main"]
          [text model]
      ]
