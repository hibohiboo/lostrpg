module Characters.Messages exposing (..)

import Http
import Characters.Models exposing (CharacterId, Character)


type Msg
    = OnFetchAll (Result Http.Error (List Character))
    | ShowCharacters
    | ShowCharacter CharacterId
    | ChangeLevel CharacterId Int
    | OnSave (Result Http.Error Character)