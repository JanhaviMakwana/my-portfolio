export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </footer>
    );
  }
