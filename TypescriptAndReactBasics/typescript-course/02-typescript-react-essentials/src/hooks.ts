import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";

import type { RootState , AppDispatch} from "./store"


export const useAppDispatch:() => AppDispatch = useDispatch ; 

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector ;

console.log("3) AAAAAAAAAAAAAAAAA BBBBBBBBBBBBB CCCCCCCCCC ");



// THE ABOVE IS KIND OF BOILER PLATE 
// Yes, it is necessary to write the type keyword when you are importing types
//  in TypeScript. The import type syntax ensures that the imported items are used only for
//  type annotations and not as actual values at runtime, which helps with tree-shaking and 
// reducing the final bundle size.