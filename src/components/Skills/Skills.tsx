import styles from './Skills.module.css'

const skillGroups = [
    {
      title: 'CORE BACKEND',
      description:
        'RESTful API Development | Database Design | OOP',
      color: 'var(--color-blue)',
      items: [
        { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Spring Boot', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
        { name: 'Kotlin', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
      ],
    },
    {
      title: 'INFRASTRUCTURE',
      description:
        'Containerization | Version Control | Workflow',
      color: 'var(--color-red)',
      items: [
        { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'Gradle', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg' },
      ],
    },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <h2>SKILLS.</h2>
        <div className="shape-triangle" style={{ position: 'absolute', right: '0px', top: '10px', zIndex: -1, transform: 'scale(0.8) rotate(180deg)' }}></div>
      </div>
      <div className={styles.skills}>
        {skillGroups.map((group) => (
          <article className={styles.card} key={group.title}>
            <div className={styles.cardHeader} style={{ backgroundColor: group.color }}>
               <h3>{group.title}</h3>
            </div>
            <div className={styles.copy}>
              <p>{group.description}</p>
            </div>
            <div className={styles.grid}>
              {group.items.map((item) => (
                <div className={styles.item} key={item.name} title={item.name}>
                   <img src={item.src} alt={item.name} loading="lazy" />
                   <span className={styles.tooltip}>{item.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
