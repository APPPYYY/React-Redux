const Items = ({ title }) => {
  // let { title } = props; //Object Destructuring
  return (
    <>
      {/* 
      //First way to bind props
      <li class="list-group-item list-group-item-primary">{props.title}</li> */}
      {/*
      Second way to bind props
      <li class="list-group-item list-group-item-primary">{title}</li> */}
      {/* Third way to bind props */}
      <li class="list-group-item list-group-item-primary">{title}</li>
    </>
  );
};
export default Items;
