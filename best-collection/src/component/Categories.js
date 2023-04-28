import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<h3>Categories</h3>, 'grp', null, 
  [
    getItem('Men', '13'), 
    getItem('Women', '14'),
    getItem('Chlidren', '15'),
    getItem('Shose', '16'),
    getItem('Material', '17'), 
  ], 'group'),
  ];

const Categories = () => {
    const onClick = (e) => {
        console.log('click ', e);
      };
  return (
    <div style={{ padding:"10px" }}>
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </div>
  )
}

export default Categories;
