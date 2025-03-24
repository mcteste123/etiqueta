import styled from "styled-components";

export const Container = styled.div`
    & + div.Con {
        margin-right: 100px;
    }

    &:nth-child(6n) { 
        page-break-after: always;
    }

    @media print {
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(13),
    &:nth-child(14),
    &:nth-child(19),
    &:nth-child(20) {
    margin-top: 12px;
  }
}
`;

export const ContainerSon = styled.div`
    width: 325px;
    height: 315px;
    display: flex;
    flex-direction: column;
    padding: 3px;
    border: 1px solid transparent;
    margin-bottom: 7px;

    img {
        width: 100px;
    }

    h1 {
        font-size: 12px;
        margin-top: 5px;
    }

    strong {
        font-size: 14px;
        margin-top: 6px;
        background-color: rgba(176, 176, 176, 0.8);
        border-bottom: 1px solid black;
    }

    span {
        font-size: 12px;
    }

    .address {
        display: flex;
        width: 318px;
        justify-content: space-between;

        .end {
            display: flex;
            flex-direction: column;

            span {
                font-size: 10px;
            }
        }

        .num {
            display: flex;
            flex-direction: column;
        }
    }

    .BCep {
        display: flex;
        justify-content: space-between;

        .bairro {
            display: flex;
            flex-direction: column;
        }

        .cep {
            display: flex;
            flex-direction: column;
        }
    }

    .CEst {
        display: flex;
        justify-content: space-between;

        .cidade {
            display: flex;
            flex-direction: column;
        }

        .estado {
            display: flex;
            flex-direction: column;
        }
    }

    .VUNota {
        display: flex;
        justify-content: space-between;

        .volume {
            display: flex;
            flex-direction: column;
        }

        .nota {
            display: flex;
            flex-direction: column;
        }
    }
`;