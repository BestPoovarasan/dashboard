export const usercolumns=[{field: "id", headername: "ID", width: 70},
{
    field:"user",
    headerName: "User",
    width: 230,
    renderCell:(params) => {
    return(
    <div className="cellwithimg">
    <img className="cellimg" src={params.row.img}/>
    {params.row.username}
    </div>
    );
    },
 },
   {

       field: "email",
       headername: "Email",
       width: 230,
   },
   {

       field: "age",
       headername: "AGE",
       width: 100,
   },
   {

       field: "status",
       headername: "Status",
       width: 160,
       renderCell:(params)=>{
        return(
            <div className={`cellwithstatus ${params.row.status}`}>{params.row.status}</div>
        )
       }
   }
   
];

//temporary data
export const userRows=[
    { 
     id:1,
     username: "john",
     img: "https://img.icons8.com/fluency/344/test-account.png",
     status: "active",
     email: "johndoe@gmail.com",
     age: 30
    },
    { 
     id:2,
     username: "Martin",
     img: "https://img.icons8.com/fluency/344/test-account.png",
     status: "pending",
     email: "martin@gmail.com",
     age: 35
    },
    { 
     id:3,
     username: "Robert",
     img: "https://img.icons8.com/fluency/344/test-account.png",
     status: "active",
     email: "robert@gmail.com",
     age: 27
    },
    { 
     id:4,
     username: "David",
     img: "https://img.icons8.com/fluency/344/test-account.png",
     status: "pending",
     email: "david@gmail.com",
     age: 24
    },
    { 
     id:5,
     username: "Willey",
     img: "https://img.icons8.com/fluency/344/test-account.png",
     status: "active",
     email: "willey@gmail.com",
     age: 29
    },
 
 ]