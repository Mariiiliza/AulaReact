import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import RioDeJaneiro from "./Paginas/RioDeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import Paraná from "./Paginas/Paraná";
import RioGrandeDoSul from "./Paginas/RioGrandeDoSul";
import SantaCatarina from "./Paginas/SantaCatarina";
import Acre from "./Paginas/Acre";
import DistritoFederal from "./Paginas/DistritoFederal";
import Para from "./Paginas/Para";
import Alagoas from "./Paginas/Alagoas";
import Amapa from "./Paginas/Amapa";
import Amazonas from "./Paginas/Amazonas";
import Bahia from "./Paginas/Bahia";
import Ceara from "./Paginas/Ceara";
import Goias from "./Paginas/Goias";
import Maranhao from "./Paginas/Maranhao";
import MatoGrosso from "./Paginas/MatoGrosso";
import MatoGrossoDoSul from "./Paginas/MatoGrossoDoSul";
import Paraiba from "./Paginas/Paraiba";
import Pernambuco from "./Paginas/Pernambuco";
import Piaui from "./Paginas/Piaui";
import RioGrandeDoNorte from "./Paginas/RioGrandeDoNorte";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import Sergipe from "./Paginas/Sergipe";
import Tocantins from "./Paginas/Tocantins";








export default function App()
{
    return (
        <BrowserRouter>
        <Routes>
            <Route path= "/" element= {<Home />} />
            <Route path= "/sp" element= {<SaoPaulo />} />
            <Route path= "/mg" element= {<MinasGerais />} />
            <Route path= "/rj" element= {<RioDeJaneiro />} />
            <Route path= "/es" element= {<EspiritoSanto />} />
            <Route path= "/pr" element= {<Paraná />} />
            <Route path= "/rs" element= {<RioGrandeDoSul />} />
            <Route path= "/sc" element= {<SantaCatarina />} />
            <Route path= "/acre" element= {<Acre />} />
            <Route path= "/distritofederal" element= {<DistritoFederal />} />
            <Route path= "/para" element= {<Para />} />
            <Route path= "/alagoas" element= {<Alagoas />} />
            <Route path= "/amapa" element= {<Amapa />} />
            <Route path= "/amazonas" element= {<Amazonas />} />
            <Route path= "/bahia" element= {<Bahia />} />
            <Route path= "/Ceara" element= {<Ceara />} />
            <Route path= "/goias" element= {<Goias />} />
            <Route path= "/maranhao" element= {<Maranhao />} />
            <Route path= "/matogrosso" element= {<MatoGrosso />} />
            <Route path= "/matogrossodosul" element= {<MatoGrossoDoSul />} />
            <Route path= "/paraiba" element= {<Paraiba />} />
            <Route path= "/pernambuco" element= {<Pernambuco />} />
        <Route path= "/piaui" element= {<Piaui />} />
        <Route path= "/riograndedonorte" element= {<RioGrandeDoNorte />} />
        <Route path= "/rondonia" element= {<Rondonia />} />
        <Route path= "/roraima" element= {<Roraima />} />
        <Route path= "/sergipe" element= {<Sergipe/>} />
        <Route path= "/tocantins" element= {<Tocantins/>} />
        </Routes>
        </BrowserRouter>
    );
}