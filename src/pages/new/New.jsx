import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import {useState} from "react";

const New = ({inputs,title}) => {

  const [file, setFile]=useState("")
  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://img.icons8.com/fluency/344/images-folder.png"} alt="" srcset="" />
          </div>
          <div className="right">
            <form>
              <div className="forminput">
                <label htmlFor="file">Image: <DriveFolderUploadIcon className="icon"/></label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              {inputs.map((input)=> (

              <div className="forminput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
              )
              )}
              
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New