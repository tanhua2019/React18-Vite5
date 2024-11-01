import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Error403 = () => {
  const navgiate = useNavigate()
  const handleClick = () => {
    navgiate('/')
  }

  return (<Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
  />)
};

export default Error403;