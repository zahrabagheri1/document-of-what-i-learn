import React, { createContext } from "react";
import { Food } from "../@types/api.types";

type AppContextState = {
  basket?: any[];
  setBasket?: React.Dispatch<React.SetStateAction<Food[]>>;
};

export const AppContext = createContext<AppContextState>({});

// best data type fpr cpntext is {}

// context API => Global state manegment
// تصمیمات استیتی برای ساخت استیت
// 1. do we need or not
// 2. data type
// 3. local or global
