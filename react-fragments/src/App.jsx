import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";

const App = () => {
  //variables
  let foods = ["Apple", "Grapes", "Orange", "Strawberry", "Berry"];
  //let foods = [];

  return (
    <>
      <ErrorMsg foodList={foods}></ErrorMsg>
      <FoodItems foodList={foods}></FoodItems>
    </>
  );
};
export default App;
