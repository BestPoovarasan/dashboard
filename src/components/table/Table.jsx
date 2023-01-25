import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows=[
        {
        id:112345,
        customer:"John",
        products:"Apple macbook pro",
        img: "https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg",
        date: "12 March 2022",
        amount: 100000,
        method: "cash on delivery",
        status: "Approved",
        },
        {
        id:45345,
        customer:"Rahul",
        products:"Samsung galaxy book 2",
        img: "https://m.media-amazon.com/images/I/61wqYsqU6AL._SL1500_.jpg",
        date: "17 March 2022",
        amount: 98888,
        method: "Online Payment",
        status: "Pending",
        },
        {
        id:72429,
        customer:"James",
        products:"HP Pavilion",
        img: "https://m.media-amazon.com/images/I/81yJqJSeK4L._SL1500_.jpg",
        date: "24 April 2022",
        amount: 77000,
        method: "cash on delivery",
        status: "Approved",
        },
        {
        id:95345,
        customer:"Robert",
        products:"Acer",
        img: "https://m.media-amazon.com/images/I/61gGtqfZFlL._SL1200_.jpg",
        date: "14 May 2022",
        amount: 35000,
        method: "Online",
        status: "Pending",
        },
        {
        id:31245,
        customer:"Willey",
        products:"Asus",
        img: "https://m.media-amazon.com/images/I/71S8U9VzLTL._SL1500_.jpg",
        date: "19 July 2022",
        amount: 55000,
        method: "cash on delivery",
        status: "Approved",
        },
        ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking Id</TableCell>
            <TableCell className="tablecell">Products</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Payment Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tablecell">{row.id}</TableCell>
              <TableCell className="tablecell">
                <div className="cellwrapper">
                    <img src={row.img} className="image"/>
                    {row.products}

                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List