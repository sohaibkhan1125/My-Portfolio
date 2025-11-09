'use client';


const Projects = () => {
  const projects = [
    {
      id: 1,
        title: 'Data Generator Tool Website',
        description: 'Easy to use data generator tool website built with Next JS and Tailwind CSS.',
      image: './Project 1.PNG',
      technologies: ['Next JS',  'Tailwind CSS', ],
      liveUrl: 'https://tools4freee.com/',
      
    },
    {
      id: 2,
      title: 'Bundle of Latest Tools',
      description: '100+ tools bundle website built with Next JS and Tailwind CSS.',
      image: 'Project 2.PNG',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS',],
      liveUrl: 'https://dptoolspro.com/',
      
    },
    {
      id: 3,
      title: 'Instagram Video Downloader',
      description: 'Professional Instagram Video Downloader website built with React JS and Tailwind CSS.',
      image: 'Project 3.PNG',
      technologies: ['React', 'Tailwind CSS',],
      liveUrl: 'https://saveyhub.org/',
    },
    {
      id: 4,
      title: 'Image to Pixels Converter',
      description: 'This website can easily convert image to pixels within seconds without any hassle. User friendly and all device responsive website.',
      image: 'Project 4.PNG',
      technologies: ['React', 'Tailwind CSS',],
      liveUrl: 'https://pixelarthome.com/',
      
    },
    {
      id: 5,
      title: 'TikTok Video Downloader',
      description: 'This is a tiktok video downloader website. Through this webiste user can easily download any type of tiktok videos without watermark.',
      image: 'Project 5.jpg',
      technologies: ['React JS', 'Tailwind CSS', 'Node JS'],
      liveUrl: 'https://tik-vib.com/',
      
    },
    {
      id: 6,
      title: 'Merge Images Quickly',
      description: 'This is a image merge website. Within single click, user can easily merge their images without losing their image quality.',
      image: 'Project 6.jpg',
      technologies: ['React', 'Node.js', 'AWS S3', 'JWT'],
      liveUrl: 'https://jpgmerge.com/',
      
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#5C3E94] to-[#211832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-[#F25912] mx-auto mb-8"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.liveUrl}
                    className="bg-[#5C3E94] text-white p-2 rounded-full hover:bg-[#412B6B] hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                 
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#5C3E94] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#5C3E94] text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-[#5C3E94] text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-[#412B6B] hover:scale-105 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;