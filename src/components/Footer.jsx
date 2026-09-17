const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-xs">
              DS
            </span>
            <span className="text-gray-900 font-semibold text-lg">
              Dev <span className="text-pink-500 font-bold">Stack</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-500 max-w-xs">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-gray-500">
            <a href="https://github.com" className="hover:text-gray-900">GitHub</a>
            <a href="https://twitter.com" className="hover:text-gray-900">Twitter</a>
            <a href="https://linkedin.com" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>

        {LINK_GROUPS.map(function (group) {
          return (
            <div key={group.title}>
              <h4 className="text-gray-900 font-semibold text-xs tracking-wide uppercase">
                {group.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {group.links.map(function (link) {
                  return (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}