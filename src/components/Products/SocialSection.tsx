import { MessageCircleMore } from 'lucide-react';

const SocialSection = () => {
  return (
    <div className="fixed right-4 bottom-5 flex flex-col gap-3 z-50">
      <button className="bg-green-500 text-white rounded-full p-3 hover:bg-green-700 transition">
        <MessageCircleMore className="fill-white text-green-500 w-6 h-6" />
      </button>

      <a
        href="https://wa.me/8801896016252"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-3 hover:bg-green-700 transition"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12.04 2C7.39 2 3.52 5.92 3.52 10.67c0 1.77.53 3.4 1.48 4.85L2 22l6.8-1.89c1.37.77 2.94 1.2 4.24 1.2 4.65 0 8.52-3.92 8.52-8.67C20.56 5.92 16.69 2 12.04 2zm3.62 14.54a.79.79 0 01-.6.55c-.75.39-1.76.88-2.39.93-.32.03-.68.01-1.02-.12-.35-.14-1.07-.44-1.63-.84-.57-.4-1.12-.96-1.57-1.57a6.2 6.2 0 01-.97-2.14c-.16-.54-.03-.83.12-.98.13-.13.29-.27.4-.4.14-.15.28-.2.43-.2.13 0 .26.01.39.04.13.04.29.13.43.29.15.17.43.41.48.51.05.1.09.2.03.32-.07.13-.2.27-.37.44-.16.18-.32.35-.45.47-.1.1-.2.2-.1.34.1.13.28.35.61.64.32.3.66.57 1.05.81.4.24.8.44 1.22.61.46.18.84.26 1.15.31.25.04.45.02.6-.08.19-.11.6-.22.69-.37.09-.15.09-.27.06-.37-.03-.1-.13-.26-.26-.4-.14-.15-.29-.35-.43-.49-.15-.15-.29-.26-.2-.39.09-.12.59-.29.93-.34.35-.05.65-.01.89.04.2.04.46.07.66.11.2.05.4.15.54.29.15.17.29.35.39.54.1.18.17.36.19.49.03.1-.03.2-.1.33z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialSection;
