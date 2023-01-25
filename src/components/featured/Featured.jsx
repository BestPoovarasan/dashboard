import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className="featured">
    <div className="top">
      <h1 className="title">Total Revenue</h1>
      <MoreVertIcon fontSize="small"/>
    </div>

    <div className="bottom">
      <div className="featuredChart">
      <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
      </div>
      <p className="title">Total Sales Made Today</p>
      <p className="amount">$420</p>
      <p className="desc">Previous transaction is being processed.. Last payment may not be included</p>
      <div className="summary">
        <div className="item">
          <div className="itemtitle">Target</div>
          <div className="itemresult negative">
            <KeyboardArrowDownIcon fontsize="small"/>
            <div className="resultamount">$11.3K</div>
          </div>
        </div>
        <div className="item">
          <div className="itemtitle">Last Week</div>
          <div className="itemresult positive">
            <KeyboardArrowUpIcon fontsize="small"/>
            <div className="resultamount">$15.3K</div>
          </div>
        </div>
        <div className="item">
          <div className="itemtitle">Last Month</div>
          <div className="itemresult positive">
            <KeyboardArrowUpIcon fontsize="small"/>
            <div className="resultamount">$15.4K</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured