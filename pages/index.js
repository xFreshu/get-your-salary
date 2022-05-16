import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Test = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: 400px;
    background-color: #f6f6f6;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    padding: 20px;
  }
`;

const Home = ({ getUser }) => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.contract === 'B2B') {
      router.push('/b2b');
    } else if (data.contract === 'Umowa o pracę') {
      router.push('/uop');
    } else if (data.contract === 'Umowa o dzieło') {
      router.push('/uod');
    } else {
      router.push('/uz');
    }
    getUser(data);
  };

  console.log(watch('example')); // watch input value by passing the name of it
  const contractTypes = ['', 'B2B', 'Umowa o pracę', 'Umowa o dzieło', 'Umowa zlecenie'];
  return (
    <>
      <Test>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Imię:</label>
          <input {...register('name')} />
          <label>Wiek:</label>
          <input {...register('age')} min="18" max="65" type="number" />
          <label>Umowa:</label>
          <select {...register('contract')}>
            {contractTypes.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <label>Wynagrodzenie brutto:</label>
          <input {...register('grossSalary')} min="0" type="number" />
          <input type="submit" />
        </form>
      </Test>
    </>
  );
};

export default Home;
