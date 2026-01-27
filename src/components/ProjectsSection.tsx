import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, X, Cloud, Brain, Recycle, Database } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  icon: React.ReactNode;
  gradient: string;
}

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Weather Web App',
      shortDescription: '5-day forecast using OpenWeatherMap API',
      fullDescription:
        'A responsive weather application that provides accurate 5-day forecasts using the OpenWeatherMap API. Features include location-based weather detection, temperature unit conversion, and beautiful weather animations. Built with vanilla JavaScript and modern CSS for a clean, user-friendly interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'REST API', 'OpenWeatherMap'],
      icon: <Cloud className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'Osteoporosis Risk Prediction',
      shortDescription: 'Image-based prediction using Random Forest',
      fullDescription:
        'An AI-powered medical imaging application that predicts osteoporosis risk using Random Forest classification algorithms. The system analyzes bone density images to provide early detection and risk assessment. Features include image preprocessing, feature extraction, and model interpretation for healthcare professionals.',
      technologies: ['Python', 'Machine Learning', 'Random Forest', 'Image Processing', 'Scikit-learn'],
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'E-Waste Management System',
      shortDescription: 'Responsive web app with tracking & scheduled pickups',
      fullDescription:
        'A comprehensive e-waste management platform that enables users to schedule pickups, track waste collection, and earn rewards for proper disposal. The system includes user authentication, real-time tracking, and an admin dashboard for managing collection routes and inventory.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web App', 'Responsive Design'],
      icon: <Recycle className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-400',
    },
    {
      id: 4,
      title: 'Asset Management Tool',
      shortDescription: 'Web scraping-based automated data extraction system',
      fullDescription:
        'An automated asset management solution that uses web scraping to extract and organize structured data from various sources. Features include scheduled data extraction, data cleaning pipelines, export functionality, and a dashboard for monitoring asset status and changes over time.',
      technologies: ['Python', 'Web Scraping', 'BeautifulSoup', 'Data Automation', 'SQL'],
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-orange-500 to-amber-400',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title gradient-text text-center mx-auto block">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass hover-card rounded-2xl p-6 cursor-pointer group animate-on-scroll ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white`}
                >
                  {project.icon}
                </div>
                <ExternalLink
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-4">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-muted text-muted-foreground font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 rounded-md bg-primary/10 text-primary font-mono text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in neon-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-white`}
              >
                {selectedProject.icon}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              {selectedProject.fullDescription}
            </p>

            <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
