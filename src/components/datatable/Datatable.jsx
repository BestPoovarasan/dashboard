import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { usercolumns, userRows} from "../../tabledata";
import {Link} from "react-router-dom";

const Datatable = () => {
    const actioncolumn=[
        {
            field:"action",
            headername: "action",
             width:200,
            renderCell:()=>{
           return(
      <div className="cellaction">
         <Link to="/users/test" style={{textDecoration:"none"}}>
        <div className="viewbutton">View</div>
         </Link>
        <div className="deletebutton">Delete</div>
      </div>
            )  
}
        }
    ]

  return (
    <div className="datatable">
      <div className="datatabletitle">
        Add New User
        <Link to="/users/new" style={{textDecoration:"none"}} className="link" >Add new</Link>
      </div>
         <DataGrid
        rows={userRows}
        columns={usercolumns.concat(actioncolumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable