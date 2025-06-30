import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  indication: string;
  link: string;
} 

const projects: Project[] = [
  {
    id: 1,
    title: 'Hidratação Facial',
    category: 'Design Visual',
    imageUrl: '/images/camila.png',
    indication: "Pele ressecada, sem viço ou com aspecto cansado.",
    link: '/catalogo#hidratacao-facial'
  },
  {
    id: 2,
    title: 'Limpeza de Pele',
    category: 'Gestão de Redes Sociais',
    imageUrl: '/images/samara.png',
    indication: "Controle de oleosidade, acne e remoção de cravos.",
    link: '/catalogo#limpeza-pele'
  },
  {
    id: 3,
    title: 'Drenagem Linfática',
    category: 'Sites Estratégicos',
    imageUrl: '/images/julia.png',
    indication: "Retenção de líquidos, inchaço e melhora da circulação.",
    link: '/catalogo#drenagem-linfatica'
  },
  {
    id: 4,
    title: 'Drenagem Linfática',
    category: 'Sites Estratégicos',
    imageUrl: '/images/julia.png',
    indication: "Retenção de líquidos, inchaço e melhora da circulação.",
    link: '/catalogo#drenagem-linfatica'
  }
];

function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = (): void => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (): void => {
    setCurrentIndex(prevIndex =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleProjects = (): Service[] => {
    const numCards = projects.length;
    const cardsToShow = 4;
    const visible: Service[] = [];

    for (let i = 0; i < cardsToShow; i++) {
      visible.push(projects[(currentIndex + i) % numCards]);
    }

    return visible;
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <small className="fw-semibold mb-2 text-water-green text-uppercase">Legally Designers</small>

        <div className="d-flex flex-wra gap-2">
          <button
              aria-label="Anterior"
              className="btn btn-border-purple d-none d-md-flex p-2 pb-1 pt-1 rounded-circle text-white"
              onClick={goToPrevious}
          >
              <i className="bi bi-chevron-left"></i>
          </button>
          <button
              aria-label="Próximo"
              className="btn btn-border-purple d-none d-md-flex p-2 pb-1 pt-1 rounded-circle text-white"
              onClick={goToNext}
          >
              <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div> 

      <div className="container container-sm-fluid mt-4 overflow-hidden px-0">
          <ul className="flex-nowrap row ps-1">
              {getVisibleProjects().map((project) => (
                  <li key={project.id} className="col-12 col-md-5 col-lg-4">
                      <div className="align-items-start box-transparent d-flex flex-column h-100 p-4 rounded-4 w-100"> 
                          <img
                              alt={project.title}
                              className="card-img-top mb-3 rounded-4"
                              src={project.imageUrl}
                              style={{
                                  maxHeight: "525px",
                                  objectFit: "cover",
                                  width: "100%"
                              }}
                          /> 
                          <small className="fw-medium mb-3 text-water-green text-uppercase">{project.category}</small>
                          <h5>{project.title}</h5> 
                          <p>{project.indication}</p>
                            
                          <div className="d-flex justify-content-end mt-3 w-100">
                              <a
                              className="btn btn-purple m-0 rounded-5 text-decoration-none text-white"
                              href={project.link}
                              >
                                  Mais detalhes <i className="bi bi-arrow-right ms-2 text-white"></i>
                              </a>
                          </div> 
                      </div>
                  </li>
              ))}
          </ul>
      </div>
    </>
  );
}

export default ProjectsCarousel;
