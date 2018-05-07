module Characters.Messages exposing (..)

import Characters.Models exposing (Character, CharacterId)
import Http


type Msg
    = OnFetchAll (Result Http.Error (List Character))
    | ShowCharacters
    | ShowCharacter CharacterId
    | ChangeLevel CharacterId Int
    | OnSave (Result Http.Error Character)
