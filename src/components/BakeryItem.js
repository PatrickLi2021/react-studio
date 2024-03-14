// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
  const { item, index, clickHandler, image } = props;
  return (
    <div class="bakery-item">
      <p>
        <b>Name of Item:</b>
        {item.name}
      </p>
      <p>
        <b>Price:</b>
        {item.price}
      </p>
      <p>
        <b>Description:</b>
        {item.description}
      </p>
      <img src={item.image} width="20%" />
      <p>Bakery Item {index}</p>
      <button onClick={clickHandler}>Add Item</button>
    </div>
  );
}
