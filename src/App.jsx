import {
  Mail,
  Github,
  FileText,
  Cpu,
  Microchip,
  Zap,
  ArrowUpRight,
  ChevronRight,
  GraduationCap,
  MapPin,
  Orbit,
  Sparkles,
  Binary,
  SquareDashedMousePointer,
} from "lucide-react";
import { motion } from "framer-motion";

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
      index: "01",
    },
    {
      title: "边缘计算系统",
      desc: "研究端侧计算与边缘节点协同处理架构。",
      icon: Zap,
      index: "02",
    },
    {
      title: "嵌入式系统设计",
      desc: "结合软硬件协同设计构建稳定高效的嵌入式系统。",
      icon: Microchip,
      index: "03",
    },
  ];

  const projects = [
    {
      title: "通用数字 IO 板设计与开发",
      period: "2025-2026",
      desc:
        "设计并实现一块通用数字 IO 控制板，实现 24 通道高频数字输入输出功能，同时设计 12V 升压至 60V 的可调电源模块，用于驱动外部设备。",
      tags: ["Embedded Hardware", "Digital IO", "Power Design"],
      index: "01",
    },
    {
      title: "科研项目持续更新中",
      period: "Future",
      desc:
        "后续将逐步补充嵌入式AI部署、边缘计算系统等研究项目。",
      tags: ["Embedded AI", "Edge Computing"],
      index: "02",
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

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.08,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const lineReveal = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#111827] selection:bg-cyan-100 selection:text-slate-900">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.08),_transparent_26%),radial-gradient(circle_at_85%_12%,_rgba(99,102,241,0.06),_transparent_24%),linear-gradient(to_bottom,_#f8fafc,_#f5f7fb,_#eef2f7)]" />
        <div className="absolute inset-0 opacity-[0.45] [background-image:linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />
        <motion.div
          className="absolute left-[8%] top-[8%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[10%] top-[18%] h-80 w-80 rounded-full bg-indigo-300/10 blur-3xl"
          animate={{ y: [0, -16, 0], x: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#首页" className="group">
            <div className="text-lg font-semibold tracking-[0.18em] text-slate-900">
              {profile.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500">
              Personal Academic Homepage
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                className="group relative text-sm text-slate-600 transition hover:text-slate-900"
              >
                <span className="mr-2 text-[10px] tracking-[0.2em] text-slate-400">
                  0{index + 1}
                </span>
                {item}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Hero */}
        <section
          id="首页"
          className="relative grid min-h-[calc(100vh-72px)] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-y-10">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Sparkles size={14} className="text-cyan-600" />
              Research Portfolio
            </motion.div>

            <div className="space-y-7">
              <motion.div
                className="space-y-4"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <p className="text-[11px] uppercase tracking-[0.4em] text-slate-500">
                  Embedded AI / Edge Computing / Academic Profile
                </p>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-7xl">
                  陈显泽
                </h1>

                <div className="max-w-3xl space-y-3">
                  <p className="text-2xl font-medium tracking-[-0.03em] text-slate-800 md:text-3xl">
                    {profile.title}
                  </p>
                  <p className="text-base leading-8 text-slate-500 md:text-lg">
                    {profile.subtitle}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="max-w-3xl"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <p className="text-base leading-8 text-slate-600 md:text-lg">
                  {profile.intro}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 pt-2"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <a
                  href="#项目"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  查看项目
                  <ChevronRight
                    size={16}
                    className="transition group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href={profile.cv}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  <FileText size={16} />
                  下载简历
                </a>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-6 pt-2 text-sm text-slate-600"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-slate-950"
                >
                  <Mail size={17} />
                  Email
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 transition hover:text-slate-950"
                >
                  <Github size={17} />
                  GitHub
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-br from-cyan-100/70 via-white to-indigo-100/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/85 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div className="flex items-center gap-2 text-slate-700">
                  <Orbit size={16} className="text-cyan-600" />
                  <span className="text-xs uppercase tracking-[0.3em]">
                    Academic Profile
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  Live Overview
                </div>
              </div>

              <div className="space-y-6 p-6">
                <div className="grid gap-4">
                  <motion.div
                    className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                  >
                    <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-slate-400">
                      Identity
                    </div>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p>姓名：{profile.name}</p>
                      <p>学校：{profile.school}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.48 }}
                  >
                    <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-slate-400">
                      Research Focus
                    </div>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p>研究方向：{profile.research}</p>
                      <p>地点：{profile.location}</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 to-cyan-50/50 p-5"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
                      Focus Distribution
                    </div>
                    <div className="text-xs text-cyan-700">Academic</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Embedded AI", value: "88%" },
                      { label: "Edge Computing", value: "82%" },
                      { label: "System Design", value: "85%" },
                    ].map((item, idx) => (
                      <div key={item.label}>
                        <div className="mb-1.5 flex justify-between text-[12px] text-slate-600">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-slate-800 via-cyan-700 to-sky-500"
                            initial={{ width: 0 }}
                            animate={{ width: item.value }}
                            transition={{
                              duration: 0.9,
                              delay: 0.75 + idx * 0.12,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section helper */}
        {[
          {
            id: "关于",
            en: "About",
            title: "关于我",
            content: (
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[30px] border border-slate-200 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
                  <p className="text-lg leading-9 text-slate-650 text-slate-700">
                    目前就读于东北林业大学电子信息专业，研究兴趣集中在嵌入式AI边缘计算、
                    人工智能模型部署以及嵌入式系统设计。
                  </p>
                </div>

                <div className="grid gap-5">
                  <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
                    <div className="mb-3 flex items-center gap-2 text-slate-900">
                      <GraduationCap size={16} className="text-cyan-700" />
                      <span className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        Institution
                      </span>
                    </div>
                    <p className="text-base text-slate-800">{profile.school}</p>
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
                    <div className="mb-3 flex items-center gap-2 text-slate-900">
                      <MapPin size={16} className="text-cyan-700" />
                      <span className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        Location
                      </span>
                    </div>
                    <p className="text-base text-slate-800">{profile.location}</p>
                  </div>
                </div>
              </div>
            ),
          },
        ].map((section, idx) => (
          <section key={section.id} id={section.id} className="py-24">
            <motion.div
              className="mb-12 flex items-end gap-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
            >
              <div className="shrink-0">
                <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                  {section.en}
                </p>
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                  {section.title}
                </h2>
              </div>
              <motion.div
                className="mt-2 hidden h-px origin-left flex-1 bg-gradient-to-r from-slate-900/25 to-transparent md:block"
                variants={lineReveal}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={1}
            >
              {section.content}
            </motion.div>
          </section>
        ))}

        {/* Research */}
        <section id="研究方向" className="py-24">
          <motion.div
            className="mb-12 flex items-end gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="shrink-0">
              <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                Research Areas
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                研究方向
              </h2>
            </div>
            <motion.div
              className="mt-2 hidden h-px origin-left flex-1 bg-gradient-to-r from-slate-900/25 to-transparent md:block"
              variants={lineReveal}
            />
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {researchAreas.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white/85 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                >
                  <div className="absolute right-0 top-0 h-36 w-36 translate-x-10 -translate-y-10 rounded-full bg-cyan-100/70 blur-2xl transition duration-500 group-hover:scale-110" />
                  <div className="relative">
                    <div className="mb-8 flex items-start justify-between">
                      <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-800">
                        <Icon size={26} />
                      </div>
                      <span className="text-[11px] tracking-[0.3em] text-slate-400">
                        {item.index}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section id="项目" className="py-24">
          <motion.div
            className="mb-12 flex items-end gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="shrink-0">
              <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                Selected Projects
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                项目经历
              </h2>
            </div>
            <motion.div
              className="mt-2 hidden h-px origin-left flex-1 bg-gradient-to-r from-slate-900/25 to-transparent md:block"
              variants={lineReveal}
            />
          </motion.div>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <div className="grid lg:grid-cols-[180px_1fr]">
                  <div className="border-b border-slate-200 bg-slate-50/90 p-7 lg:border-b-0 lg:border-r">
                    <div className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
                      Project
                    </div>
                    <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900">
                      {p.index}
                    </div>
                    <div className="mt-8 inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-600">
                      {p.period}
                    </div>
                  </div>

                  <div className="p-7 lg:p-8">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="max-w-3xl text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="mt-1 hidden text-slate-300 transition duration-300 group-hover:text-slate-600 md:block" />
                    </div>

                    <p className="mt-5 max-w-4xl leading-8 text-slate-600">
                      {p.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs tracking-[0.08em] text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="科研成果" className="py-24">
          <motion.div
            className="mb-12 flex items-end gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="shrink-0">
              <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                Publications & Outputs
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                科研成果
              </h2>
            </div>
            <motion.div
              className="mt-2 hidden h-px origin-left flex-1 bg-gradient-to-r from-slate-900/25 to-transparent md:block"
              variants={lineReveal}
            />
          </motion.div>

          <motion.div
            className="rounded-[32px] border border-dashed border-slate-300 bg-white/70 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-lg leading-8 text-slate-600">
                  当前内容暂未补充，可后续在此处添加论文、专利、竞赛、学术报告等科研成果信息。
                </p>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Binary size={18} />
                <SquareDashedMousePointer size={18} />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="技能" className="py-24">
          <motion.div
            className="mb-12 flex items-end gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="shrink-0">
              <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                Skills & Tools
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                技能
              </h2>
            </div>
            <motion.div
              className="mt-2 hidden h-px origin-left flex-1 bg-gradient-to-r from-slate-900/25 to-transparent md:block"
              variants={lineReveal}
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((s, i) => (
              <motion.div
                key={s}
                className="group rounded-[24px] border border-slate-200 bg-white/85 p-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={i}
              >
                <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-slate-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-medium text-slate-800 transition group-hover:text-slate-950">
                  {s}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="联系" className="py-24">
          <motion.div
            className="mb-12 flex items-end gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="shrink-0">
              <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                联系
              </h2>
            </div>
            <motion.div
              className="mt-2 hidden h-px origin-left flex-1 bg-gradient-to-r from-slate-900/25 to-transparent md:block"
              variants={lineReveal}
            />
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.a
              href={`mailto:${profile.email}`}
              className="group rounded-[30px] border border-slate-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="mb-5 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-900">
                <Mail size={20} />
              </div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                Email
              </div>
              <p className="text-lg text-slate-800">{profile.email}</p>
            </motion.a>

            <motion.a
              href={profile.github}
              target="_blank"
              className="group rounded-[30px] border border-slate-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="mb-5 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-900">
                <Github size={20} />
              </div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                GitHub
              </div>
              <p className="break-all text-lg text-slate-800">{profile.github}</p>
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
}