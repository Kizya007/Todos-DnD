import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer"; // Импорт вашего корневого редьюсера

const store = createStore(rootReducer);

export default store;
