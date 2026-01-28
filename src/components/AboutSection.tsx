import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Brain, Globe } from 'lucide-react';
const AboutSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const education = [{
    degree: 'B.Tech CSE (AI & Data Science)',
    institution: "Vignan's Institute of Information Technology",
    period: '2022 – 2026',
    score: 'CGPA: 7.45'
  }, {
    degree: 'Diploma in Computer Engineering',
    institution: 'Sanketika Polytechnic',
    period: '2019 – 2022',
    score: 'CGPA: 6.95'
  }];
  const languages = ['English', 'Hindi', 'Telugu'];
  const interests = ['Coding', 'Digital Art', 'Podcasting', 'Meditation', 'Volunteering'];
  return <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title gradient-text text-center mx-auto block">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Summary Card */}
          <div className={`glass hover-card rounded-2xl p-6 md:p-8 animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.2s'
        }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-body">
              Driven and enthusiastic AI & Data Science graduate with hands-on experience in machine learning, deep learning, data analysis, cloud computing, and modern web technologies. Passionate about building intelligent, scalable, real-world solutions and staying ahead of cutting-edge AI trends.
            </p>
          </div>

          {/* Education Card */}
          <div className={`glass hover-card rounded-2xl p-6 md:p-8 animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.3s'
        }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <GraduationCap className="text-secondary" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => <div key={index} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-primary font-mono">{edu.period}</span>
                    <span className="text-xs text-neon-green font-mono">{edu.score}</span>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Languages Card */}
          <div className={`glass hover-card rounded-2xl p-6 md:p-8 animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.4s'
        }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center">
                <Globe className="text-neon-green" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map(lang => <span key={lang} className="px-4 py-2 rounded-full bg-neon-green/10 text-neon-green font-mono text-sm border border-neon-green/30">
                  {lang}
                </span>)}
            </div>
          </div>

          {/* Interests Card */}
          <div className={`glass hover-card rounded-2xl p-6 md:p-8 animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{
          transitionDelay: '0.5s'
        }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map(interest => <span key={interest} className="px-4 py-2 rounded-full bg-neon-pink/10 text-neon-pink font-mono text-sm border border-neon-pink/30">
                  {interest}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;