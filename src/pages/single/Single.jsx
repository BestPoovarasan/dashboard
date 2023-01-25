import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Chart from "../../components/chart/Chart.jsx";
import List from "../../components/table/Table.jsx";

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singlecontainer">
        <Navbar/>
         <div className="top">
         <div className="left">
          <div className="editbutton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://images.pexels.com/photos/1580270/pexels-photo-1580270.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="itemimage" />
            <div className="details">
              <h1 className="itemtitle">Merry</h1>
              <div className="detailitem">
                <span className="itemkey">Email:</span>
                <span className="itemvalue">merry@gmail.com</span>
              </div>
              <div className="detailitem">
                <span className="itemkey">Phone:</span>
                <span className="itemvalue">+91 9123456789</span>
              </div>
              <div className="detailitem">
                <span className="itemkey">Address:</span>
                <span className="itemvalue">TamilNadu</span>
              </div>
              <div className="detailitem">
                <span className="itemkey">country:</span>
                <span className="itemvalue">India</span>
              </div>
            </div>
          </div>
         </div>
         <div className="right">
          <Chart/>
         </div>
         </div>
         <div className="bottom">
         <h1 className="title">Last Transactions</h1>
          <List/>
         </div>
      </div>
    </div>
  )
}

export default Single