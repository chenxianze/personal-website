export default function PersonalWebsite() {
  const profile = {
    name: "陈显泽",
    title: "电子信息专业研究生",
    research: "研究方向：嵌入式AI边缘计算",
    intro: "电子信息专业研究生，人工智能、嵌入式系统设计、边缘计算。",
    email: "cxianze@163.com",
    github: "https://github.com/chenxianze",
    school: "东北林业大学",
  };

  const navItems = ["首页", "关于我", "项目", "科研经历", "技能", "联系我"];

  const projects = [
    {
      title: "项目一：通用数字IO开发板",
      desc: "围绕传感器数据采集、处理与可视化构建完整系统，实现多源数据融合、状态监测与结果展示，提升系统稳定性与扩展能力。",
      tags: ["嵌入式", "边缘计算", "数据可视化"],
    },
    {
      title: "项目二：嵌入式控制平台",
      desc: "基于软硬件协同设计实现控制逻辑优化，完成设备通信、任务调度与功能验证，强化嵌入式系统开发与联调能力。",
      tags: ["MCU", "通信协议", "系统设计"],
    },
    {
      title: "项目三：科研辅助工具",
      desc: "面向科研场景开发轻量化工具页面，用于实验数据整理、结果展示和文档输出，提高研究流程效率与信息呈现质量。",
      tags: ["React", "Tailwind", "科研工具"],
    },
  ];

  const researchItems = [
    {
      title: "嵌入式AI边缘计算方向研究",
      period: "2024 - 至今",
      desc: "围绕嵌入式AI边缘计算开展研究，关注人工智能算法在资源受限设备上的部署优化、系统实现与实际应用结合，持续推进实验设计与结果验证。",
    },
    {
      title: "科研实践与论文积累",
      period: "研究生阶段",
      desc: "参与课题讨论、文献调研、实验设计、数据分析与论文撰写，逐步形成独立开展科研工作的能力，持续提升技术表达与研究总结能力。",
    },
  ];

  const skills = [
    "人工智能基础",
    "嵌入式系统设计",
    "边缘计算",
    "Python",
    "JavaScript",
    "MATLAB",
    "C / C++",
    "Git / Linux",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-cyan-200/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.14),_transparent_25%),radial-gradient(circle_at_left,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(to_bottom,_#f8fafc,_#eef6ff)]" />

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-semibold tracking-wide text-slate-900">
              {profile.name}
            </div>
            <div className="text-xs text-slate-500">Personal Academic Homepage</div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="transition hover:text-cyan-600"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <section
          id="首页"
          className="grid min-h-[88vh] items-center gap-10 py-20 md:grid-cols-2"
        >
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-cyan-600/15 bg-cyan-50 px-4 py-1 text-sm text-cyan-700">
              Graduate Student · Electronic Information
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                你好，我是<span className="text-cyan-700"> {profile.name}</span>
              </h1>
              <p className="text-lg text-slate-700 md:text-xl">{profile.title}</p>
              <p className="text-base leading-8 text-slate-600">{profile.research}</p>
              <p className="max-w-xl text-base leading-8 text-slate-600">
                {profile.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#项目"
                className="rounded-2xl bg-cyan-600 px-5 py-3 font-medium text-white transition hover:scale-[1.02] hover:bg-cyan-700"
              >
                查看项目
              </a>
              <a
                href="#联系我"
                className="rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-800 transition hover:border-cyan-600 hover:text-cyan-700"
              >
                联系我
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-200/50 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-cyan-400" />
                <div className="h-3 w-3 rounded-full bg-blue-400" />
                <div className="h-3 w-3 rounded-full bg-slate-300" />
              </div>
              <div className="space-y-4 font-mono text-sm text-slate-600">
                <p>&gt; 身份：{profile.title}</p>
                <p>&gt; 单位：{profile.school}</p>
                <p>&gt; 方向：嵌入式AI边缘计算</p>
                <p>&gt; 关键词：人工智能 / 嵌入式 / 边缘计算</p>
                <p>&gt; 状态：持续学习与探索中...</p>
              </div>
            </div>
          </div>
        </section>

        <section id="关于我" className="py-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-700">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">个人简介</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm md:col-span-2">
              <p className="leading-8 text-slate-700">
                我目前就读于东北林业大学电子信息相关专业，研究兴趣集中在嵌入式AI边缘计算。
                平时关注人工智能算法与嵌入式系统设计的结合，注重通过科研训练和项目实践提升系统开发、
                工程实现与技术创新能力，希望未来在边缘智能与嵌入式应用方向持续深入探索。
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-slate-700">
                <li>
                  <span className="text-slate-400">学历：</span>硕士研究生
                </li>
                <li>
                  <span className="text-slate-400">专业：</span>电子信息
                </li>
                <li>
                  <span className="text-slate-400">方向：</span>嵌入式AI边缘计算
                </li>
                <li>
                  <span className="text-slate-400">兴趣：</span>科研、开发、技术实践
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="项目" className="py-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-700">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">项目经历</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{project.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-600/10 bg-cyan-50 px-3 py-1 text-xs text-cyan-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="科研经历" className="py-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-700">
              Research
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">科研经历</h2>
          </div>

          <div className="space-y-6">
            {researchItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-sm text-cyan-700">{item.period}</span>
                </div>
                <p className="mt-4 leading-8 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="技能" className="py-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-700">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">技能栈</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm transition hover:border-cyan-500/40 hover:text-cyan-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="联系我" className="py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-700">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">联系方式</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-700">
              欢迎围绕科研交流、项目合作或技术讨论与我联系。你可以通过邮箱或代码仓库进一步了解我的工作。
            </p>
            <div className="mt-6 flex flex-col gap-4 text-slate-700 md:flex-row md:items-center md:gap-8">
              <a
                className="transition hover:text-cyan-700"
                href={`mailto:${profile.email}`}
              >
                邮箱：{profile.email}
              </a>
              <a
                className="transition hover:text-cyan-700"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub：{profile.github}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}