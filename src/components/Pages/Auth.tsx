import React, { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { auth } from "../../utils";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit = () => {
    const fields = {
      login,
      password,
    };

    try {
      const response = auth(fields);
      response.then((el) => {
        if (el.data.token) {
          window.localStorage.setItem("token", el.data.token);
          return navigate("/assortment");
        } else return alert("Неверный логин или пароль");
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (window.localStorage.getItem("token")) {
    return (
      <div className='main bg-black flex justify-center items-center'>
        <Button
          type='primary'
          htmlType='submit'
          style={{
            backgroundColor: "rgb(255, 241, 0)",
            color: "black",
            marginLeft: "-5vw",
          }}
          onClick={() => {
            window.localStorage.removeItem("token");
            return navigate("/assortment");
          }}
        >
          Выйти
        </Button>
      </div>
    );
  }
  return (
    <div className='main bg-black flex justify-center items-center ml-[-10vw] text-white'>
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete='off'
      >
        <Form.Item
          label={<p className='text-white text-[20px]'>Логин</p>}
          name='login'
          rules={[
            {
              required: true,
              message: "Please input your login!",
            },
          ]}
        >
          <Input
            value={login}
            onChange={(e: any) => setLogin(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={<p className='text-white text-[20px]'>Пароль</p>}
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type='primary'
            htmlType='submit'
            style={{ backgroundColor: "rgb(255, 241, 0)", color: "black" }}
            onClick={submit}
          >
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Auth;
