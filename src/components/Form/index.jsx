import { Container, ContainerTop, CreateButton, ContainerBottom } from './styles';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clientes from '../../assets/csvjson.json';

export function Form() {
    const navigate = useNavigate();
    const [empresa, setEmpresa] = useState("MC MEDICALL PRODUTOS MEDICO HOSPITALARES");
    const [codigo, setCodigo] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [volumes, setVolumes] = useState("");
    const [transportadora, setTransportadora] = useState("-");
    const [notafiscal, setNotaFiscal] = useState("");
    const [obs, setObs] = useState("");

    const handleChange = (e) => {
        const codigoDigitado = Number(e.target.value);
        setCodigo(codigoDigitado);

        const encontrado = clientes.find(c => c.Codigo === codigoDigitado);
        if (encontrado) {
            setDestinatario(encontrado.nome_razao_social || "");
            setEndereco(encontrado.rua || "");
            setNumero(encontrado.Numero_rua || "");
            setBairro(encontrado.bairro || "");
            setCep(encontrado.cep || "");
            setCidade(encontrado.cidade || "");
            setUf(encontrado.uf || "");
        } else {
            setDestinatario("");
            setEndereco("");
            setNumero("");
            setBairro("");
            setCep("");
            setCidade("");
            setUf("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

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
                        onChange={handleChange}
                        value={codigo}
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
                                type="text"
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
                            <label>Quantidade de Volumes *</label>
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
                    <select
                        value={transportadora}
                        onChange={(e) => setTransportadora(e.target.value)}
                    >
                        <option value="">Selecione uma transportadora</option>
                        <option value="CACERES EXPRESS">CACERES EXPRESS</option>
                        <option value="EXPRESS DOURADOS">EXPRESS DOURADOS</option>
                        <option value="CARVALIMA TRANSPORTES LTDA">CARVALIMA TRANSPORTES LTDA</option>
                        <option value="VIACAO CRUZEIRO DO SUL LTDA">VIACAO CRUZEIRO DO SUL LTDA</option>
                        <option value="EXPRESSO QUEIROZ">EXPRESSO QUEIROZ</option>
                        <option value="VIACAO UMUARAMA LTDA">VIACAO UMUARAMA LTDA</option>
                    </select>


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