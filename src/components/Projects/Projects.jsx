import React, {useContext, useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import {Container, Row, Col} from 'react-bootstrap'
import PortfolioContext from '../../context/context'
import Title from '../Title/Title'
import ProjectImg from '../Image/ProjectImg'

const Projects = () => {
  const {projects} = useContext(PortfolioContext)
  
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])
  
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Experiência e Projetos"/>
          <Row>
            {projects.map((project) => {
              const {title, info, info2, url, repo, img, id} = project
              
              return (
                <Col key={id} lg={4} sm={12} className="col">
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                          ''}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || '#!'}
                        >
                          Link
                        </a>
                      )}
                      
                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                  {
                    img && (
                      <Col lg={8} sm={12}>
                        <Fade
                          right={isDesktop}
                          bottom={isMobile}
                          duration={1000}
                          delay={1000}
                          distance="30px"
                        >
                          <div className="project-wrapper__image">
                            {url && (
                              <a
                                href={url || '#!'}
                                target="_blank"
                                aria-label="Project Link"
                                rel="noopener noreferrer"
                              >
                                <Tilt
                                  options={{
                                    reverse: false,
                                    max: 8,
                                    perspective: 1000,
                                    scale: 1,
                                    speed: 300,
                                    transition: true,
                                    axis: null,
                                    reset: true,
                                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                                  }}
                                >
                                  <div data-tilt className="thumbnail rounded">
                                    <ProjectImg alt={title} filename={img}/>
                                  </div>
                                </Tilt>
                              </a>
                            )}
                          </div>
                        </Fade>
                      </Col>
                    )
                  }
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Projects
