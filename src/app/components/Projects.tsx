import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
    fullDescription: 'A comprehensive e-commerce platform built with cutting-edge technologies. Features include real-time inventory tracking, advanced search and filtering, secure payment processing, user authentication, and an intuitive admin dashboard. The platform handles thousands of products and provides a seamless shopping experience across all devices.',
    image: 'https://images.unsplash.com/photo-1669023414171-56f0740e34cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzc4NDAwNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization dashboard for business intelligence and performance tracking.',
    fullDescription: 'An advanced analytics dashboard that transforms complex data into actionable insights. Features interactive charts, customizable widgets, real-time data updates, export capabilities, and collaborative sharing. Designed to help businesses make data-driven decisions with ease and confidence.',
    image: 'https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzc4NDAwNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Data Visualization',
    technologies: ['React', 'D3.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    link: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management tool with drag-and-drop functionality and team features.',
    fullDescription: 'A powerful task management application designed for modern teams. Features include drag-and-drop kanban boards, real-time collaboration, task dependencies, time tracking, notifications, file attachments, and detailed reporting. Perfect for agile teams and project managers.',
    image: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzc4NDAwNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Productivity',
    technologies: ['React', 'Firebase', 'Material-UI', 'React DnD'],
    link: '#',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool for marketers and content creators.',
    fullDescription: 'An innovative AI-powered platform that generates high-quality content for various purposes. Includes blog post generation, social media captions, email templates, SEO optimization, and multi-language support. Uses advanced natural language processing to create engaging and relevant content.',
    image: 'https://images.unsplash.com/photo-1599507593362-50fa53ed1b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzc4NDAwNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'AI/ML',
    technologies: ['Python', 'React', 'OpenAI API', 'FastAPI', 'Docker'],
    link: '#',
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'Modern social networking platform with real-time messaging and content sharing.',
    fullDescription: 'A full-featured social media platform that connects people worldwide. Includes user profiles, real-time messaging, photo and video sharing, stories, news feed algorithm, hashtags, notifications, and privacy controls. Built with scalability and user experience as top priorities.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzc4NDAwNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Social Network',
    technologies: ['React', 'GraphQL', 'Node.js', 'WebSocket', 'AWS'],
    link: '#',
  },
  {
    id: 6,
    title: 'Code Collaboration Tool',
    description: 'Real-time code editor and collaboration platform for developers.',
    fullDescription: 'A comprehensive code collaboration platform enabling developers to work together seamlessly. Features live code editing, syntax highlighting, video chat, screen sharing, version control integration, code reviews, and project management. Supports multiple programming languages and frameworks.',
    image: 'https://images.unsplash.com/photo-1731839329447-ab62f6e1d93a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzc4NDAwNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Developer Tools',
    technologies: ['React', 'Monaco Editor', 'WebRTC', 'Socket.io', 'Express'],
    link: '#',
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my recent work showcasing creativity, technical expertise, and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}
