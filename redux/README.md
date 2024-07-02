# State manegament

1. Global State manegament

   1. server states => vendor
      Redux, React Query , Zustand, Mobx, Recoil

   2. client states => dark mood, basket
      Context, Redux, Zustand, Mobx, Recoil

1. Local State manegament

# Flow of Redux
![alt text](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)



promblem of redux => when we dispatch action we do't know wich one in value

dispatch => {type:1} 
addToBasket()

ریداکس در حالت عادی فقط ابجکت دیسپچ میکند
برای اینکه فانکشن دیسپچ کند باید از میدل ور استفاده کنیم

Middleware (Tank) (Saga)