import { Link } from "react-router-dom"
import { MenuItem } from "../data"

const Menu = () => {
  return (
    <main className="">

      {MenuItem.map((item) => (
      <div key={item.id} className="item flex flex-col gap-3 mb-5">
        <span className="title text-xs font-extralight text-soft-color">{item.title}</span>
        {item.listItems.map((listItem) => (
        <Link to='/' className="list-items" key={listItem.id}>
          <img src={listItem.icon} alt="home" />
          <span className="list-item-title">{listItem.title}</span>
        </Link>
        ))}

      </div>
      ))}
     
    </main>
  )
}

export default Menu