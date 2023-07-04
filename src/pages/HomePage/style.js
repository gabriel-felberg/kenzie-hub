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
  button{
    border:none;
    color:white;
    background-color:#282c34;
    margin:10px;
  }
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

  button{
    border:none;
    color:white;
    background-color:#282c34;
    margin:10px;
    font-size:20px;
  }

  input{
    width:96%;
    height:38px;
    border-color: 3px solid #ffffff;
    background-color: #343B41;
    color: #ffffff;
    margin:20px 0px;
  }
  span, select{
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
  input, select{
    width:96%;
    height:38px;
    border-color: 3px solid #ffffff;
    background-color: #343B41;
    color: #ffffff;
    margin:20px 0px;
  }
  span{
    font-size:15px;
    color:#F8F9FA;
  }
  @media (min-width: 768px) {
  }
`;