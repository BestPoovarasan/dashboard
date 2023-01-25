import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Widget = ({type}) => {
let data;

const amount= 100;
const diff= 20;

switch(type){
    case "user":
        data={
            title:'USERS',
            isMoney:false,
            link:'See All users',
            icon:<PersonOutlineOutlinedIcon className="icon"
            style={{color:"red", backgroundColor:"pink",}}/>,
        };
        break;
    case "order":
            data={
                title:'ORDERS',
                isMoney:false,
                link:'View All  Orders',
                icon:<AddShoppingCartOutlinedIcon className="icon"
                style={{color:"#ff7600", backgroundColor: "#ffd19c",}}/>,
            };
                break;
    case "earning":
                data={
                    title:'EARNINGS',
                    isMoney:true,
                    link:'View net earnings',
                    icon:<MonetizationOnIcon className="icon" 
                    style={{color:"#06b40e", backgroundColor:"#c8edcf",}}/>,
                };
                break;
    case "balance":
                    data={
                        title:'BALANCE',
                        isMoney:true,
                        link:'See deatils',
                        icon:<AccountBalanceWalletIcon className="icon" 
                        style={{color:"#c308bd", backgroundColor:"rgb(239 190 234)",}}/>,
                    };
                break;
        default:
        break;


}


  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
               {diff} %
            </div>
            {data.icon}
        </div>



    </div>
  )
}

export default Widget