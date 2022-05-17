import styled from 'styled-components';

const UOPCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.7s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  h2 {
    margin-bottom: 20px;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

const UOP = ({ user }) => {
  const { name, grossSalary } = user;
  const emerytalna = (grossSalary * 0.0976).toFixed(2);
  const rentowa = (grossSalary * 0.015).toFixed(2);
  const chorobowa = (grossSalary * 0.0245).toFixed(2);
  const spoleczne = +emerytalna + +rentowa + +chorobowa;
  const zdrowotna = grossSalary - spoleczne;
  const ubZdrowotne = (zdrowotna * 0.09).toFixed(2);
  const netSalary = (zdrowotna - ubZdrowotne).toFixed(2);
  return (
    <>
      <h1>UOP</h1>
      <UOPCard>
        <h2>Cześć, {name}.</h2>
        <div>
          <span>Wynagrodzenie brutto:</span>
          <span>{grossSalary} zł</span>
        </div>
        <div>
          <span>Składka emerytalna:</span>
          <span>{emerytalna} zł</span>
        </div>
        <div>
          <span>Składka rentowa:</span>
          <span>{rentowa} zł</span>
        </div>
        <div>
          <span>Składka chorobowa:</span>
          <span>{chorobowa} zł</span>
        </div>
        <div>
          <span>Składka na ubezpieczenie społeczne:</span>
          <span>{spoleczne} zł</span>
        </div>
        <div>
          <span>Podstawa wymiaru składki zdrowotnej:</span>
          <span>{zdrowotna} zł</span>
        </div>
        <div>
          <span>Składka na ubezpieczenie zdrowotne:</span>
          <span>{ubZdrowotne} zł</span>
        </div>
        <div>
          <span>Zaliczka na podatek:</span>
          <span>0 zł</span>
        </div>
        <div>
          <span>Wynagrodzenie netto:</span>
          <span>{netSalary} zł</span>
        </div>
      </UOPCard>
    </>
  );
};

export default UOP;
