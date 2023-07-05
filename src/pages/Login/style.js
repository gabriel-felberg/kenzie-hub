import styled from "styled-components";

export const FlexHeader = styled.header`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

export const Divflex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};
  
  input{
    width:96%;
    height:38px;
    border-color: 3px solid #ffffff;
    background-color: #343B41;
    color: #ffffff;
    border-radius:5px;
    margin:10px 0px 10px 0px;
    padding: 0px 0px 0px 10px;
    font-size: 15px;
    outline: none!important;
  }
  span{
    font-size:15px;
    color:#F8F9FA;
  }
  @media (min-width: 768px) {
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  h6{
    width: 160px;
    font-size: 16px;
    color: #FF427F;
  }
  span {
    text-align: start;
    width: 120px;
    font-size:15px;
    font-weight: 700;
    color:#F8F9FA;
  }

  @media (min-width: 768px) {
  }
`;

export const CurrentButton = styled.button`
  
  text-align: ${(props) => props.t};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};

  background-color: ${(props) => props.bc};
  color: ${(props) => props.c};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  @media (min-width: 768px) {
  }
`;
