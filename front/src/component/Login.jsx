import { useState, useRef } from 'react';
import { Nav, Form, Button, FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore.js';
import { axiosPost } from '../util/dataAxios.js';

function Login() {
    const navigate = useNavigate();

    const idRef = useRef(null);
    const pwdRef = useRef(null);

    const [formData, setFormData] = useState({id : "", pwd : ""});
    const [errors, setErrors] = useState({id : "", pwd : ""});
    const login = useAuthStore((s) => s.login);

    const handleFormChange = (e) => {
        const { name, value} = e.target;
        setFormData({...formData, [name]: value});
        setErrors({id : "", pwd : "" });
    };

    const handleLoginSubmit= async (e)=> {
        e.preventDefault();

        if (!formData.id) {
            setErrors((prev) => ({...prev, id : "아이디를 입력해주세요."}));
            idRef.current.focus();
            return;
        }
        if (!formData.pwd) {
            setErrors((prev) => ({...prev, pwd : "비밀번호를 입력해주세요."}));
            pwdRef.current.focus();
            return;
        }

        const result = await axiosPost("/login", formData);
        console.log("server : ", result);
        
        if (result.isLogin) {
            login({
                userId : formData.id,
                role : result.role,
                accessToken : result.token,
                isLogin : result.isLogin,
            });

            setFormData ({id : "", pwd : ""});
            navigate("/");
        } else {
            alert("로그인에 실패했습니다.");
        }
    };

    return (
        <div className='main-content'>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group>
                    <Form.Label>아이디</Form.Label>
                    <Form.Control
                        autoFocus
                        name='id'
                        value={formData.id}
                        ref={idRef}
                        onChange={handleFormChange} 
                    />
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>비밀번호</Form.Label>

                    <Form.Control
                        type='password'
                        name='pwd'
                        value={formData.pwd}
                        ref={pwdRef}
                        onChange={handleFormChange}
                    />
                </Form.Group>

                <Button type='submit' className='loginBtn'>Login</Button>
            </Form>

            <div className='sign'>
                <button type='button'>회원가입</button>
                <button type='button'>아이디 / 비밀번호 찾기</button>
            </div>
        </div>
    );
}

export default Login;