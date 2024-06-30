import React, { Children, createContext, useReducer, useState } from "react";
import { Basketreducer } from "../reducer/Basket/Index";

// type AppContextState = {
//   basket?: any[];
//   setBasket?: React.Dispatch<React.SetStateAction<Food[]>>;
// };

// export const AppContext = createContext<AppContextState>({});

// best data type fpr cpntext is {}

// context API => Global state manegment
// تصمیمات استیتی برای ساخت استیت
// 1. do we need or not
// 2. data type
// 3. local or global

// interface AppProviderState extends React.PropsWithChildren { }

// export const AppProvider: React.FC<AppProviderState> = ({ Children }): JSX.Element => {
// const [basket, setBasket] = useState<Food[]>([])

//   return (<AppContext.Provider value={{ basket, setBasket }}>{Children}</AppContext.Provider>);
// };  


// ! Desing pattern Flux
// ! Context => Flux

type ActionType<T, K = any> = {
  type: T;
  payload: K;
}
interface IntialStateTypes {
  basket: any
}

const inrialState: IntialStateTypes = {
  basket: []
}

type AppContextState = {
  state: any;
  dispatch: any;
};

export const AppContext = createContext<AppContextState>({
  state: inrialState,
  dispatch: () => null
});

interface AppProviderState extends React.PropsWithChildren { }

const combineReducer = ({ basket }: IntialStateTypes, action: ActionType<unknown>) => {
  basket: Basketreducer(basket, action),
  // vendor: VendorReduser(state, action)

}

export const AppProvider: React.FC<AppProviderState> = ({ Children }): JSX.Element => {
  const [state, dispatch] = useReducer(combineReducer, inrialState)

  return (<AppContext.Provider value={{ state, dispatch }}>{Children}</AppContext.Provider>);
};  
