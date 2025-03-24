import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    margin: 20px auto;
    width: 50em;
    flex-direction: column;

    label {
        margin-left: 20px;
    }

    .containerBody {
        border-right: 1px solid rgba(0, 0, 0, 0.8);
        border-left: 1px solid rgba(0, 0, 0, 0.8);
        padding-top: 15px;
        padding-bottom: 10px;
    }

    select {
        height: 40px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 7px;
        font-size: 16px;
        background-color:rgb(231, 231, 231);
        outline: none;
        width: 95%;
        margin: 10px auto;
        display: flex;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }

        &:focus {
            border-color:rgb(54, 113, 175);
            box-shadow: 0 0 8px rgba(54, 136, 223, 0.53);
            transition: 0.2s;
        }
    }
    
    input {
        height: 40px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 7px;
        font-size: 16px;
        background-color:rgb(231, 231, 231);
        outline: none;
        width: 95%;
        margin: 10px auto;
        display: flex;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }

        &:focus {
            border-color:rgb(54, 113, 175);
            box-shadow: 0 0 8px rgba(54, 136, 223, 0.53);
            transition: 0.2s;
        }
    }

    input.obs {
        height: 50px;
        font-size: 12px;
        word-wrap: break-word;
        overflow-wrap: break-word;
        white-space: normal;
    }

    div.type1 {
        display: flex;

        div.type2 {
            width: 535px;
        }

        div.type3 {
            width: 230px;
        }

        input {
            margin-left: 20px;
        }
    }

    div.type1B {
        display: flex;

        div.type2 {
            width: 305px;
        }

        div.type3 {
            width: 230px;
        }

        input {
            margin-left: 20px;
        }
    }
`;

export const ContainerTop = styled.div`
    background-color: #4272EA;
    width: 100%;
    min-height: 50px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ContainerBottom = styled.div`
    background-color: #EEEEEE;
    width: 100%;
    min-height: 10px;
    border-end-end-radius: 30px;
    border-end-start-radius: 30px;
    border: 1px solid rgb(0, 0, 0);
`;

export const CreateButton = styled.button`
    width: 95%;
    height: 50px;
    display: flex;
    margin: 16px auto;
    background-color: #4272EA;
    border: none;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #fff;
    box-shadow: 0px 4px 0px 0px #1E52D4;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        background-color:rgb(100, 137, 230);
        transition: 0.3s;
    }

    &:active {
        background-color:rgb(9, 53, 163);
    }
`;