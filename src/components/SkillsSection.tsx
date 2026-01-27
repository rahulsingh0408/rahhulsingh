import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimateSkills(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Machine Learning', level: 90 },
        { name: 'Deep Learning', level: 85 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Generative AI', level: 80 },
      ],
    },
    {
      title: 'Data Science',
      icon: '📊',
      skills: [
        { name: 'Data Analysis', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'PowerBI', level: 80 },
        { name: 'Tableau', level: 75 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Cloud Computing', level: 80 },
        { name: 'Networking', level: 75 },
        { name: 'Cyber Security', level: 70 },
      ],
    },
    {
      title: 'Web Development',
      icon: '💻',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 75 },
      ],
    },
    {
      title: 'Programming',
      icon: '⚡',
      skills: [
        { name: 'C++', level: 85 },
        { name: 'DSA', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title gradient-text text-center mx-auto block">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`glass hover-card rounded-2xl p-6 animate-on-scroll ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${catIndex * 0.1 + 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                      <span className="font-mono text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: animateSkills ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className={`mt-12 max-w-4xl mx-auto animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <h3 className="font-display text-lg font-bold text-center text-foreground mb-6">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'REST APIs', 'Jupyter', 'Pandas', 'NumPy', 'Scikit-learn', 'OpenCV', 'NLP', 'Web Scraping'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full glass neon-border font-mono text-sm text-primary hover:bg-primary/10 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
