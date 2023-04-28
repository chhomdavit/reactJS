import {useState} from 'react';
import { Input,Radio,Select,Button,Space,Divider,Table } from 'antd';
import { SaveFilled,ClearOutlined } from '@ant-design/icons';


const StaffPage = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [gender, setGender] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [postition, setPostition] = useState(null)
    const [address, setAddress] = useState("")

    const [listStaff, setListStaff] = useState([])

    const handleSave = () =>{
        var objStaff = {
            "firstname" : firstname,
            "lastname" : lastname,
            "gender" : gender,
            "tel" :tel,
            "email" : email,
            "postition" : postition,
            "address" : address,
        }
        var listTmp = [...listStaff,objStaff]
        setListStaff(listTmp)
        handleClear();
    }
    const handleClear = () =>{
       setFirstname('')
       setLastname('')
       setGender('')
       setTel('')
       setEmail('')
       setPostition(null)
       setAddress('')
    }

    const handleEdit = () =>{

    }
    
    const handleDelete =() =>{

    }
  return (
    <>
    <div style={{ paddingLeft:"5%",paddingRight:"5%"}}>
        <h3>Staff Form</h3>
        <Space direction='vertical' style={{ width:"100%"}}>
            <Input
            value={firstname}
            placeholder='Firstname'
            onChange={(even)=>{setFirstname(even.target.value)}}
            />
            <Input
            value={lastname}
            placeholder='Lastname'
            onChange={(even)=>{setLastname(even.target.value)}}
            />
            <div>
                <Space>
                    <Radio.Group 
                    value={gender}
                    onChange={(even)=>{setGender(even.target.value)}}
                    >
                        <Radio value={0}>Male</Radio>
                        <Radio value={1}>Female</Radio>
                    </Radio.Group>
                </Space>
            </div>
            <Input
            value={tel}
            placeholder='Tel'
            onChange={(even)=>{setTel(even.target.value)}}
            />
            <Input
            value={email}
            placeholder='Email'
            onChange={(even)=>{setEmail(even.target.value)}}
            />
            <Select 
            value={postition}
            onSelect={(value)=>{setPostition(value)}}
            allowClear 
            placeholder="Select Postition" 
            style={{ width:"100%" }}
            >
                <option value={"web developer"}>Web developer</option>
                <option value={"AI developer"}>AI developer</option>
                <option value={"API developer"}>API developer</option>
                <option value={"Mobile developer"}>Mobile developer</option>
                <option value={"Data Analysis"}>Data Analysis</option>
            </Select>
            <Input.TextArea
            value={address}
            placeholder='Address'
            onChange={(even)=>{setAddress(even.target.value)}}
            />
            <div>
                <Button onClick={handleSave} type='primary'><SaveFilled/>SAVE</Button>
                <Button onClick={handleClear}><ClearOutlined/>CLEAR</Button>
            </div>
            <Divider/>
            <h3>List Staff Table Antd</h3>
            <Table columns={[
                    {
                        key:1,
                        dataIndex:"firstname",
                        title:"Firstname"
                    },
                    {
                        key:2,
                        dataIndex:"lastname",
                        title:"Lastname"
                    },
                    {
                        key:3,
                        dataIndex:"gender",
                        title:"Gender",
                        render : (item) => item === 0 ? "Male" :"Female"
                    },{
                        key:4,
                        dataIndex:"tel",
                        title:"Tel"
                    },
                    {
                        key:5,
                        dataIndex:"email",
                        title:"Email"
                    },
                    {
                        key:6,
                        dataIndex:"address",
                        title:"Address"
                    },
                    {
                        key:7,
                        dataIndex:"",
                        title:"Action",
                        render:()=>{
                            return(
                                <Space>
                                    <Button size='small' onClick={handleDelete} danger>DELETE</Button>
                                    <Button size='small' onClick={handleEdit} primary>EDIT</Button>
                                </Space>
                            )
                        }
                    },
                ]}
                dataSource={listStaff}
                pagination
            />
        </Space>
    </div>
    </>
  )
}

export default StaffPage;
