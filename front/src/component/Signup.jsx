import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Signup.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    if (formData.password.length < 8) {
      return alert("비밀번호는 8자리 이상이어야 합니다.");
    }

    try {
      await axios.post('http://localhost:4000/signup', {
        userId: formData.userId,
        password: formData.password,
        email: formData.email
      });
      alert("회원가입이 완료되었습니다!");
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || "가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <div className="signup-container">
        <h2>회원가입</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>아이디</Form.Label>
            <Form.Control name="userId" value={formData.userId} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="pwd">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="pwd-check">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mail">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <div className='terms-links'>
            <span className='terms-link'>개인정보처리방침</span>
            <span className='slash'>|</span>
            <span className='terms-link'>서비스이용약관</span>
          </div>

          <div className="terms-container">
            <Form.Check 
              type="checkbox" 
              id="terms-check"
              label="전체 약관에 동의합니다."
              onChange={(e) => setAgree(e.target.checked)} 
            />
          </div>
          <Button variant="primary" type="submit" className="w-100">가입하기</Button>
        </Form>
      </div>

      <div className='safe'>
        <p>본 서비스는 귀하의 개인정보를 안전하게 보호합니다.</p>
      </div>
      </>  
  );
}

export default SignUp;