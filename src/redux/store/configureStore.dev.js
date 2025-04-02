import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import initialData from "./store_InitialState"

export default function CreateStore() {
  return configureStore(rootReducer, initialData);
}
