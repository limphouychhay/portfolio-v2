import ActiveSectionObserver from "@/components/active-section-observer";
import Background from "@/components/background";
import CursorFlare from "@/components/cursor-flare";
import FloatingNavDots from "@/components/floating-nav-dots";
import FloatingParticles from "@/components/floating-particles";
import InteractiveSkillOrb from "@/components/interactive-skill-orb";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import ProjectCard from "@/components/project-card";
import ScrollLink from "@/components/scroll-link";
import { DATA } from "@/data/data";
import { ArrowUpRight, Code, Palette, Zap } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 relative overflow-hidden">
      <FloatingParticles />
      <CursorFlare />
      <ActiveSectionObserver />
      <FloatingNavDots />
      <Background />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-10">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Fixed Navigation */}
          <header className="lg:fixed lg:top-0 lg:left-0 lg:flex lg:h-screen lg:w-1/2 lg:max-w-lg lg:flex-col lg:justify-between lg:py-24 lg:pl-24 lg:pr-8">
            <div>
              <div className="relative">
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-2">
                  <SparklesText className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text ">
                    {DATA.name}
                  </SparklesText>
                </h1>
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-teal-400 animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-blue-400 animate-pulse" />
              </div>

              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                <TextAnimate animation="blurIn" by="character" duration={5}>
                  {DATA.position}
                </TextAnimate>
              </h2>

              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                Passionate mobile developer with clean architecture,{" "}
                <span className="text-teal-400 font-medium">responsive UI</span>
                ,{" "}
                <span className="text-blue-400 font-medium">
                  strong performance
                </span>{" "}
              </p>

              {/* Skills Orbs */}
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-4">
                  {DATA.skill.map((skill) => (
                    <InteractiveSkillOrb key={skill.id} {...skill} />
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max space-y-2">
                  <li>
                    <ScrollLink
                      href="#about"
                      className="nav-link group flex items-center py-3 relative"
                    >
                      <div className="absolute left-0 w-8 h-px bg-gradient-to-r from-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Code className="mr-4 h-4 w-4 text-slate-600 group-hover:text-teal-400 transition-colors duration-300" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-slate-200">
                        About
                      </span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      href="#experience"
                      className="nav-link group flex items-center py-3 relative"
                    >
                      <div className="absolute left-0 w-8 h-px bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Zap className="mr-4 h-4 w-4 text-slate-600 group-hover:text-blue-400 transition-colors duration-300" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-slate-200">
                        Experience
                      </span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      href="#projects"
                      className="nav-link group flex items-center py-3 relative"
                    >
                      <div className="absolute left-0 w-8 h-px bg-gradient-to-r from-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Palette className="mr-4 h-4 w-4 text-slate-600 group-hover:text-purple-400 transition-colors duration-300" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-slate-200">
                        Projects
                      </span>
                    </ScrollLink>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul
              className="ml-1 mt-8 flex items-center space-x-6"
              aria-label="Social media"
            >
              {DATA.social.map(({ icon: Icon, href, color }) => (
                <li key={href}>
                  <Link
                    className={`block transition-all duration-300 transform hover:scale-110 ${color}`}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </header>

          {/* Right Column - Scrollable Content */}
          <main className="pt-24 lg:ml-auto lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section id="about" className="mb-32 lg:mb-48">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-400 via-blue-400 to-purple-400 opacity-30" />

                <div className="space-y-6">
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-slate-200 mb-6">
                      About Me
                      <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400" />
                    </h2>
                  </div>
                  <p>
                    {
                      "I'm a Flutter mobile developer with over 4 years of experience, starting from Flutter 2.0.0"
                    }
                  </p>

                  <p>
                    {
                      "I've built and maintained cross-platform apps in reporting, property management, and telecom self-care. I'm passionate about smooth user experiences, and"
                    }
                    <span className="text-teal-400 font-medium">
                      {" "}
                      building products that solve real problems{" "}
                    </span>
                    {
                      "Whether working solo or with a team, I enjoy turning ideas into real,"
                    }
                    <span className="text-blue-400 font-medium">
                      {" "}
                      impactful apps.
                    </span>
                  </p>

                  <p className="text-slate-300 leading-relaxed">
                    {"Currently, I'm a Senior Front-End Engineer at "}
                    <Link
                      className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-300 relative group"
                      href="https://cellcard.com.kh/en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cellcard
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300" />
                    </Link>
                    , specializing in accessibility and creating inclusive user
                    experiences.
                  </p>

                  <p className="text-slate-300 leading-relaxed">
                    {
                      "When I'm not coding, you'll find me lifting weight, traveling, or exploring new technologies that push the boundaries of development."
                    }
                  </p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-32 lg:mb-48">
              <div className="relative">
                <h2 className="text-2xl font-bold text-slate-200 mb-8">
                  Experience
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" />
                </h2>

                <div className="space-y-8">
                  {DATA.experience.map((job, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -left-8 top-6 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-teal-400/30 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-200 mb-1">
                              {job.link ? (
                                <Link
                                  href={job.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="hover:text-teal-400 transition-colors duration-300"
                                >
                                  {job.title} · {job.company}
                                  <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
                                </Link>
                              ) : (
                                `${job.title} · ${job.company}`
                              )}
                            </h3>
                            <p className="text-sm text-slate-400 font-medium">
                              {job.period}
                            </p>
                          </div>
                        </div>
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-teal-400/10 text-teal-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-32">
              <div className="relative">
                <h2 className="text-2xl font-bold text-slate-200 mb-8">
                  Featured Projects
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400" />
                </h2>

                <div className="grid gap-8">
                  {DATA.project.map((project, index) => (
                    <div
                      key={index}
                      className="transform hover:scale-105 transition-transform duration-300"
                    >
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <div className="relative p-6 bg-slate-800/20 backdrop-blur-sm rounded-lg border border-slate-700/30">
                <p className="leading-relaxed">
                  Crafted with passion using{" "}
                  <Link
                    href="https://nextjs.org/"
                    className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Next.js
                  </Link>
                  ,{" "}
                  <Link
                    href="https://tailwindcss.com/"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tailwind CSS
                  </Link>
                  , and deployed on{" "}
                  <Link
                    href="https://vercel.com/"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vercel
                  </Link>
                  .
                </p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
