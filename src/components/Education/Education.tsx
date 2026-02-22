import styles from './Education.module.css'

const education = [
  {
    institution: 'Lodz University of Technology',
    degree: "Engineer's Degree in Computer Science",
    dates: 'Oct 2024 - Present',
    details: [
      'Currently in 2nd Year (Expected Graduation: 2027).',
      'Coursework includes Algorithms & Data Structures, OOP (C++), Java Fundamentals, Databases, and Computer Networks.',
      'Engaged in Interdisciplinary Problem-Based Learning Projects.',
    ],
  },
]

const certifications = [
  {
    name: 'InfoSukces Laureate 2023/2024',
    issuer: 'Lodz University of Technology',
    year: '2024',
  },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: '2025',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-heading">
        <h2>Education</h2>
      </div>
      <div className={styles.timeline}>
        {education.map((item) => (
          <article className={styles.timelineCard} key={item.institution}>
            <div className={styles.timelineHeader}>
              <div>
                <h3>{item.institution}</h3>
                <p className={styles.role}>{item.degree}</p>
              </div>
              <span className={styles.dates}>{item.dates}</span>
            </div>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      
      {/* Simple Certifications List */}
      <div className={styles.certificationsGrid}>
         {certifications.map((cert) => (
           <div className={styles.certCard} key={cert.name}>
             <div className={styles.certHeader}>
                <h3>{cert.name}</h3>
                <span className={styles.dates}>{cert.year}</span>
             </div>
             <p className={styles.certIssuer}>{cert.issuer}</p>
           </div>
         ))}
      </div>
    </section>
  )
}
