import "./index.less";
import { Form, Input, Button } from "antd";
import styles from "./index.module.less";
import api from "@/api/index";
import { Login } from "@/types/api";
import storage from "@/utils/storage";
import { Result } from "@/types/api";
import { useNavigate } from "react-router-dom";

export default function LoginFc() {
  const navigate = useNavigate()

  const onFinish =async (values: Login.params) => {
    const data = await api.login(values)
    storage.set("token", data)
    navigate('/')
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form name="basic" onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="userName"
            rules={[{ required: true, message: "用户名不能为空!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="userPwd"
            rules={[{ required: true, message: "密码不能为空!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
