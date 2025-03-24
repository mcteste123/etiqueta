import { Head } from "./styles";
import logo from '../../assets/Logo-Medicall.png'

export function Header() {
    function handlePrint() {
        window.print();
    }

    return (
        <Head>
            <div className="imagem">
                <a href="/">
                    <img src={logo} alt="MC Medicall Logo" />
                </a>
            </div>
            <strong onClick={handlePrint}>Emissão de Etiquetas</strong>
        </Head>
    )
}