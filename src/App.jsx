import {
  Mail,
  Github,
  FileText,
  Cpu,
  Microchip,
  Zap,
  ArrowRight,
  Orbit,
  MapPin,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function PersonalWebsite() {
  const profile = {
    name: "陈显泽",
    title: "电子信息专业研究生",
    subtitle: "Northeast Forestry University · Embedded AI & Edge Computing",
    research: "嵌入式AI边缘计算",
    intro:
      "目前就读于东北林业大学电子信息专业，研究集中在嵌入式AI边缘计算、人工智能算法部署以及嵌入式系统设计。",
    email: "cxianze@163.com",
    github: "https://github.com/chenxianze",
    scholar: "https://scholar.google.com/",
    cv: "/cv.pdf",
    school: "东北林业大学",
    location: "哈尔滨，中国",
  };

  const navItems = ["首页", "关于", "研究方向", "项目", "科研成果", "技能", "联系"];

  const researchAreas = [
    {
      title: "嵌入式 AI 部署",
      desc: "在资源受限设备上实现高效 AI 推理与模型部署。",
      icon: Cpu,
    },
    {
      title: "边缘计算系统",
      desc: "研究端侧计算与边缘节点协同处理架构。",
      icon: Zap,
    },
    {
      title: "嵌入式系统设计",
      desc: "结合软硬件协同设计构建稳定高效的嵌入式系统。",
      icon: Microchip,
    },
  ];

  const projects = [
    {
      title: "通用数字 IO 板设计与开发",
      period: "2025-2026",
      desc:
        "设计并实现一块通用数字 IO 控制板，实现 24 通道高频数字输入输出功能，同时设计 12V 升压至 60V 的可调电源模块，用于驱动外部设备。",
      tags: ["Embedded Hardware", "Digital IO", "Power Design"],
    },
    {
      title: "科研项目持续更新中",
      period: "Future",
      desc: "后续将逐步补充嵌入式AI部署、边缘计算系统等研究项目。",
      tags: ["Embedded AI", "Edge Computing"],
    },
  ];

  const skills = [
    "C/C++",
    "Python",
    "MATLAB",
    "React",
    "嵌入式开发",
    "Linux",
    "Git",
    "Edge AI",
  ];

  return (
    <div className="min-h-screen bg-[#06111f] text-slate-100 selection:bg-cyan-400/20 selection:text-cyan-100">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.12),_transparent_25%),linear-gradient(to_bottom,_#07101c,_#081223,_#050b16)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111dcc]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#首页" className="group">
            <div className="text-xl font-semibold tracking-[0.18em] text-white">
              {profile.name}
            </div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-300/70">
              Personal Academic Homepage
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative transition hover:text-cyan-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6">
        {/* 首页 */}
        <section
          id="首页"
          className="grid min-h-[calc(100vh-72px)] items-center gap-12 py-16 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs tracking-[0.2em] text-cyan-200 uppercase shadow-[0_0_30px_rgba(34,211,238,0.08)]">
              <Sparkles size={14} />
              Embedded AI · Edge Computing · Research
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Research-oriented Personal Site
              </p>

              <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
                你好，我是{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>

              <p className="text-2xl text-slate-200 md:text-3xl">{profile.title}</p>

              <p className="max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                {profile.subtitle}
              </p>

              <p className="max-w-2xl text-base leading-8 text-slate-300">
                {profile.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#项目"
                className="group inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/15"
              >
                查看项目
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href={profile.cv}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                <FileText className="h-4 w-4" />
                下载简历
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-3 text-sm text-slate-300">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition hover:text-cyan-300"
              >
                <Mail size={17} />
                Email
              </a>

              <a
                href={profile.github}
                target="_blank"
                className="inline-flex items-center gap-2 transition hover:text-cyan-300"
              >
                <Github size={17} />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  academic profile
                </div>
              </div>

              <div className="space-y-5 p-6 font-mono text-sm text-slate-300">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Orbit size={16} />
                  <span className="tracking-[0.2em] uppercase">Research Node</span>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                      identity
                    </p>
                    <p>{">"} {profile.name}</p>
                    <p>{">"} {profile.school}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                      focus
                    </p>
                    <p>{">"} {profile.research}</p>
                    <p>{">"} {profile.location}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>system status</span>
                    <span className="text-cyan-300">active</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="mb-1 flex justify-between text-[11px] text-slate-500">
                        <span>Embedded AI</span>
                        <span>88%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5">
                        <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex justify-between text-[11px] text-slate-500">
                        <span>Edge Computing</span>
                        <span>82%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5">
                        <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex justify-between text-[11px] text-slate-500">
                        <span>System Design</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5">
                        <div className="h-2 w-[85%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 关于 */}
        <section id="关于" className="py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                About
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">关于我</h2>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-lg leading-9 text-slate-300">
                目前就读于东北林业大学电子信息专业，研究兴趣集中在嵌入式AI边缘计算、
                人工智能模型部署以及嵌入式系统设计。
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-2 text-cyan-300">
                  <GraduationCap size={16} />
                  <span className="text-sm uppercase tracking-[0.2em]">School</span>
                </div>
                <p className="text-slate-200">{profile.school}</p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-2 text-cyan-300">
                  <MapPin size={16} />
                  <span className="text-sm uppercase tracking-[0.2em]">Location</span>
                </div>
                <p className="text-slate-200">{profile.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 研究方向 */}
        <section id="研究方向" className="py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Research
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">研究方向</h2>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {researchAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-cyan-400/10 blur-2xl" />
                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                      <Icon size={28} />
                    </div>

                    <div className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-500">
                      0{index + 1}
                    </div>

                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>

                    <p className="mt-3 leading-7 text-slate-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 项目 */}
        <section id="项目" className="py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Projects
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">项目经历</h2>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent md:block" />
          </div>

          <div className="space-y-6">
            {projects.map((p, index) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07]"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 via-sky-400 to-blue-500" />

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <div className="mb-3 text-xs uppercase tracking-[0.22em] text-slate-500">
                      Project 0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {p.title}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                    {p.period}
                  </span>
                </div>

                <p className="mt-5 max-w-4xl leading-8 text-slate-300">{p.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-[#0b1526] px-3 py-1.5 text-xs tracking-[0.08em] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 科研成果 */}
        <section id="科研成果" className="py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Publications
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">科研成果</h2>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent md:block" />
          </div>

          <div className="rounded-[24px] border border-dashed border-white/15 bg-white/5 p-8 text-slate-400 backdrop-blur-xl">
            当前内容暂未补充，可后续在此处添加论文、专利、竞赛、学术报告等科研成果信息。
          </div>
        </section>

        {/* 技能 */}
        <section id="技能" className="py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Skills
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">技能</h2>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent md:block" />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((s, index) => (
              <div
                key={s}
                className="group rounded-[20px] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
              >
                <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="font-medium text-slate-100">{s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 联系 */}
        <section id="联系" className="py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Contact
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">联系</h2>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <Mail size={22} />
              </div>
              <p className="mb-2 text-sm uppercase tracking-[0.22em] text-slate-500">
                Email
              </p>
              <p className="text-slate-100">{profile.email}</p>
            </a>

            <a
              href={profile.github}
              target="_blank"
              className="rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <Github size={22} />
              </div>
              <p className="mb-2 text-sm uppercase tracking-[0.22em] text-slate-500">
                GitHub
              </p>
              <p className="break-all text-slate-100">{profile.github}</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}