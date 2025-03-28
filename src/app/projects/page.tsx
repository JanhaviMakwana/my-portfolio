const projects = [
    { title: "Project One", description: "A cool project using React.js" },
    { title: "Project Two", description: "Built with Next.js and Tailwind" },
  ];

  export default function Projects() {
    return (
      <div className="max-w-3xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center">My Projects</h2>
        <div className="mt-6 space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-md shadow">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
