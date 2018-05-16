port module Firebase.Firebase exposing (..)


setUpAuthListener : Cmd msg
setUpAuthListener =
    sendToFirebase ListenAuthState


sendToFirebase : FBCommand -> Cmd msg
sendToFirebase cmd =
    case cmd of
        StartNotifications userId ->
            elmToFb <| { message = "StartNotifications", payload = E.string userId }

        StopNotifications userId ->
            elmToFb <| { message = "StopNotifications", payload = E.string userId }

        _ ->
            elmToFb <| { message = toString cmd, payload = E.null }


type FBCommand
    = ListenAuthState
