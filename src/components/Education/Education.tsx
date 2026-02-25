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
    name: 'InfoSukces Laureate',
    issuer: 'Lodz University of Technology',
    year: '2024',
  },
  {
    name: 'CCNA: Intro to Networks',
    issuer: 'Cisco Networking Academy',
    year: '2025',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-heading">
        <h2>EDUCATION.</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.mainTimeline}>
          {education.map((item) => (
            <article className={styles.timelineCard} key={item.institution}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.institution}>{item.institution}</h3>
                <div className={styles.meta}>
                  <span className={styles.degree}>{item.degree}</span>
                  <span className={styles.dates}>{item.dates}</span>
                </div>
              </div>
              <ul className={styles.list}>
                {item.details.map((detail) => (
                  <li key={detail}>
                    <div className={styles.bullet}></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        
        <div className={styles.certificationsSidebar}>
           <h3 className={styles.sidebarTitle}>CERTIFICATIONS</h3>
           <div className={styles.certList}>
             {certifications.map((cert) => (
               <div className={styles.certCard} key={cert.name}>
                 <div className={styles.certHeader}>
                    <h4 className={styles.certName}>{cert.name}</h4>
                    <span className={styles.certYear}>{cert.year}</span>
                 </div>
                 <p className={styles.certIssuer}>{cert.issuer}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  )
}
