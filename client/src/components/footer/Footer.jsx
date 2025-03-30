import { FaInstagram, FaGithub,FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://www.instagram.com/milen_atanasovv/"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100002443156965"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebook className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Milen03/AutoMile-React-project"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 SomeCompany, Inc. All rights reserved. <br />
          made by Milen Atanasov Atanasov
        </p>
      </div>
    </section>
  );
}

export default Footer;
