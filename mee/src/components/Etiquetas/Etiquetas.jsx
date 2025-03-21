import { useLocation } from 'react-router-dom';
import { ModalEtiqueta } from '../ModalEtiqueta';
import { Container } from './styles';

export function Etiquetas() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const empresa = queryParams.get("empresa");
    const destinatario = queryParams.get("destinatario");
    const endereco = queryParams.get("endereco");
    const numero = queryParams.get("numero");
    const bairro = queryParams.get("bairro");
    const cep = queryParams.get("cep");
    const cidade = queryParams.get("cidade");
    const uf = queryParams.get("uf");
    const volumes = queryParams.get("volumes");
    const transportadora = queryParams.get("transportadora");
    const notafiscal = queryParams.get("notafiscal");
    const obs = queryParams.get("obs");

    return (
        <>
            <Container>
                {volumes > 0 &&
                    Array.from({ length: volumes }, (_, index) => (
                        <ModalEtiqueta
                            key={Math.random()}
                            empresa={empresa}
                            destinatario={destinatario}
                            endereco={endereco}
                            numero={numero}
                            bairro={bairro}
                            cep={cep}
                            cidade={cidade}
                            uf={uf}
                            volumes={volumes}
                            transportadora={transportadora}
                            notafiscal={notafiscal}
                            obs={obs}
                        />
                    ))
                }
            </Container>
        </>
    );
}