'use client';

const About = () => {
  const skills = [
    { name: 'React/Next.js', level: 90, icon: '⚛️' },
    { name: 'TypeScript', level: 85, icon: '📘' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'Framer Motion', level: 75, icon: '🎭' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#211832] to-[#412B6B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#F25912] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate Developer & Creative Problem Solver
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              With over 3 years of experience in web development, I've had the privilege of 
              working with diverse clients and creating digital solutions that make a real impact. 
              My journey as a freelancer has taught me the importance of understanding client 
              needs and delivering exceptional results.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              I specialize in modern web technologies and have a keen eye for design. 
              Whether it's a simple landing page or a complex web application, I approach 
              each project with enthusiasm and attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#5C3E94] text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                🎯 Goal-Oriented
              </div>
              <div className="bg-[#5C3E94] text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                💡 Creative
              </div>
              <div className="bg-[#5C3E94] text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                ⚡ Fast Delivery
              </div>
            </div>
          </div>

          {/* Skills */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Technical Skills
            </h3>
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={600 + index * 100}
                className="bg-[#5C3E94] p-4 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="text-[#5C3E94] font-bold bg-white px-2 py-1 rounded">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div
                    className="bg-[#F25912] h-3 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;