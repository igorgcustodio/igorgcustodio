import styled from "styled-components"

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #efefef;
  
  .title {
    color: #272727;
    margin-top: 16px;
  }
  
  .section {
    width: 960px;
    
    @media(max-width: 960px) {
      width: 100%;
      padding-right: 16px;
      padding-left: 16px;
    }

    display: flex;
    flex-direction: column;
    
    .subtitle {
      font-weight: 600;
      margin-bottom: 16px;
    }
    
    .inputs {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-evenly;
      
      .input {
        margin-top: 16px;
        display: flex;
        flex-direction: column;

        .label {
          font-size: 16px;
        }

        .input-field {
          border: none;
          padding: 10px;
          font-size: 14px;
          min-width: 200px;
        }
      }
    }
    
    .button {
      margin-top: 32px;
      border: none;
      padding: 10px;
      background: #005cbf;
      color: white;
      font-size: 16px;
      width: 200px;
      font-weight: 600;
      align-self: center;
    }
    
    .results {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
    }
  }
  
  hr {
    background: #062c33;
    width: calc(100% - 64px);
    height: 5px;
  }
  `
