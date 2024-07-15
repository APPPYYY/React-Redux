import Items from "./Items";

const FoodItems = ({ foodList }) => {
  return (
    <>
      <ul class="list-group">
        {foodList.map((food) => (
          <Items title={food}></Items>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
