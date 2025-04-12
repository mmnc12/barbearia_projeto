import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";
import estilos from "./page.module.css";


export default function Home() {
  return (
    <div className={estilos.page}>
      <main>
        {/* Iniio header */}
        <header>
          <img src="banner2.png" alt="logo" />
          <nav>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Depoimentos</a>
            <a href="#">Agendamento</a>
            <a href="#">Localização</a>
          </nav>
        </header>
        {/* Fim header */}

        {/* Inicio banner */}
        <section className={estilos.banner}>
          <h1>BARBEARIA DO JOÃO</h1>
          <button>Faça um Agendamento</button>
        </section>
        {/* Fim banner */}

        {/* Inicio contato */}
        <section className={estilos.end_contato}>
          <div className={estilos.endereco}>
            <FaLocationDot className={estilos.icon} />
            <h2>ENDEREÇO</h2>
            <div className={estilos.linha}></div>
            <p>TRAV. REGIS PACHECO, SN, AO LADO DA PASTELARIA DAYSE ANNE</p>
          </div>
          <div className={estilos.zap}>
            <BiSolidPhoneCall className={estilos.icon} />
            <h2>WHATSAPP</h2>
            <div className={estilos.linha}></div>
            <p>(74) 99999-9999</p>
          </div>
          <div className={estilos.atendimento}>
            <FaClock className={estilos.icon} />
            <h2>ATENDIMENTO</h2>
            <div className={estilos.linha}></div>
            <p>SEG À SÁB: 8:00 ÁS 19:00</p>
          </div>
        </section>
        {/* Fim contato */}
        
        <section className={estilos.qualificacao}>
          <article>
            <h2>A melhor barbearia da região, com estilo e conforto bem perto de você!</h2>
            <p>
              A Barbearia do João está localizada no centro da cidade, de fácil acesso. Oferecemos cortes de cabelo para adultos e crianças, e também cuidamos da sua barba com todo o carinho e atenção.
            </p>
            <div className={estilos.sastifacao}>
              <small><strong>100</strong><em>%</em><br/> Satistifação garantida</small>
              <small><strong>10</strong><em>+<em><br/> Anos de experiência</small>
            </div>
          </article>
          <aside>
            <img src="img21cab.png" alt="imagem de corte de cabelo" />
          </aside>
        </section>
      </main>
    </div>
  );
}
