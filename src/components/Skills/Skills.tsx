import styles from './Skills.module.css'

const skillGroups = [
    {
      title: 'Core Backend & Languages',
      description:
        'RESTful API Development  | Database Design  | OOP ',
      items: [
        { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Spring Boot', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
        { name: 'Kotlin', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
      ],
    },
    {
      title: 'Tools & Infrastructure',
      description:
        ' Containerization  | Version Control Workflow | Dependency Management ',
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
        <h2>Skills</h2>
      </div>
      <div className={styles.skills}>
        {skillGroups.map((group) => (
          <article className={styles.card} key={group.title}>
            <div className={styles.copy}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <div className={styles.grid}>
              {group.items.map((item) => (
                <div className={styles.item} key={item.name} title={item.name}>
                   <img src={item.src} alt={item.name} loading="lazy" />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
