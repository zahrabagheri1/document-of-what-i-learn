import React, { createContext, useReducer } from "react";
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

export type ActionType<T, K = any> = {
  type: T;
  payload?: K;
}
export interface IntialStateTypes {
  basket: any[]
}

export const inrialstate: IntialStateTypes = {
  basket: []
}

export type AppContextState = {
  state: any;
  dispatch: any;
};

export const AppContext = createContext<AppContextState>({
  state: inrialstate,
  dispatch: () => null
});

interface AppProviderState extends React.PropsWithChildren { }

const combineReducer = ({ basket }: IntialStateTypes, action: ActionType<any>) => ({
  basket: Basketreducer(basket, action),
})

export const AppProvider: React.FC<AppProviderState> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(combineReducer, inrialstate)

  return (<AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>);
};  
