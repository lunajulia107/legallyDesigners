import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UseScrollAnimation } from "../components/UseScrollAnimation"; 
import ProjectsCarousel from "../components/ProjectsCarousel";

const Home: React.FC = () => { 
  const firstSection = UseScrollAnimation();
  const secondSection = UseScrollAnimation();
  const thirdSection = UseScrollAnimation();
  const fourthSection = UseScrollAnimation();
  const fifthSection = UseScrollAnimation();
  const sixthSection = UseScrollAnimation();
  const seventhSection = UseScrollAnimation();
  const eighthSection = UseScrollAnimation();

  // Estado para o contador animado
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 4) {
      const timer = setTimeout(() => setCount(count + 1), 150);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <>
      <motion.section
        ref={firstSection.ref}
        initial={{ opacity: 0, y: 20 }}
        animate={firstSection.controls}
        transition={{ duration: 0.6 }}
        className="container pb-5"
        id="inicio">
        <div className="row">
          <div className="col-lg-9">
            <h1 className="display-4 fw-normal w-75">
              Transformamos <span className="fw-bold">marcas</span> em negócios
              prontos para crescer no <span className="fw-bold">digital</span>.
            </h1>

            <div className="align-items-end justify-content-between row">
              <p className="col-lg-8 lead">
                Somos a Legally Designers, uma agência formada por três
                especialistas apaixonadas por design, marketing e desenvolvimento
                de sites.
              </p>

              <div className="box-projects box-transparent col-lg-3 d-lg-block d-none p-4 rounded-4">
                <div className="align-items-center d-flex flex-row gap-2 mb-3">
                  <h3>{count}+</h3>
                  <small>Projetos</small>
                </div>
                <div className="align-items-end d-flex flex-row gap-2 justify-content-between">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={i % 2 === 0 ? "bg-purple" : "bg-water-green"}
                    ></span>
                  ))}
                </div>
              </div>
            </div>

            <div className="align-items-center d-flex flex-wrap gap-3 justify-content-between mt-5 w-75">
              <h3>
                Impulsione sua <br /> presença digital
              </h3>

              <div className="d-flex flex-wrap gap-4">
                <div className="box-image box-images">
                  <img
                    src="images/home/samara.png"
                    alt="Samara Duarte"
                    style={{ marginRight: "-24px" }}
                  />
                  <img
                    src="images/home/camila.png"
                    alt="Camila Bonilha"
                    style={{ marginRight: "-24px" }}
                  />
                  <img src="images/home/julia.png" alt="Julia Rodrigues" />
                </div>

                <div>
                  <h4>3+ Girls</h4>
                  <p>Legally Designers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="align-items-end d-flex flex-wrap gap-3 justify-content-between mt-3 pt-3">
          <a
            href="mailto:legallyDesigners@gmail.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-purple fs-5 p-2 pe-4 ps-4 rounded-5 text-decoration-none text-white"
          >
            Quero impulsionar
            <i className="bi bi-arrow-right ms-3 text-white"></i>
          </a>

          <h6 className="text-white-50">Design Visual</h6>
          <h6 className="text-white-50">Gestão de Redes Sociais</h6> 
          <h6 className="text-white-50">Sites Estratégicos</h6>
        </div>
      </motion.section>

      <motion.section
        ref={secondSection.ref}
        initial={{ opacity: 0, y: 20 }}
        animate={secondSection.controls}
        transition={{ duration: 0.6 }}
        className="container mb-5 mt-5 pb-5 pt-5">
        <div className="align-items-stretch d-flex flex-wrap gap-4 justify-content-between">
          <div className="col-lg-3">
            <img src="/images/home/three.png" alt="Três criadoras" />
            <h4 className="ms-2">
              Criamos com propósito, estratégia e personalidade.
            </h4>
          </div>

          <div className="bg-white col-lg-4 rounded-4">
            <img
              src="/images/home/"
              alt=""
              style={{ height: "100px" }}
            />
          </div>

          <div className="col-lg-3 d-flex flex-column justify-content-end">
            <p className="lead text-end">
              Porque cada detalhe comunica, e o seu merece intenção.
            </p>
          </div>
        </div>
      </motion.section>

      <article id="sobre-nos">
        <motion.section
          ref={thirdSection.ref}
          initial={{ opacity: 0, y: 20 }}
          animate={thirdSection.controls}
          transition={{ duration: 0.6 }}
          className="container mb-5 mt-5 pb-5 pt-5">
          <div className="mt-5 row">
            <div className="col-lg-7">
              <h2 className="display-5 fw-normal">
                A <strong>união de talentos</strong>
                <br />
                tornou tudo <strong>inevitável</strong>
              </h2>
            </div>
            
            <div className="col-lg-5">
              <p className="lead">
                A Legally Designers nasceu da união de três mulheres com talentos
                complementares e uma paixão em comum: dar vida a marcas incríveis no
                digital.
              </p>
            </div> 
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <figure className="col-lg-6 rounded-4" style={{ height: "256px" }}>
                <img
                  src="/images/home/girlsUnited.png"
                  alt="Duas mãos quase se tocando, com os dedos indicadores 
                  apontados um para o outro, numa pose que lembra a famosa cena da 'Criação de Adão' 
                  de Michelangelo. O fundo é iluminado com luzes em tons de roxo e rosa, criando um 
                  efeito dramático e moderno, com iluminação suave que destaca as mãos contra o cenário escuro. 
                  A atmosfera transmite uma sensação de conexão, tensão ou expectativa."
                  className="object-fit-cover w-100 h-100 rounded-4"
                />
              </figure>

              <div className="mt-5 row">
                <div className="col-12 col-sm-6">
                  <h5>Mentes Criativas</h5>
                  <p>Novas perspectivas</p>
                </div>
                <div className="col-12 col-sm-6">
                  <h5 className="fw-medium">Transformando ideias em resultados</h5>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-4 mb-5 mt-3">
                <a
                  href="mailto:legallyDesigners@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-purple fs-5 p-2 pe-4 ps-4 rounded-5 text-decoration-none text-white"
                >
                  Entrar em contato
                  <i className="bi bi-arrow-right ms-3 text-white"></i>
                </a>
                <a
                  href="#projetos"
                  className="btn btn-border-purple fs-5 p-2 pe-4 ps-4 rounded-5 text-decoration-none text-white"
                >
                  Conferir projetos
                  <i className="bi bi-arrow-right ms-3 text-white"></i>
                </a>
              </div>
            </div>

            <div className="align-items-end col-lg-6 d-flex flex-column justify-content-end position-relative" style={{ zIndex: 1 }}>
              {/* Cards sobrepostos */}
              <ul className="position-absolute px-3 w-100" style={{ top: "20px", zIndex: 10 }}>
                <li className="align-items-center box-transparent d-flex flex-row gap-3 p-4 rounded-4">
                  <div className="bg-water-green dot rounded-5"></div>
                  <div>
                    <h5 className="fw-medium mb-2">Onde tudo começou</h5>
                    <p>
                      Entre os estudos da faculdade e vivências, surgiu o desejo de
                      transformar nosso conhecimento em algo aplicável.
                    </p>
                  </div>
                </li>

                <li className="align-items-center d-flex flex-row gap-3 ms-2 p-4 rounded-4">
                  <div className="bg-purple dot rounded-5"></div>
                  <div>
                    <h5 className="fw-medium mb-2">Nos encontramos no processo</h5>
                    <p>
                      Cada troca nos ensinou que, além das nossas diferenças,
                      <br />
                      nossa união em cada projeto faz toda a diferença.
                    </p>
                  </div>
                </li>

                <li className="align-items-center box-transparent d-flex flex-row gap-3 p-4 rounded-4">
                  <div className="bg-water-green dot rounded-5"></div>
                  <div>
                    <h5 className="fw-medium mb-2">Legally em movimento</h5>
                    <p>
                      Hoje entregamos projetos com identidade, propósito e resultado,
                      e seguimos evoluindo.
                    </p>
                  </div>
                </li>
              </ul> 
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={fourthSection.ref}
          initial={{ opacity: 0, y: 20 }}
          animate={fourthSection.controls}
          transition={{ duration: 0.6 }}
          className="container mb-5 mt-5 pb-5 pt-5">
          <h2 className="display-5 fw-normal mb-5 text-center">
            Três mentes <span className="fw-bolder">criativas</span> e um
            <br /> propósito: fazer sua <span className="fw-bolder">marca brilhar</span>.
          </h2>

          <div className="gap-4 gap-lg-0 row">
            <div className="col-lg-4">
              <div className="box-transparent h-100 p-4 rounded-4 text-center d-flex flex-column">
                <div className="box-image mb-4">
                  <img src="images/home/samara.png" alt="Samara Duarte." />
                </div>
                <h3 className="fw-medium mb-2">Samara Duarte</h3>
                <p className="lead">
                  Designer criativa, especialista em identidade visual e conteúdo atrativo para marcas.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box-transparent h-100 p-4 rounded-4 text-center d-flex flex-column">
                <div className="box-image mb-4">
                  <img src="images/home/camila.png" alt="Camila Bonilha." />
                </div>
                <h3 className="fw-medium mb-2">Camila Bonilha</h3>
                <p className="lead">
                  Social Media e Gestão de Instagram, com foco em conversão e relacionamento.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box-transparent h-100 p-4 rounded-4 text-center d-flex flex-column">
                <div className="box-image mb-4">
                  <img src="images/home/julia.png" alt="Julia Rodrigues." />
                </div>
                <h3 className="fw-medium mb-2">Julia Rodrigues</h3>
                <p className="lead">
                  Desenvolvedora de sites com foco em performance, usabilidade e design.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </article>
       
      <motion.section
        ref={fifthSection.ref}
        initial={{ opacity: 0, y: 20 }}
        animate={fifthSection.controls}
        transition={{ duration: 0.6 }}
        className="container mb-5 mt-5 pb-5 pt-5">
        <h2 className="display-5 fw-normal mb-5 text-center">
          Somos para você que é <span className="fw-bolder">excelente</span> no que faz,
          <br />
          mas precisa de uma <span className="fw-bolder">marca à altura</span>.
        </h2>

        <div className="bg-purple rounded-5 w-100">
          <div className="h-100 p-5 row" style={{ minHeight: 432 }}>
            <div className="col-lg-6 d-flex flex-column justify-content-between">
              <h3>
                Se você empreende, presta serviços, vende produtos ou trabalha com criatividade, a gente entende o seu universo.
              </h3>
              <p className="lead">
                Ser bom no que faz é só o começo. Sua presença digital precisa ser forte, estratégica e transmitir confiança.
              </p>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-between">
              <ul className="d-flex flex-wrap justify-content-end" id="ul-sales" style={{ gap: "0.5rem" }}>
                <li className="badge fw-normal">Feed profissional e visualmente atrativo</li>
                <li className="badge fw-normal">Conteúdos estratégicos e com identidade</li>
                <li className="badge fw-normal">Reels e vídeos com propósito</li>
                <li className="badge fw-normal">Site moderno e que converte</li>
              </ul>

              <div>
                <h5 className="fw-medium text-end">Legally Designers</h5>
              </div>
            </div>
          </div>
        </div>
      </motion.section> 

      <motion.section
        ref={sixthSection.ref}
        initial={{ opacity: 0, y: 20 }}
        animate={sixthSection.controls}
        transition={{ duration: 0.6 }}
        className="container mb-5 mt-5 pb-5 pt-5"
        id="servicos">
        <h2 className="display-5 fw-normal mb-5 text-center">
          <span className="fw-bolder">Tudo</span> que sua <span className="fw-bolder">marca</span> <br /> precisa em um
          <span className="fw-bolder"> lugar só</span>
        </h2>

        <div className="gap-4 gap-lg-0 row">
          <div className="col-lg-4 h-100">
            <div className="box-transparent overflow-hidden rounded-4">
              <div className="p-4 pb-0">
                <small className="fw-semibold text-water-green text-uppercase">Marca & Estilo</small>

                <h3 className="fw-medium mb-2 mt-3">Design Visual <br /> Autêntico</h3>
                <p className="lead">
                  Criação e desenvolvimento de branding, identidade visual e materiais gráficos completos para redes sociais, garantindo consistência visual.
                </p>
              </div>

              <div style={{ marginBottom: -50, marginLeft: -30 }}>
                <img src="images/home/colorPalette.png" alt="Forma abstrata em 3D com cores degradê em 
                tons de rosa, roxo e azul, com brilho e relevo." />
              </div>
            </div>
          </div>

          <div className="col-lg-4 h-100">
            <div className="box-transparent overflow-hidden rounded-4">
              <div className="p-4 pb-0 pb-lg-3">
                <small className="fw-semibold text-water-green text-uppercase">Conteúdo & Engajamento</small>

                <h3 className="fw-medium mb-2 mt-3">Social Media <br /> Completa</h3>
                <p className="lead">
                  Planejamento estratégico de conteúdo, gestão e agendamento de postagens, com roteiros e edição de Reels focados em engajamento.
                </p>
              </div>

              <div className="d-flex justify-content-end">
                <img src="images/home/phone.png" alt="Smartphone com a tela exibindo formas 3D sobrepostas, formando o isotipo da Legally 
                Designers em tons de rosa, roxo e azul, com efeito de brilho." />
              </div>
            </div>
          </div>

          <div className="col-lg-4 h-100">
            <div className="box-transparent overflow-hidden rounded-4">
              <div className="p-4 pb-0 pb-lg-5">
                <small className="fw-semibold text-water-green text-uppercase">Site & Conversão</small>

                <h3 className="fw-medium mb-2 mt-3">Desenvolvimento <br /> de Sites</h3>
                <p className="lead pb-0 pb-lg-5">
                  Landing pages, sites institucionais e sistemas de agendamento, com foco em design responsivo e conversão.
                </p>
              </div>

              <div className="d-flex justify-content-end">
                <img src="images/home/window.png" alt="Janela de navegador estilizada em 3D com cores 
                degradê em tons de rosa, azul e roxo, com relevo e três botões circulares no canto superior esquerdo." />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={seventhSection.ref}
        initial={{ opacity: 0, y: 20 }}
        animate={seventhSection.controls}
        transition={{ duration: 0.6 }}
        className="container mb-5 mt-5 pb-5 pt-5"
        id="projetos">
        <div className="row"> 
          <div className="col-lg-7 mb-5"> 
              <h2 className="display-5 fw-normal">
                Projetos <span className="fw-bolder">criativos</span> para marcas com 
                <span className="fw-bolder">identidade e visão</span>  
              </h2>  
          </div>
          <div className="col-lg-5">
              <p className="lead">
                  Confira nossos projetos selecionados e conheça nossa forma de pensar,  
                  criar e entregar soluções com estratégia, estética e impacto.
              </p> 
          </div>
        </div>
        <ProjectsCarousel />
      </motion.section>

      <motion.section
        ref={eighthSection.ref}
        initial={{ opacity: 0, y: 20 }}
        animate={eighthSection.controls}
        transition={{ duration: 0.6 }}
        className="container mb-5 mt-5 pb-5 pt-5"
        > 
        <h2 className="display-5 fw-normal mb-5 text-center">
          Vamos fazer sua <span className="fw-bolder">marca brilhar?</span>  
        </h2>

        <div className="box-transparent rounded-5 w-100" id="box-call-to-action">
          <div className="h-100 p-5 row" style={{ minHeight: 250 }}>
            <div className="col-lg-6 d-flex flex-column mb-5">
              <h3 className="mb-3">
                Pronta para elevar sua marca com um time criativo e estratégico?
              </h3>
              <p className="lead"> 
                Vamos conversar sobre como destacar seu negócio no digital, com identidade, propósito e resultado.
              </p>
              <div className="mt-4">
                <a
                  href="mailto:legallyDesigners@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-purple fs-5 p-2 pe-4 ps-4 rounded-5 text-decoration-none text-white"
                >
                  Fale com a gente
                  <i className="bi bi-arrow-right ms-3 text-white"></i>
                </a>
              </div> 
            </div>

            <div className="align-items-end col-lg-6 d-flex justify-content-end"> 
              <h5 className="fw-medium text-end">Legally Designers</h5>
            </div>
          </div>
        </div>
      </motion.section> 
    </> 
  );
};

export default Home;
