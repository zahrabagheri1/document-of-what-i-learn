import { useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return false;
    }

    return true;
  });

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
}

// 1. چرا از همین هوک ها در لودر ها استفاده نکنیم؟
// هوک را فقط میتوان در کامپوننت های ری اکت استفاده کرد
// هوک بیرون از کامپوننت امکان استفاده شدن ندارد
// وقتی در لودر هستم نمیتوان از هوک استفاده کرد و مجبوریم از ایز اوثنتیکیت استفاده کرد
