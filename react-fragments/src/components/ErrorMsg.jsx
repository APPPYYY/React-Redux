const ErrorMsg = ({ foodList }) => {
  return (
    <>
      {foodList.length === 0 ? (
        <h1>No Food Available</h1>
      ) : (
        <h1>Healthy Food</h1>
      )}
      {foodList.length === 0 && <h2>Food List is empty</h2>}
    </>
  );
};
export default ErrorMsg;
