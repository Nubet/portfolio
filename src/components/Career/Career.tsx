import styles from './Career.module.css'

const career = [
    {
      company: 'SKN Telin (Lodz University of Technology)',
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
        <h2>Career</h2>
      </div>
      <div className={styles.timeline}>
        {career.map((item) => (
          <article className={styles.card} key={item.company}>
            <div className={styles.header}>
              <div>
                <h3>{item.company}</h3>
                <p className={styles.role}>{item.role}</p>
              </div>
              <span className={styles.dates}>{item.dates}</span>
            </div>
            <ul>
              {item.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
