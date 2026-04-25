import styles from './Career.module.css'

const career = [
    {
      company: 'Freelance',
      subtitle: 'useme.com',
      role: 'React Web Developer',
      dates: 'March 2026 - Present',
      details: [
        'Delivering custom-built web solutions including landing pages, one-pagers, and digital business cards.',
        'Handling the full process from initial UI design to production-ready code.',
        'Optimizing web performance and ensuring responsive, scalable design.',
      ],
    },
    {
      company: 'SKN Telin',
      subtitle: '(Lodz University of Technology)',
      role: 'Java Backend Developer',
      dates: 'Oct 2025 - Present',
      details: [
        'Developing "IdeaDeck", a centralized platform for academic announcements and student initiatives.',
        'Implementing backend services using Java and Spring Boot, including RESTful APIs for user management and applications.',
        'Integrating Keycloak for secure authentication and identity management.',
        'Collaborating on frontend integration by providing API documentation and example components.',
        'Designed the platform logo and contributed to UI/UX reviews to ensure consistency with backend logic.',
      ],
    },
]

export default function Career() {
  return (
    <section className="section" id="career">
      <div className="section-heading">
        <h2>EXPERIENCE.</h2>
        <div className="shape-circle" style={{ position: 'absolute', left: '-60px', top: '20px', zIndex: -1, width: '80px', height: '80px' }}></div>
      </div>
      <div className={styles.timeline}>
        {career.map((item) => (
          <article className={styles.card} key={item.company}>
            <div className={styles.header}>
              <div className={styles.companyInfo}>
                <h3 className={styles.company}>{item.company}</h3>
                <span className={styles.subtitle}>{item.subtitle}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.role}>{item.role}</span>
                <span className={styles.dates}>{item.dates}</span>
              </div>
            </div>
            <ul className={styles.list}>
              {item.details.map((detail, index) => (
                <li key={index}>
                   <div className={styles.bullet}></div>
                   {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
