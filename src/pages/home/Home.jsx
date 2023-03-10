import React from 'react'
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Widget from "../../components/widget/Widget.jsx";
import Featured from "../../components/featured/Featured.jsx";
import Chart from "../../components/chart/Chart.jsx";
import Table from "../../components/table/Table.jsx";

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>

      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
          </div>

          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listcontainer">
            <div className="listtitle">Latest Transactions</div>
            <Table/>
          </div>
        </div>
      </div>
  )
}

export default Home