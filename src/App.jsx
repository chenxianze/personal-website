import { Mail, Github, FileText, Cpu, Microchip, Zap } from "lucide-react";

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
      period: "2024",
      desc:
        "设计并实现一块通用数字 IO 控制板，实现 24 通道高频数字输入输出功能，同时设计 12V 升压至 60V 的可调电源模块，用于驱动外部设备。",
      tags: ["Embedded Hardware", "Digital IO", "Power Design"],
    },
    {
      title: "科研项目持续更新中",
      period: "Future",
      desc:
        "后续将逐步补充嵌入式AI部署、边缘计算系统等研究项目。",
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
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Header */}
      <header className="sticky top-0 bg-white border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <div>
            <div className="text-xl font-bold">{profile.name}</div>
            <div className="text-sm text-slate-500">
              Personal Academic Homepage
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-cyan-600">
                {item}
              </a>
            ))}
          </nav>

        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6">

        {/* 首页 */}
        <section id="首页" className="py-20 grid md:grid-cols-2 gap-10">

          <div className="space-y-6">

            <h1 className="text-5xl font-bold">
              你好，我是 <span className="text-cyan-600">{profile.name}</span>
            </h1>

            <p className="text-xl">{profile.title}</p>

            <p className="text-slate-600">{profile.subtitle}</p>

            <p>{profile.intro}</p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="#项目"
                className="bg-cyan-600 text-white px-5 py-3 rounded-lg"
              >
                查看项目
              </a>

              <a
                href={profile.cv}
                className="border px-5 py-3 rounded-lg"
                target="_blank"
              >
                <FileText className="inline w-4 h-4 mr-2" />
                下载简历
              </a>

            </div>

            <div className="flex gap-4 pt-4">

              <a href={`mailto:${profile.email}`} className="flex gap-2">
                <Mail size={18} /> Email
              </a>

              <a href={profile.github} target="_blank" className="flex gap-2">
                <Github size={18} /> GitHub
              </a>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow p-6 font-mono text-sm space-y-2">

            <p>{">"} 姓名：{profile.name}</p>
            <p>{">"} 学校：{profile.school}</p>
            <p>{">"} 研究方向：{profile.research}</p>
            <p>{">"} 地点：{profile.location}</p>

          </div>

        </section>

        {/* 关于 */}
        <section id="关于" className="py-16">

          <h2 className="text-3xl font-bold mb-6">关于我</h2>

          <p className="leading-8">
            我目前就读于东北林业大学电子信息专业，研究兴趣集中在嵌入式AI边缘计算、
            人工智能模型部署以及嵌入式系统设计。
          </p>

        </section>

        {/* 研究方向 */}
        <section id="研究方向" className="py-16">

          <h2 className="text-3xl font-bold mb-10">研究方向</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {researchAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="bg-white rounded-xl shadow p-6">

                  <Icon className="text-cyan-600 mb-4" size={30} />

                  <h3 className="font-semibold text-lg">{item.title}</h3>

                  <p className="text-sm mt-2 text-slate-600">{item.desc}</p>

                </div>
              );
            })}

          </div>

        </section>

        {/* 项目 */}
        <section id="项目" className="py-16">

          <h2 className="text-3xl font-bold mb-10">项目经历</h2>

          <div className="space-y-6">

            {projects.map((p) => (
              <div key={p.title} className="bg-white shadow rounded-xl p-6">

                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <span className="text-sm text-cyan-600">{p.period}</span>
                </div>

                <p className="mt-3 text-slate-600">{p.desc}</p>

                <div className="flex gap-2 mt-4 flex-wrap">

                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* 技能 */}
        <section id="技能" className="py-16">

          <h2 className="text-3xl font-bold mb-10">技能</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {skills.map((s) => (
              <div key={s} className="bg-white p-4 rounded shadow text-center">
                {s}
              </div>
            ))}

          </div>

        </section>

        {/* 联系 */}
        <section id="联系" className="py-16">

          <h2 className="text-3xl font-bold mb-6">联系</h2>

          <p>Email：{profile.email}</p>

          <p>
            GitHub：
            <a className="text-cyan-600 ml-2" href={profile.github}>
              {profile.github}
            </a>
          </p>

        </section>

      </main>

    </div>
  );
}