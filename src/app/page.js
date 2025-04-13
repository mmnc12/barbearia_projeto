import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
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

        {/* Inicio seção banner */}
        <section className={estilos.banner}>
          <h1>BARBEARIA DO JOÃO</h1>
          <button>Faça um Agendamento</button>
        </section>
        {/* Fim seção banner */}

        {/* Inicio seção contato */}
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
        {/* Fim seção contato */}

        {/* Inicio seção qualificação */}
        <section className={estilos.qualificacao}>
          <article>
            <h2>A melhor barbearia da região, com estilo e conforto bem perto de você!</h2>
            <p>
              A Barbearia do João está localizada no centro da cidade, de fácil acesso. Oferecemos cortes de cabelo para adultos e crianças, e também cuidamos da sua barba com todo o carinho e atenção.
            </p>
            <div className={estilos.sastifacao}>
              <small><strong>100</strong><em>%</em><br /> Satistifação garantida</small>
              <small><strong>10</strong><em>+</em><br /> Anos de experiência</small>
            </div>
          </article>
          <aside>
            <img src="img21cab.png" alt="imagem de corte de cabelo" />
          </aside>
        </section>
        {/* Fim seção qualificação */}

        {/* Início seção preços e serviços */}
        <section className={estilos.preco_servicos}>
          <h2>CONHEÇA NOSSOS SERVIÇOS</h2>
          <p>Confira abaixo a tabela de preços dos serviços oferecidos pela Barbearia do João</p>
          <div className={estilos.servicos}>
            <div className={estilos.img_texto}>
              <div className={estilos.img}>
                <img src="tesoura-e-pente.png" alt="imagem de um tesoura e um pente" />
              </div>
              <div className={estilos.texto}>
                <h3>CORTE ADULTO</h3>
                <p>Corte de cabelo para adultos. Corte com máquina ou tesoura.</p>
                <p className={estilos.preco}>R$ 35</p>
              </div>
            </div>
            <div className={estilos.img_texto}>
              <div className={estilos.img}>
                <img src="pente.png" alt="Imagem de um pente" />
              </div>
              <div className={estilos.texto}>
                <h3>CORTE INFANTIL</h3>
                <p>Corte de cabelo para crianças. Corte com tesoura.</p>
                <p className={estilos.preco}>R$ 25</p>
              </div>
            </div>
            <div className={estilos.img_texto}>
              <div className={estilos.img}>
                <img src="barba.png" alt="Imagem de um barba" />
              </div>
              <div className={estilos.texto}>
                <h3>APARA A BARBA</h3>
                <p>Apara e ajusta a barba.</p>
                <p className={estilos.preco}>R$ 39</p>
              </div>
            </div>
            <div className={estilos.img_texto}>
              <div className={estilos.img}>
                <img src="maquina.png" alt="imagem de uma maquina de barbear" />
              </div>
              <div className={estilos.texto}>
                <h3>FAZER A BARBA</h3>
                <p>Remoção completa da barba com gilete.</p>
                <p className={estilos.preco}>R$ 30</p>
              </div>
            </div>
          </div>
        </section>
        {/* Fim seção preços e serviços */}

        {/* Início seção do pacotes */}
        <section className={estilos.pacotes}>
          <button>Faça um Agendamento</button>
          <h2>PACOTES</h2>
          <p>Confira abaixo as opções de pacotes de pré-agendamento.</p>
          <div className={estilos.servicos}>
            <div className={estilos.img_texto}>
              <div className={estilos.img}>
                <img src="tesoura-e-pente.png" alt="imagem de um tesoura e um pente" />
              </div>
              <div className={estilos.texto}>
                <h3>PACOTE 1</h3>
                <p>Pacote com 2 agendamentos de corte de cabelo adulto</p>
                <p className={estilos.preco}>R$ 70</p>
              </div>
            </div>
            <div className={estilos.img_texto}>
              <div className={estilos.img}>
                <img src="tesoura-e-pente.png" alt="imagem de um tesoura e um pente" />
              </div>
              <div className={estilos.texto}>
                <h3>PACOTE 2</h3>
                <p>Pacote com 4 agendamentos de corte de cabelo adulto.</p>
                <p className={estilos.preco}>R$ 130</p>
              </div>
            </div>
            <div className={estilos.img_texto}>
              <div className={estilos.img}>
                <img src="tesoura-e-pente.png" alt="imagem de um tesoura e um pente" />
              </div>
              <div className={estilos.texto}>
                <h3>PACOTE 3</h3>
                <p>Pacote com 6 agendamentos de corte de cabelo adulto.</p>
                <p className={estilos.preco}>R$ 200</p>
              </div>
            </div>
            <div className={estilos.img_texto}>
              <div className={estilos.img}>
                <img src="tesoura-e-pente.png" alt="imagem de um tesoura e um pente" />
              </div>
              <div className={estilos.texto}>
                <h3>PACOTE 4</h3>
                <p>Pacote com 8 agendamentos de corte de cabelo adulto.</p>
                <p className={estilos.preco}>R$ 250</p>
              </div>
            </div>
          </div>
        </section>
        {/* Fim seção pacotes */}

        {/* Inicio seção equipe */}
        <section className={estilos.equipe}>
          <button>Faça um Agendamento</button>
          <h2>EQUIPE</h2>
          <p>Nossa equipe é formada por cabelereiros e barbeiros experientes.</p>
          <div className={estilos.servicos}>
            <div className={estilos.img_texto}>
              <div className={estilos.texto}>
                <h3>EXPERIÊNCIA</h3>
                <p>Nossa equipe conta com cabeleiros com pelos menos 10 anos de experiência, garantindo um serviço feito com excelência.</p>
              </div>
            </div>
            <div className={estilos.img_texto}>
              <div className={estilos.texto}>
                <h3>PROFISSIONAIS ATUALIZADOS</h3>
                <p>Nossos profissionais estão preparados tanto para cortes clássicos como para novas tendências.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Fim seção equipe */}

        {/* Inico da seção espaço */}
        <section className={estilos.espaco}>
          <h2>ESPAÇO</h2>
          <div className={estilos.imagens}>
            <img src="img02.png" alt="Imagem de uma cadeira de cabeleireiro" />
            <img src="img03.png" alt="imagem de quantro cadeiras em salão de corte de cabelo" />
            <img src="img05.png" alt="Imagem da parte interna do salão de corte cabelo como nome do salão" />
            <img src="img08.png" alt="Imagem de um cadeira para lavar cabelo em um salão de cabelereiro" />
          </div>
          <div className={estilos.servicos}>
            <div className={estilos.img_texto}>
              <div className={estilos.texto}>
                <h3>AMBIENTE CLIMATIZADO</h3>
                <p>O salão é climatizado para oferecer conforto nos dias mais quentes.</p>
              </div>
            </div>
            <div className={estilos.img_texto}>
              <div className={estilos.texto}>
                <h3>ESTÉTICA MODERNA</h3>
                <p>Nosso espeça possui um visual moderno, oferecendo um local muito aconchegante.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Fim da seção espaço */}

        {/* Início da seção depoimento */}
        <section className={estilos.aparencia_depoimento}>
          <div className={estilos.banner}>
            <h1>A MELHOR BARBEARIA DA REGIÃO BEM PERTINHO DE VOCÊ.</h1>
            <button>Faça um Agendamento</button>
          </div>
          <div className={estilos.depoimentos}>
            <h2>DEPOIMENTOS</h2>
            <p>Confira o que falaram alguns dos nossos clientes e veja porque a barbearia do João é a melhor barbearia da região</p>
          </div>
          <div className={estilos.falas}>
            <div>
              <img src="face1.jpg" alt="Imagem de um homem branco" />
              <div className={estilos.icons}>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
              </div>
              <h3>PAULO</h3>
              <p>Recomendo para quem busca qualidade e profissionalismo..</p>
            </div>
            <div>
              <img src="face2.jpg" alt="Imagem de um homem branco" />
              <div className={estilos.icons}>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
              </div>
              <h3>CARLOS</h3>
              <p>O cuidado com o detalhe é incrível, desde o corte até a barba. Serviço nota 10..</p>
            </div>
            <div>
              <img src="face3.jpg" alt="Imagem de um homem negro" />
              <div className={estilos.icons}>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
              </div>
              <h3>MARCOS</h3>
              <p>A equipe é super qualificada e o ambiente faz você querer voltar sempre</p>
            </div>
            <div>
              <img src="face4.jpg" alt="Imagem de um homem branco" />
              <div className={estilos.icons}>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
              </div>
              <h3>RAFAEL</h3>
              <p>Os barbeiros são experientes e transforma o corte em uma experiência relaxante..</p>
            </div>
            <div>
              <img src="face5.jpg" alt="Imagem de um homem branco" />
              <div className={estilos.icons}>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
              </div>
              <h3>FERNANDO</h3>
              <p>O ambiente é muito bom todo climatizado, além de um corte e tratamento diferenciado..</p>
            </div>
            <div>
              <img src="face7.jpg" alt="Imagem de um homem negro" />
              <div className={estilos.icons}>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
                <small>&#9733;</small>
              </div>
              <h3>LUCAS</h3>
              <p>Atendimento muito bom, ambiente elegante e muito acolhedor, super recomendo..</p>
            </div>
          </div>
        </section>
        {/* Fim da seção depoimento */}

        {/* Início da seção agendamento */}
        <section className={estilos.agendamento}>
          <div>
            <h1>FAÇA SEU AGENDAMENTO</h1>
            <p>Agende seu horário e venha conhecer a melhor barbearia da região.Faça seu agendamento via WhatsApp</p>
            <div className={estilos.contato}>
              <BiSolidPhoneCall className={estilos.icons} />
              <small>
                WhatsApp <br /> (74) 98106-7364
              </small>
            </div>
          </div>
        </section>
        {/* Fim da seção agendamento */}

        {/* Início seção localização */}
        <section className={estilos.localizacao}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.06869118632443!2d-40.36307300539684!3d-10.74367402025921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76d1437c8855aff%3A0x5e96352a16b17889!2sPindoba%C3%A7u%2C%20BA%2C%2044770-000!5e1!3m2!1spt-BR!2sbr!4v1740946154404!5m2!1spt-BR!2sbr" width="100%" height="450" className="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
        {/* Fim seção localização */}

        {/* Início seção footer */}
        <footer className={estilos.footer}>
          <img src="banner2.png" alt="logo" />
          <nav>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Depoimentos</a>
            <a href="#">Agendamento</a>
            <a href="#">Localização</a>
          </nav>
          <div className={estilos.icons}>
            <IoLogoInstagram />
            <FaFacebook />
            <FiTwitter />
          </div>
          <div className={estilos.autor}>
            <p>&reg; 2025 - Desenvolvido por "Manoel Mecias do Nascimento"</p>
          </div>
        </footer>
        {/* Fim seção footer */}

        {/* Inicio do botão whatsapp */}
        <a href="https://wa.me/99999999999" className={estilos.whatsappButton} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={estilos.whatsappIcon} />
        </a>
        {/* Fim do botão whatsapp */}
      </main>
    </div>
  );
}
