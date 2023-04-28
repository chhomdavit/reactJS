import {useState,useEffect} from 'react';
import "./TeacherPage.css";
import axios from "axios";
import {Button, Space, Spin, Table} from "antd";
import { DeleteFilled,EditFilled} from "@ant-design/icons";



const TeacherPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getListUser();
  },[])

  const getListUser =()=>{
    setLoading(true);
    axios ({
      url:"http://localhost:3001/listuser",
      method:"GET",
      data:{

      }
    }).then(res=>{
      setList(res.data);
      setLoading(false);
      //console.log(res.data.list);
    })
  }
  
  const handleRemoveUser = (items) => {
      // console.log(items);
       setLoading(true)
      axios({
        url : 'http://localhost:3001/listuser',
        method : "DELETE",
        data : {
          
          "_id" : items.id
        }
      }).then(res =>{
        getListUser();
        setLoading(false);
      });
  }

  return (
    <div className='teacher-container'>
      <Spin spinning={loading}>
      <h1>List User { list.length }</h1>
      <Table
       columns={[
        {
          key : 0,
          title: "No",
          //dataIndex:"lastname"
          render : (item,items,index) => {
            return index + 1;
          }
        },
        {
          key : 0,
          title: "Lastname",
          dataIndex:"lastname"
        },
        {
          key : 1,
          title: "Firsname",
          dataIndex:"firstname"
        },
        {
          key : 2,
          title: "Age",
          dataIndex:"age"
        },
        {
          key : 3,
          title: "Gender",
          dataIndex:"gender",
          render:(item,items,index)=>{
            return item === 1 ? "Male" : "Female";
          }
        },
        {
          key : 0,
          title: "Action",
          //dataIndex:"gender"
          render : (item,items,index) =>{
            return(
              <Space>
                <Button onClick={()=>handleRemoveUser(items)} size='small' danger={true}><DeleteFilled/></Button>
                <Button size='small' type='primary'><EditFilled/></Button>
              </Space>
            )
          }
        },
       ]}
       dataSource={list}
       pagination={true}
      />
      {list.map((item,index)=>{
        return(
             <h1>{item.lastname}-{item.firstname}</h1> 
              )
        })};
      </Spin>
    </div>
  )
}

export default TeacherPage;
