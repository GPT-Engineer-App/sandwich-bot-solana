import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">MyWebsite</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold underline">Contact Us</h1>
        <p className="mt-4">
          Feel free to reach out to us at contact@mywebsite.com.
        </p>
      </main>
      <footer className="bg-blue-600 text-white p-4 mt-4">
        <div className="container mx-auto text-center">
          &copy; 2023 MyWebsite. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;