import { Link } from "react-router-dom"
import { MenuItem } from "../data"

const Menu = () => {
  return (
    <main>

      {MenuItem.map((item) => (
      <div key={item.id} className="item flex flex-col gap-3 mb-5">
        <span className="uppercase text-xs font-extralight text-soft-color">{item.title}</span>
        {item.listItems.map((listItem) => (
        <Link to='/' className="list-items" key={listItem.id}>
          <img src={listItem.icon} alt="icon" />
          <span>{listItem.title}</span>
        </Link>
        ))}
      </div>
      ))}
    </main>
  );
};

export default Menu;
