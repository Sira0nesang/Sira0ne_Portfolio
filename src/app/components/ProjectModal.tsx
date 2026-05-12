import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    category: string;
    technologies: string[];
    link?: string;
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fadeIn" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50 w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-slideUp">
          <div className="relative">
            {/* Header Image */}
            <div className="relative h-80 overflow-hidden rounded-t-lg">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Dialog.Close asChild>
                <button
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </Dialog.Close>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {project.category}
                </span>
              </div>

              <Dialog.Title className="text-3xl font-bold text-gray-900 mb-4">
                {project.title}
              </Dialog.Title>

              <Dialog.Description className="text-gray-600 mb-6 leading-relaxed">
                {project.fullDescription}
              </Dialog.Description>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="pt-4 border-t">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
