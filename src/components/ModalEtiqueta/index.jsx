import { Container, ContainerSon } from './styles';

export function ModalEtiqueta({ empresa, destinatario, endereco, numero, bairro, cep, cidade, uf, volumes, transportadora, notafiscal, obs }) {
    return (
        <Container>
            <ContainerSon className='Con'>
                {/* <img src={logo} alt="Logo MC Medicall" /> */}
                <h1>{empresa}</h1>

                <strong>Destinatário</strong>
                <span>{destinatario}</span>

                <div className="address">
                    <div className="end">
                        <strong>Endereço</strong>
                        <span>{endereco}</span>
                    </div>

                    <div className="num">
                        <strong>Número</strong>
                        <span>{numero}</span>
                    </div>
                </div>

                <div className="BCep">
                    <div className="bairro">
                        <strong>Bairro</strong>
                        <span>{bairro}</span>
                    </div>

                    <div className="cep">
                        <strong>CEP</strong>
                        <span>{cep}</span>
                    </div>
                </div>

                <div className="CEst">
                    <div className="cidade">
                        <strong>Cidade</strong>
                        <span>{cidade}</span>
                    </div>

                    <div className="estado">
                        <strong>UF</strong>
                        <span>{uf}</span>
                    </div>
                </div>

                <div className="VUNota">
                    <div className="volume">
                        <strong>Volumes</strong>
                        <span>{volumes}</span>
                    </div>

                    <div className="nota">
                        <strong>NF</strong>
                        <span>{notafiscal}</span>
                    </div>
                </div>

                <strong>Transportadora</strong>
                <span>{transportadora}</span>

                <strong>Observação</strong>
                <span>{obs}</span>
            </ContainerSon>
        </Container>
    )
}