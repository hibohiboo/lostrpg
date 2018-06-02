module Request.Helpers exposing (apiUrl)


apiUrl : String -> String
apiUrl str =
    "https://us-central1-lostrpg-751c1.cloudfunctions.net" ++ str
