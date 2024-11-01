import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navgiate = useNavigate()
  const handleClick = () => {
    navgiate('/')
  }

  return (<Result
    status="404"
    title="404"
    subTitle="抱歉, 页面未找到"
    extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
  />)
};

export default Error404;