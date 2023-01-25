import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Datatable from "../../components/datatable/Datatable.jsx";

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listcontainer">
        <Navbar/>
        <Datatable/>
      </div>


    </div>
  )
}

export default List