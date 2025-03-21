import { Container, ContainerTop, CreateButton, ContainerBottom } from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Form() {
    const navigate = useNavigate();
    const [empresa, setEmpresa] = useState("MC MEDICALL PRODUTOS MEDICO HOSPITALARES");
    const [destinatario, setDestinatario] = useState("GABRIEL VIEIRA ALBUQUERQUE");
    const [endereco, setEndereco] = useState("RUA DOM PEDRO I");
    const [numero, setNumero] = useState("1950");
    const [bairro, setBairro] = useState("JARDIM GUANABARA");
    const [cep, setCep] = useState("79833090");
    const [cidade, setCidade] = useState("DOURADOS");
    const [uf, setUf] = useState("MS");
    const [volumes, setVolumes] = useState("2");
    const [transportadora, setTransportadora] = useState("CARVALIMA TRANSPORTES LTDA");
    const [notafiscal, setNotaFiscal] = useState("1150");
    const [obs, setObs] = useState("Entrega urgente");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            empresa,
            destinatario,
            endereco,
            numero,
            bairro,
            cep,
            cidade,
            uf,
            volumes,
            transportadora,
            notafiscal,
            obs
        });

        navigate(`/etiquetas?empresa=${encodeURIComponent(empresa)}&destinatario=${encodeURIComponent(destinatario)}&endereco=${encodeURIComponent(endereco)}&numero=${encodeURIComponent(numero)}&bairro=${encodeURIComponent(bairro)}&cep=${encodeURIComponent(cep)}&cidade=${encodeURIComponent(cidade)}&uf=${encodeURIComponent(uf)}&volumes=${encodeURIComponent(volumes)}&transportadora=${encodeURIComponent(transportadora)}&notafiscal=${encodeURIComponent(notafiscal)}&obs=${encodeURIComponent(obs)}`);
    };

    return (
        <>
            <Container>

                <ContainerTop />

                <div className="containerBody">
                    <label>Empresa Emitente</label>
                    <input
                        type="text"
                        onChange={(e) => setEmpresa(e.target.value)}
                        name="nome"
                        defaultValue={empresa}
                        readOnly
                    />


                    <label>Código Destinatário *</label>
                    <input
                        type="number"
                        name="text"
                        autoComplete="off"
                    />

                    <label>Destinatário</label>
                    <input
                        type="text"
                        value={destinatario}
                        onChange={(e) => setDestinatario(e.target.value)}
                        name="nome"
                        autoComplete="off"
                    />

                    <div className="type1">
                        <div className="type2">
                            <label>Endereço</label>
                            <input
                                type="text"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                                name="nome"
                                className="address"
                                autoComplete="off"
                            />
                        </div>

                        <div className="type3">
                            <label>Número</label>
                            <input
                                type="text"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                name="nome"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="type1">
                        <div className="type2">
                            <label>Bairro</label>
                            <input
                                type="text"
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                                name="nome"
                                className="address"
                                autoComplete="off"
                            />
                        </div>

                        <div className="type3">
                            <label>CEP</label>
                            <input
                                type="number"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                name="nome"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="type1">
                        <div className="type2">
                            <label>Cidade</label>
                            <input
                                type="text"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                name="nome"
                                className="address"
                                autoComplete="off"
                            />
                        </div>

                        <div className="type3">
                            <label>UF</label>
                            <input
                                type="text"
                                value={uf}
                                onChange={(e) => setUf(e.target.value)}
                                name="nome"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="type1B">
                        <div className="type2">
                            <label>Quantidade de Volumes</label>
                            <input
                                type="number"
                                value={volumes}
                                onChange={(e) => setVolumes(e.target.value)}
                                name="nome"
                                className="address"
                                autoComplete="off"
                            />
                        </div>

                        <div className="type3">
                            <label>Nota Fiscal</label>
                            <input
                                type="text"
                                value={notafiscal}
                                onChange={(e) => setNotaFiscal(e.target.value)}
                                name="nome"
                                autoComplete="off"
                            />
                        </div>
                    </div>


                    <label>Transportadora</label>
                    <input
                        type="text"
                        value={transportadora}
                        onChange={(e) => setTransportadora(e.target.value)}
                        name="nome"
                        autoComplete="off"
                    />

                    <label>Observação</label>
                    <input
                        type="text"
                        value={obs}
                        onChange={(e) => setObs(e.target.value)}
                        name="nome"
                        className="obs"
                        autoComplete="off"
                    />

                    <CreateButton type="button" onClick={handleSubmit}>
                        <strong>GERAR</strong>
                    </CreateButton>
                </div>

                <ContainerBottom />
            </Container>
        </>
    )
}