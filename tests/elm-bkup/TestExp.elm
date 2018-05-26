module TestExp exposing (..)

import Expect exposing (Expectation)
import Test exposing (Test)


(=>) : String -> (() -> Expectation) -> Test
(=>) =
    Test.test


(===) : a -> a -> () -> Expectation
(===) a b _ =
    Expect.equal a b



-- 結合優先順位


infixl 8 =>
