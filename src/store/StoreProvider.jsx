"use client";

import { Provider } from "react-redux";
import { store } from "./index";

// PersistGate is deliberately not used here: it renders null until
// redux-persist rehydrates from localStorage, which never resolves during
// SSR and would block the entire page's server-rendered content. Rehydration
// (persistStore in ./index.js) still runs automatically in the background;
// cart/wishlist consumers just see default state for one client-side tick
// before the persisted values apply.
export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
