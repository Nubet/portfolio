import { useState } from 'react'
import { Star, Github, ExternalLink, Download, ArrowRight, Code, ChevronLeft, ChevronRight, X } from 'lucide-react'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'StudyMood',
    description: 'A cross-platform app bridging productivity with mental wellbeing. Features mood tracking on a 2D energy-pleasantness map, study timers, and quick self-regulation tools like breathing exercises. Built with Kotlin Multiplatform.',
    tags: ['Kotlin Multiplatform', 'Compose', 'SQLDelight', 'Koin'],
    repoLink: 'https://github.com/Nubet/studymood-app-public',
    demoLink: null,
    downloadLink: null,
    featured: true,
    images: [
      '/study-mood/1.jpg',
      '/study-mood/2.jpg',
      '/study-mood/3.jpg',
      '/study-mood/4.jpg',
      '/study-mood/5.jpg',
      '/study-mood/6.jpg',
    ],
  },
  {
    title: 'Grayscale Everywhere',
    description: 'A privacy-first Firefox extension that reduces digital distractions by applying customizable grayscale filters to websites. Features a domain whitelist and zero data collection policy.',
    tags: ['JavaScript', 'Bun', 'Firefox Add-on'],
    repoLink: 'https://github.com/Nubet/Grayscale-Filter-Extension',
    demoLink: null,
    downloadLink: 'https://addons.mozilla.org/en-US/firefox/addon/grayscale-everywhere/',
    featured: true,
    images: [
      '/grayscale-filter/1.jpg',
      '/grayscale-filter/2.jpg',
      '/grayscale-filter/3.jpg',
      '/grayscale-filter/4.jpg',
    ],
  },
]

export default function Projects() {
  const displayedProjects = projects.slice(0, 2)
  const [lightbox, setLightbox] = useState<null | { projectIndex: number; imageIndex: number }>(null)

  const openLightbox = (projectIndex: number) => {
    setLightbox({ projectIndex, imageIndex: 0 })
  }

  const closeLightbox = () => {
    setLightbox(null)
  }

  const activeProject = lightbox ? displayedProjects[lightbox.projectIndex] : null

  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <h2>Featured Projects</h2>
      </div>
      
      <div className={styles.projects}>
        {displayedProjects.map((project, index) => {
          const imageSrc = project.images[0]
          const totalImages = project.images.length
          return (
          <article className={styles.card} key={index}>
            <div className={styles.visual}>
               <button
                 type="button"
                 className={styles.imageButton}
                 onClick={() => openLightbox(index)}
                 aria-label={`Open ${project.title} image`}
               >
                 <img src={imageSrc} alt={project.title} loading="lazy" />
                 <div className={styles.imageOverlay}>
                   <span className={styles.imageBadge}>View gallery</span>
                   <span className={styles.imageCount}>1/{totalImages}</span>
                 </div>
               </button>
            </div>
            
            <div className={styles.content}>
              <div className={styles.header}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.featured && <Star className={styles.featuredIcon} size={18} fill="currentColor" />}
              </div>
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              
              <div className={styles.links}>
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Github size={18} /> Code
                  </a>
                )}
                
                {project.downloadLink ? (
                  <a href={project.downloadLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Download size={18} /> Download
                  </a>
                ) : project.demoLink ? (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <ExternalLink size={18} /> Live Demo
                  </a>
                ) : null}

                {!project.repoLink && !project.demoLink && !project.downloadLink && (
                    <span className={styles.link} style={{ opacity: 0.5, cursor: 'default' }}>
                        <Code size={18} /> In Development
                    </span>
                )}
              </div>
            </div>
          </article>
        )})}
      </div>
      
      <div className={styles.viewAll}>
        <a href="https://github.com/norbertfila?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.viewAllLink}>
          View all projects <ArrowRight size={16} />
        </a>
      </div>
      {activeProject && lightbox && (
        <div className={styles.lightbox} onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close image"
            >
              <X size={20} />
            </button>
            <img
              className={styles.lightboxImage}
              src={activeProject.images[lightbox.imageIndex]}
              alt={`${activeProject.title} screenshot`}
            />
            {activeProject.images.length > 1 && (
              <div className={styles.lightboxControls}>
                <button
                  type="button"
                  className={styles.lightboxControl}
                  onClick={() => {
                    const total = activeProject.images.length
                    const nextIndex = (lightbox.imageIndex - 1 + total) % total
                    setLightbox({ projectIndex: lightbox.projectIndex, imageIndex: nextIndex })
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className={styles.lightboxIndicator}>
                  {lightbox.imageIndex + 1}/{activeProject.images.length}
                </span>
                <button
                  type="button"
                  className={styles.lightboxControl}
                  onClick={() => {
                    const total = activeProject.images.length
                    const nextIndex = (lightbox.imageIndex + 1) % total
                    setLightbox({ projectIndex: lightbox.projectIndex, imageIndex: nextIndex })
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
