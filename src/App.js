import React, { useState, useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import {
  ArrowRight,
  Smartphone,
  Layout,
  Zap,
  Github,
  Linkedin,
  Mail,
  X,
  MoveUpRight,
  Menu,
  Target,
  Lightbulb,
  TrendingUp,
  Twitter,
  Bot,
  Loader2,
  User,
  Sparkles,
  ChevronRight,
  Play,
  CheckCircle,
  Calendar,
  Clock,
  Code2,
  Cpu,
  Sigma,
  Image as ImageIcon,
  Briefcase,
  MapPin,
  Building,
  MessageCircle,
  Phone,
  Copy,
  Palette,
  Wind,
  Layers,
  Terminal,
  Upload,
} from "lucide-react";

/**
 * ==========================================
 * 🛠️ 配置中心 (USER CONFIGURATION)
 * ==========================================
 */
const PROFILE = {
  name: "周哲",
  englishName: "Ian Curtis",
  brand: "周哲的设计空间",
  brandSub: "Zhou Zhe's Design Space",
  email: "cantakemeyesoffu@gmail.com",
  wechat: "Moonl1ghtDrive",
  title: "UI&UX Designer",
  location: "Shanghai, China",
  bio: `爱好电影、健身、咖啡、摇滚乐、漫画;
恐怖片、Cult片重度依赖;
最喜欢的乐队是Joy Division、The Doors、King Crimson、Radiohead;
最喜欢的漫画角色是蝙蝠侠、超人、格斯;
举铁菜鸡,三大项PR总成绩330KG`,
  available: true,
  // 这里的图片目前是 Unsplash 占位符，部署时请替换为您自己的链接或本地路径
  avatar: "/images/avatar.jpg",
};

const SOCIAL_LINKS = {
  twitter: "https://twitter.com/your_handle",
  linkedin: "https://linkedin.com/in/your_profile",
  github: "https://github.com/your_username",
};

const SKILLS = [
  "Figma",
  "Sketch",
  "LanHu",
  "Framer",
  "Axure",
  "Gemini",
  "Mid Journey",
  "...",
];
const API_KEY = "AIzaSyCRO6MKXZn8XyJyW_tNsn7w6SPG8IqR44k";
const ACCENT_COLOR = "#DA205A";

// 职业经历数据
const EXPERIENCE = [
  {
    year: "2025 - Present",
    company: "上海申嘉城",
    role: "Design Director",
    shortDesc: "把控所有设计相关内容的总体视觉风格、与客户恰接业务相关事宜",
    fullDesc:
      "负责公司整体设计战略的制定与执行，统筹品牌视觉输出，直接对接核心客户需求，确保设计交付的高质量与商业价值的统一。",
    skills: ["Design Management", "Client Communication", "Visual Strategy"],
  },
  {
    year: "2023 - 2024",
    company: "苏州奢拍猫",
    role: "UI/UX Designer",
    shortDesc: "0-1二手奢侈品交易平台全链路UI/UX设计到落地",
    fullDesc:
      "主导了奢拍猫APP从0到1的设计过程，包括用户体验路径规划、高保真界面设计及设计规范的建立。通过优化竞拍流程，显著提升了用户的参与度。",
    skills: ["Mobile Design", "0-1 Product", "Design System"],
  },
  {
    year: "2021 - 2022",
    company: "Free Lancer",
    role: "UI/UX Designer",
    shortDesc:
      "涉猎web3数字藏品、台球杆交易平台小程序与税务、开票app以及品牌海报等小型项目的设计。",
    fullDesc:
      "作为独立设计师，服务于多个领域的初创团队。负责了从Web3数字藏品平台的概念设计，到实用型小程序（台球交易、税务开票）的UI交互，以及品牌视觉物料的创意输出，积累了丰富的跨领域设计经验。",
    skills: ["Web3", "Freelancing", "Prototyping"],
  },
  {
    year: "2015 - 2020",
    company: "湖南农业大学",
    role: "食品科学与工程",
    shortDesc: "教育经历",
    fullDesc:
      "在校期间除了主修课程外，深度自学了交互设计与数字媒体艺术，奠定了扎实的设计理论基础。",
    skills: ["Self-Learning", "Cross-disciplinary"],
  },
];

const PROJECTS = [
  {
    id: "jianji",
    year: "2024",
    client: "Self-Initiated",
    title: "简记 Jianji",
    subtitle: "Fintech / Productivity",
    desc: "Redefining personal finance with a zero-friction, 3-step entry system.",
    icon: Zap,
    color: "#DA205A",
    cover: "/images/j-cover.png",
    longImage: "/images/j.png",
    content: {
      intro:
        "针对 Z 世代打造的极简记账工具。在信息过载的时代，我们做减法，通过'3步记一笔'的交互哲学，让记账回归最纯粹的记录本质。",
      challenge:
        "市面上的竞品大多臃肿不堪，开屏广告、理财社区、复杂的预算设置让用户在'记录'这一核心行为前就产生了巨大的心理阻力。",
      solution:
        "采用了激进的'纯净主义'策略。首屏直接展示核心数据，通过底部抽屉（Drawer）承载记账流程，将平均操作路径从 7 次点击缩减为 3 次。",
      stats: [
        {
          label: "User Retention",
          value: "45%",
          context: "远超行业平均水平 (30%)，用户粘性极高",
        },
        {
          label: "Avg. Entry Time",
          value: "< 3s",
          context: "对比竞品提升 50% 记录效率",
        },
        {
          label: "App Rating",
          value: "4.9",
          context: "基于本人亲测五星好评",
        },
      ],
    },
    features: ["抽屉式交互", "去广告纯净模式", "DIN 工业字体"],
    colors: ["#DA205A", "#FFEB33", "#121212"],
  },
  {
    id: "shepaimao",
    year: "2023",
    client: "ShePaiMao Inc.",
    title: "ShePaiMao",
    subtitle: "E-Commerce / Live Stream",
    desc: "Bridging the trust gap in luxury resale through visualized authentication chains.",
    icon: Smartphone,
    color: "#7B61FF",
    cover: "/images/s-cover.png",
    longImage: "/images/s.png",
    content: {
      intro:
        "融合直播与竞拍的奢侈品交易平台。通过可视化的鉴定链条与沉浸式黑金 UI，在数字世界重构了高净值人群的消费信任。",
      challenge:
        "二手奢侈品交易的核心痛点是'非标品信任'。用户无法触碰实物，且拍卖模式天然带有紧迫感，容易导致决策焦虑。",
      solution:
        "构建了'全链路可视化鉴定'系统，将抽象的鉴定服务转化为可视化的时间轴。配合直播间的实时互动，消解了用户的不安全感。",
      stats: [
        {
          label: "GMV Growth",
          value: "+120%",
          context: "季度环比持续增长，核心品类爆发",
        },
        {
          label: "Avg. View Time",
          value: "140m",
          context: "深度沉浸的用户使用时长",
        },
        {
          label: "Trust Score",
          value: "9.8",
          context: "基于平台 500+ 笔交易售后反馈",
        },
      ],
    },
    features: ["直播竞拍", "可视化鉴定", "黑金尊贵 UI"],
    colors: ["#7B61FF", "#78EAF9", "#000000"],
  },
  {
    id: "admin",
    year: "2023",
    client: "Internal Tool",
    title: "Nexus Dashboard",
    subtitle: "B2B / Data Viz",
    desc: "The operational neural network. Processing massive logistics data with Futura precision.",
    icon: Layout,
    color: "#2E5CFF",
    cover: "/images/ht-cover.png",
    longImage: "/images/ht.png",
    content: {
      intro:
        "平台的神经中枢。我们将海量物流与审核数据转化为高可读性的可视化图表，利用 Futura 字体的几何感，赋予数据理性的美感。",
      challenge:
        "运营人员每天需处理上万条商品审核与物流信息，传统表格界面信息密度过大，导致视觉疲劳和高频误操作。",
      solution:
        "引入'数据驾驶舱'概念，利用卡片式布局对信息进行降噪处理。关键指标使用 Futura 字体放大展示，异常状态通过色彩实时预警。",
      stats: [
        {
          label: "Ops Efficiency",
          value: "+35%",
          context: "每周为运营团队节省约 200 工时",
        },
        {
          label: "Data Points",
          value: "1M+",
          context: "实时并发处理与可视化渲染能力",
        },
        {
          label: "Error Rate",
          value: "-15%",
          context: "显著降低人工录入与审核失误",
        },
      ],
    },
    features: ["数据驾驶舱", "批量工作流", "暗黑模式适配"],
    colors: ["#FFFFFF", "#F5F5F5", "#2E5CFF"],
  },
];

/**
 * ==========================================
 * BRAND ICONS (SVG)
 * ==========================================
 */
const GoogleLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const FigmaLogo = () => (
  <svg
    viewBox="0 0 15 24"
    className="w-4 h-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 24c2.071 0 3.75-1.679 3.75-3.75V16.5H7.5c-2.071 0-3.75 1.679-3.75 3.75S5.429 24 7.5 24z"
      fill="#0ACF83"
    />
    <path
      d="M0 11.25c0-2.071 1.679-3.75 3.75-3.75H7.5v7.5H3.75C1.679 15 0 13.321 0 11.25z"
      fill="#A259FF"
    />
    <path
      d="M7.5 0v7.5H11.25c2.071 0 3.75-1.679 3.75-3.75S13.321 0 11.25 0H7.5z"
      fill="#F24E1E"
    />
    <path
      d="M0 3.75C0 1.679 1.679 0 3.75 0H7.5v7.5H3.75C1.679 7.5 0 5.821 0 3.75z"
      fill="#F24E1E"
    />
    <path
      d="M7.5 7.5v7.5H11.25c2.071 0 3.75-1.679 3.75-3.75S13.321 7.5 11.25 7.5H7.5z"
      fill="#1ABCFE"
    />
  </svg>
);

const ReactLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 text-[#61DAFB]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse
      rx="10"
      ry="4.5"
      transform="rotate(60 12 12)"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <ellipse
      rx="10"
      ry="4.5"
      transform="rotate(120 12 12)"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <ellipse rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const TailwindLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 text-[#38B2AC]"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.001 10.3c-3.2 0-5.2-1.6-5.6-4.4 1.6.8 3.2.4 4.8-1.2 0 0 0 0 0 0 2.4-2.4 5.2-3.2 8.4-2.4.8.4 1.2 1.2 1.2 2 0 3.2-2 5.2-5.6 4.4-1.6-.8-3.2-.4-4.8 1.2 0 0 0 0 0 0-2.4 2.4-5.2 3.2-8.4 2.4-.8-.4-1.2-1.2-1.2-2 3.2 0 5.2-2 5.6-4.4 0 0 .4-.8 1.2-.8.8 0 1.6.4 2.4 1.2 0 0 0 0 0 0 1.2 1.2 2.8 2 4.4 2 2.4 0 4.4-1.2 5.6-3.2z" />
  </svg>
);

const GeminiLogo = () => (
  <div className="relative w-5 h-5">
    <Sparkles className="w-full h-full text-[#8E75FF] animate-pulse" />
  </div>
);

/**
 * ==========================================
 * ENGINE: ALGORITHMIC TORUS (DONUT)
 * ==========================================
 */
const AlgorithmicDonutHero = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newOpacity = Math.max(0, 1 - scrollY / (windowHeight * 0.8));
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0,
      height = 0;
    let particles = [];
    let animationFrameId;
    let autoRotX = 0.8;
    let autoRotY = 0;

    const resize = () => {
      // Robust resize handling
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
      } else {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      const densityTheta = 120;
      const densityPhi = 60;

      for (let i = 0; i < densityTheta; i++) {
        const theta = (i / densityTheta) * Math.PI * 2;
        for (let j = 0; j < densityPhi; j++) {
          const phi = (j / densityPhi) * Math.PI * 2;
          particles.push({
            theta,
            phi,
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            friction: 0.96,
            spring: 0.01,
            baseSize: Math.random() * 1.5 + 0.5,
          });
        }
      }
    };

    const animate = () => {
      if (width <= 0) return;
      ctx.clearRect(0, 0, width, height);
      autoRotY += 0.002;
      autoRotX = 0.8 + Math.sin(autoRotY * 0.5) * 0.1;

      const R = Math.min(width, height) * 0.25;
      const r = Math.min(width, height) * 0.12;
      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 1000;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        let x3 = (R + r * Math.cos(p.phi)) * Math.cos(p.theta);
        let y3 = (R + r * Math.cos(p.phi)) * Math.sin(p.theta);
        let z3 = r * Math.sin(p.phi);

        let y3_r = y3 * Math.cos(autoRotX) - z3 * Math.sin(autoRotX);
        let z3_r = y3 * Math.sin(autoRotX) + z3 * Math.cos(autoRotX);
        y3 = y3_r;
        z3 = z3_r;

        let x3_r = x3 * Math.cos(autoRotY) + z3 * Math.sin(autoRotY);
        z3_r = -x3 * Math.sin(autoRotY) + z3 * Math.cos(autoRotY);
        x3 = x3_r;
        z3 = z3_r;

        const scaleProj = fov / (fov + z3);
        const targetX = centerX + x3 * scaleProj;
        const targetY = centerY + y3 * scaleProj;

        const homeDx = targetX - p.x;
        const homeDy = targetY - p.y;
        let ax = homeDx * p.spring;
        let ay = homeDy * p.spring;

        const mouseDx = mx - p.x;
        const mouseDy = my - p.y;
        const dist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        const interactRadius = 60;

        if (dist < interactRadius) {
          const force = 1 - dist / interactRadius;
          ax += mouseDx * force * 0.05;
          ay += mouseDy * force * 0.05;
          ax += (Math.random() - 0.5) * 0.5;
          ay += (Math.random() - 0.5) * 0.5;
        }

        p.vx += ax;
        p.vy += ay;
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.x += p.vx;
        p.y += p.vy;

        const depthFactor = scaleProj;
        const size = Math.max(0.1, p.baseSize * depthFactor * 1.5);
        const alpha = Math.max(0.1, Math.min(1, (z3 + 300) / 500));

        const speed = Math.abs(p.vx) + Math.abs(p.vy);
        const rCol = 255;
        const gCol = Math.min(255, speed * 10);
        const bCol = Math.min(255, 128 + speed * 20);

        ctx.fillStyle = `rgba(${rCol}, ${gCol}, ${bCol}, ${alpha})`;
        ctx.fillRect(p.x, p.y, size, size);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    // Touch support
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };
    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchstart", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("resize", resize);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 ease-out"
      style={{ opacity: opacity }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Top Glow (Subtle) */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none mix-blend-screen"
        style={{
          height: "250px",
          opacity: 0.15,
          background:
            "conic-gradient(from 0deg at 50% 0%, rgba(218, 32, 90, 1) 0deg, rgba(107, 18, 44, 0) 100deg, rgba(107, 18, 44, 0) 260deg, rgba(218, 32, 90, 1) 360deg)",
          filter: "blur(60px)",
          transform: "translateZ(0)",
        }}
      />

      {/* Bottom Glow (Restrained) */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none mix-blend-screen"
        style={{
          height: "250px",
          opacity: 0.4,
          background:
            "conic-gradient(from 180deg at 50.03% 94.28%, rgba(218, 32, 90, 1) 0deg, rgba(107, 18, 44, 0) 180.25deg, rgba(218, 32, 90, 1) 360deg)",
          filter: "blur(15px)",
          transform: "translateZ(0)",
        }}
      />

      <div className="absolute inset-0 bg-radial-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
    </div>
  );
};

/**
 * ==========================================
 * UI COMPONENTS
 * ==========================================
 */

const MagneticButton = ({ children, className = "", onClick, href = null }) => {
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMove = (e) => {
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.3;
    const y = (e.clientY - (top + height / 2)) * 0.3;
    setPos({ x, y });
  };
  const handleLeave = () => setPos({ x: 0, y: 0 });
  const Element = href ? "a" : "button";
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };
  return (
    <Element
      ref={btnRef}
      {...props}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      className={`relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] active:scale-95 cursor-pointer ${className}`}
    >
      {children}
    </Element>
  );
};

const ExperienceCard = ({ item, onClick }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const handleMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div
      className="relative group cursor-pointer"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
    >
      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border border-white/20 bg-[#050505] group-hover:border-[#DA205A] group-hover:bg-[#DA205A] transition-colors duration-300 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(218,32,90,0.5)]">
        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="relative bg-white/[0.02] border border-white/5 p-8 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:translate-x-2 group-hover:bg-white/[0.05] group-hover:border-white/10 group-hover:shadow-[0_0_40px_rgba(218,32,90,0.15)]">
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(218, 32, 90, 0.15), transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none border border-[#DA205A] rounded-2xl opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              {item.company}
              <ArrowRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-[#DA205A] -rotate-45 group-hover:rotate-0 transform duration-300"
              />
            </h4>
            <span className="text-xs font-mono text-[#DA205A] bg-[#DA205A]/10 px-3 py-1 rounded-full">
              {item.year}
            </span>
          </div>
          <p className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
            <Briefcase size={14} className="text-gray-500" /> {item.role}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4 mt-4 line-clamp-2">
            {item.shortDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const handleMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;
    setRotation({ x: rotateX, y: rotateY });
  };
  const handleLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };
  const Icon = project.icon;
  const glowColor = project.color || ACCENT_COLOR;

  return (
    <div
      className="relative w-full h-[500px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
    >
      <div
        ref={cardRef}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${
            rotation.y
          }deg) scale(${isHovered ? 1.02 : 1})`,
          boxShadow: isHovered ? `0 0 80px -10px ${glowColor}66` : "none",
        }}
        className="w-full h-full rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-500 ease-out overflow-hidden backdrop-blur-sm relative"
      >
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}26, transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none border rounded-[2.5rem] z-50 opacity-0 transition-opacity duration-300"
          style={{
            borderColor: glowColor,
            opacity: isHovered ? 1 : 0,
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
        <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] z-10">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out scale-110 opacity-0"
            style={{
              backgroundImage: `url(${project.cover})`,
              opacity: isHovered ? 0.5 : 0,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-between p-10">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                {Icon && <Icon size={20} className="text-white" />}
              </div>
              <span className="text-xs font-mono text-white/60 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full bg-black/30">
                {project.year}
              </span>
            </div>
            <div
              className={`transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="p-3 rounded-full bg-white text-black shadow-lg">
                <MoveUpRight size={18} />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl font-bold text-white mb-2 tracking-tighter leading-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-white/50 uppercase tracking-widest">
                {project.subtitle}
              </p>
            </div>
            <div className={`h-px bg-white/10 relative overflow-hidden w-full`}>
              <div
                className={`absolute inset-0 bg-white transition-all duration-700 ease-in-out ${
                  isHovered ? "w-full" : "w-0"
                }`}
              />
            </div>
            <p
              className={`text-gray-400 text-sm leading-relaxed line-clamp-3 transition-colors ${
                isHovered ? "text-gray-200" : ""
              }`}
            >
              {project.desc}
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={onClick}
        className="absolute inset-0 z-30 cursor-pointer"
        style={{ borderRadius: "2.5rem" }}
      />
    </div>
  );
};

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-2xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      <div className="relative w-full h-[100vh] sm:h-[95vh] sm:w-[95vw] bg-[#080808] sm:rounded-[2rem] border border-white/10 overflow-hidden flex flex-col animate-in slide-in-from-bottom-[10%] duration-700 shadow-2xl">
        <div
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none mix-blend-screen"
          style={{ backgroundColor: project.color }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-[0.04] pointer-events-none mix-blend-screen"
          style={{ backgroundColor: project.color }}
        />
        <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-50 pointer-events-none">
          <div className="pointer-events-auto bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex gap-3 items-center">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: project.color }}
            />
            <span className="text-xs font-mono text-white uppercase tracking-widest">
              {project.client}
            </span>
          </div>
          <button
            onClick={onClose}
            className="pointer-events-auto w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:text-white transition-all duration-300 shadow-lg"
            style={{ "--hover-color": project.color }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = project.color)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide relative z-10">
          <div className="h-[65vh] w-full relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.cover})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 p-8 md:p-20 w-full bg-gradient-to-t from-[#080808] to-transparent pt-32">
              <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-6 leading-[0.9]">
                {project.title}
              </h1>
              <div className="flex items-center gap-6 text-sm font-mono text-white/60 uppercase tracking-widest">
                <span>{project.year}</span>
                <span className="w-1 h-1 bg-white/60 rounded-full" />
                <span>UI/UX Design</span>
                <span className="w-1 h-1 bg-white/60 rounded-full" />
                <span>Case Study</span>
              </div>
            </div>
          </div>
          <div className="max-w-[1600px] mx-auto p-8 md:p-20 space-y-32 relative">
            <div className="max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-light leading-relaxed text-white/90">
                {project.content.intro}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/10 pt-20">
              <div className="lg:col-span-7 space-y-20">
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-[#080808] border border-white/20 rounded-full flex items-center justify-center">
                    <Target size={12} style={{ color: project.color }} />
                  </div>
                  <h3
                    className="text-sm font-mono mb-6 uppercase tracking-widest"
                    style={{ color: project.color }}
                  >
                    The Challenge
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 leading-loose">
                    {project.content.challenge}
                  </p>
                </div>
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-[#080808] border border-white/20 rounded-full flex items-center justify-center">
                    <Lightbulb size={12} style={{ color: project.color }} />
                  </div>
                  <h3
                    className="text-sm font-mono mb-6 uppercase tracking-widest"
                    style={{ color: project.color }}
                  >
                    The Solution
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 leading-loose">
                    {project.content.solution}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pl-12">
                <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 h-full backdrop-blur-sm">
                  <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-12 flex items-center gap-3">
                    <TrendingUp size={16} /> Impact & Metrics
                  </h3>
                  <div className="space-y-8">
                    {project.content.stats &&
                      project.content.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="relative pl-4 border-l-2 border-white/5 group hover:border-white/20 transition-colors duration-500"
                        >
                          <div className="flex flex-col gap-1">
                            <div className="flex items-baseline gap-4">
                              <div className="text-5xl font-bold text-white tracking-tighter">
                                {stat.value}
                              </div>
                              <div className="text-xs text-white/60 font-mono uppercase tracking-widest">
                                {stat.label}
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed font-mono mt-2">
                              // {stat.context}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    Design DNA
                  </h3>
                  <p className="text-gray-500 max-w-md">
                    A visual language constructed to ensure scalability,
                    consistency, and emotional resonance.
                  </p>
                </div>
                <div className="flex gap-6">
                  {project.colors &&
                    project.colors.map((c, i) => (
                      <div key={i} className="group relative">
                        <div
                          className="w-16 h-16 rounded-full border border-white/10 shadow-2xl"
                          style={{ backgroundColor: c }}
                        />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          {c}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="mt-20 w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111]">
                {project.longImage ? (
                  <img
                    src={project.longImage}
                    alt="High Fidelity UI"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-[80vh] relative group">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <ImageIcon size={64} className="text-white/10 mb-6" />
                      <p className="text-white/20 font-mono uppercase tracking-widest text-sm">
                        High Fidelity UI Showcase
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="p-16 text-center border-t border-white/10 mt-20 bg-[#080808] relative z-10">
            <button
              onClick={onClose}
              className="text-white font-bold text-lg hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
              style={{ color: project.color }}
            >
              <X size={18} /> Close Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceDetail = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-[#080808] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Decor */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#DA205A]/20 rounded-full blur-3xl" />
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Building size={24} className="text-[#DA205A]" />
            <h3 className="text-2xl font-bold text-white">
              {experience.company}
            </h3>
          </div>
          <div className="flex gap-4 text-sm font-mono text-white/50 mb-8 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2">
              <Briefcase size={14} /> {experience.role}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> {experience.year}
            </span>
          </div>

          <h4 className="text-lg font-semibold text-white mb-4">Overview</h4>
          <p className="text-gray-300 leading-relaxed mb-8">
            {experience.fullDesc}
          </p>

          <h4 className="text-sm font-mono text-[#DA205A] uppercase tracking-widest mb-4">
            Key Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Unable to copy", err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">期待你的联系~</h3>
          <p className="text-white/50 text-sm mt-2">
            Let's build something amazing together.
          </p>
        </div>

        <div className="space-y-4">
          {/* WeChat Item */}
          <div
            className="group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#DA205A]/50 hover:bg-[#DA205A]/5 transition-all cursor-pointer"
            onClick={() => handleCopy("Moonl1ghtDrive")}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-500">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-mono">
                  WeChat
                </p>
                <p className="text-white font-medium group-hover:text-[#DA205A] transition-colors">
                  Moonl1ghtDrive
                </p>
              </div>
              <div className="ml-auto text-white/20 group-hover:text-[#DA205A]">
                <Copy size={16} />
              </div>
            </div>
            {/* QR Placeholder */}
            <div className="aspect-square w-full bg-black/50 rounded-xl border border-white/5 group-hover:border-[#DA205A] group-hover:shadow-[0_0_20px_-5px_rgba(218,32,90,0.3)] transition-all flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/wechat-qrcode.png')] bg-center bg-contain bg-no-repeat opacity-80 mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#DA205A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Email Item */}
          <div
            className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#DA205A]/50 hover:bg-[#DA205A]/5 transition-all cursor-pointer"
            onClick={() => handleCopy("cantakemeyesoffu@gmail.com")}
          >
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-500">
              <Mail size={20} />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-white/40 uppercase tracking-widest font-mono">
                Email
              </p>
              <p className="text-white font-medium group-hover:text-[#DA205A] transition-colors truncate">
                cantakemeyesoffu@gmail.com
              </p>
            </div>
            <div className="ml-auto text-white/20 group-hover:text-[#DA205A]">
              <Copy size={16} />
            </div>
          </div>
        </div>

        {copied && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#DA205A] text-white text-xs font-bold rounded-full shadow-lg animate-in fade-in slide-in-from-bottom-2">
            复制成功 Copied!
          </div>
        )}
      </div>
    </div>
  );
};

// Powered By Carousel Component
const PoweredBy = () => {
  const brands = [
    { name: "Google", icon: GoogleLogo, color: "#FFFFFF", isRect: true },
    { name: "Gemini", icon: GeminiLogo, color: "#8E75FF" },
    { name: "Figma", icon: FigmaLogo, color: "#FFFFFF" },
    { name: "React", icon: ReactLogo, color: "#61DAFB" },
    { name: "Tailwind", icon: TailwindLogo, color: "#38B2AC" },
    { name: "Lucide", icon: Layout, color: "#F56565" },
    { name: "WebGL", icon: Cpu, color: "#FFFFFF" },
  ];

  return (
    <section className="py-24 bg-[#050505] overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-[0.2em]">
          Powered By
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

        <div className="flex animate-scroll gap-8 px-8 min-w-max">
          {[...brands, ...brands, ...brands].map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors ${
                  brand.isRect ? "min-w-[140px] justify-center" : ""
                }`}
              >
                <div className="p-1 rounded-lg" style={{ color: brand.color }}>
                  <IconComponent size={20} />
                </div>
                <span className="font-medium text-gray-300">{brand.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const NeonCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[10000] mix-blend-screen hidden md:block"
      style={{ marginLeft: "-1rem", marginTop: "-1rem" }}
    >
      <div className="absolute inset-0 bg-white rounded-full opacity-50 scale-25" />
      <div
        className="absolute inset-[-20px] rounded-full opacity-40 blur-md"
        style={{
          background: `radial-gradient(circle, ${ACCENT_COLOR}, transparent 70%)`,
        }}
      />
    </div>
  );
};

const GeminiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: `Hi there! I'm ${PROFILE.name}'s AI assistant. Ask me anything about my work. ✨`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateResponse = async (userQuery) => {
    setIsLoading(true);
    const systemPrompt = `
      You are an AI digital avatar for ${PROFILE.name}.
      Context: ${JSON.stringify(PROJECTS)}
      Keep it brief and professional.
    `;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
          }),
        }
      );

      if (!response.ok) throw new Error("API Error");
      const data = await response.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "Connection error.";
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "System offline." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    const userText = inputValue;
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInputValue("");
    generateResponse(userText);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[100]">
        <MagneticButton
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform"
        >
          {isOpen ? <X size={20} /> : <Sparkles size={20} />}
        </MagneticButton>
      </div>
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-[90vw] md:w-[350px] h-[500px] bg-[#111] border border-white/10 rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl text-sm ${
                  msg.role === "user"
                    ? "bg-white text-black self-end ml-10"
                    : "bg-white/10 text-white self-start mr-10"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="text-white/50 text-xs p-2">Typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t border-white/10 bg-black"
          >
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me something..."
              className="w-full bg-white/10 text-white p-3 rounded-lg text-sm outline-none focus:ring-1 focus:ring-white/50"
            />
          </form>
        </div>
      )}
    </>
  );
};

/**
 * ==========================================
 * MAIN APP
 * ==========================================
 */

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroRefreshKey, setHeroRefreshKey] = useState(0);

  // Image fallback for avatar
  const [avatarUrl, setAvatarUrl] = useState(PROFILE.avatar);
  const [avatarError, setAvatarError] = useState(false);

  const smoothScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1200;
    let startTime = null;

    const anim = (now) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      window.scrollTo(0, start + (end - start) * ease);
      if (progress < 1) requestAnimationFrame(anim);
    };
    requestAnimationFrame(anim);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setHeroRefreshKey((prev) => prev + 1);
  };

  const handleAvatarError = () => {
    setAvatarError(true);
  };

  const handleAvatarUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setAvatarUrl(url);
      setAvatarError(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#DA205A] selection:text-white font-sans overflow-x-hidden cursor-none">
      <Analytics />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@100;400;700&display=swap');
        
        :root {
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }

        body {
          font-family: var(--font-sans);
        }

        .font-mono {
          font-family: var(--font-mono);
        }
      `}</style>

      <NeonCursor />

      {/* Navigation - Updated Link Order */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            onClick={handleLogoClick}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-black text-sm group-hover:scale-110 group-hover:bg-[#DA205A] group-hover:text-white transition-all duration-300 shadow-lg">
              Z
            </div>
            <div className="flex flex-col -space-y-1 leading-none justify-center">
              <span className="font-bold text-lg tracking-tight group-hover:opacity-80 transition-opacity">
                {PROFILE.brand}
              </span>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mt-0.5">
                {PROFILE.brandSub}
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-12 text-sm font-bold text-white/60">
            {["About", "Work", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => smoothScroll(item.toLowerCase())}
                className="hover:text-white hover:scale-105 transition-all uppercase tracking-widest text-xs"
              >
                {item}
              </button>
            ))}
          </div>

          <MagneticButton
            onClick={() => setContactOpen(true)}
            className="hidden md:flex px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-[#DA205A] hover:border-[#DA205A] transition-all duration-300"
          >
            Available for Hire
          </MagneticButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Algorithmic Donut Background */}
        <AlgorithmicDonutHero key={heroRefreshKey} />

        <div className="relative z-10 text-center space-y-16 max-w-6xl pointer-events-none">
          {/* Badge */}
          <div className="flex justify-center pointer-events-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DA205A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DA205A]"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/80">
                Portfolio 2025
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4 pointer-events-auto">
            <h1 className="text-6xl md:text-[8rem] font-bold font-mono tracking-tighter leading-[0.9] text-white select-none flex flex-col items-center gap-2 mix-blend-difference">
              <span className="tracking-widest hover:text-[#DA205A] transition-colors duration-500 cursor-default">
                PORTFOLIO
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30 tracking-tight">
                FOR ZHOUZHE
              </span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed font-light pointer-events-auto">
            欢迎来到我的
            <span className="text-white font-bold border-b-2 border-[#DA205A] mx-1">
              设计空间
            </span>
            ，该网站作品内容均为本人设计，建议在一个令你感到舒适的环境中查阅。
          </p>

          <div className="pt-10 pointer-events-auto">
            <MagneticButton
              onClick={() => smoothScroll("about")}
              className="group relative px-12 py-6 bg-white text-black rounded-full font-bold text-lg tracking-tight overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3 group-hover:gap-6 transition-all duration-300">
                Explore Work <ArrowRight size={20} />
              </span>
              <div className="absolute inset-0 bg-[#DA205A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Explore Work <ArrowRight size={20} />
              </span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* About Section (Reordered: Now First) */}
      <section
        id="about"
        className="py-40 px-6 bg-black/20 backdrop-blur-sm relative z-20"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-24 border-b border-white/10 pb-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none">
              ABOUT <span style={{ color: ACCENT_COLOR }}>ME</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Left: Sticky Profile */}
            <div className="md:col-span-4">
              <div className="sticky top-32">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-8 group border border-white/10">
                  {/* Avatar Image with Fallback/Upload */}
                  {avatarError || !avatarUrl ? (
                    <label className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                      <Upload className="w-8 h-8 text-white/50 mb-2" />
                      <span className="text-xs text-white/50">
                        Upload Photo
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div
                      className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                      style={{ backgroundImage: `url(${avatarUrl})` }}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute -inset-1 bg-gradient-to-tr from-[#DA205A] to-purple-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700 -z-10" />
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-white">
                    {PROFILE.name}
                  </h2>
                  <span className="text-xs font-mono text-gray-500">
                    {PROFILE.englishName}
                  </span>
                </div>
                <p className="text-[#DA205A] font-mono text-sm mb-6 font-bold">
                  {PROFILE.title}
                </p>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm whitespace-pre-line">
                  {PROFILE.bio}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-8">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Based in {PROFILE.location}
                </div>

                {/* Tech Stack moved here */}
                <div className="pt-8 border-t border-white/10">
                  <h4 className="flex items-center gap-3 text-white font-bold mb-4 text-sm">
                    <Palette size={16} /> Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="md:col-span-8">
              <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-12 border-b border-white/10 pb-4">
                Experience Timeline
              </h3>

              <div className="relative space-y-12 pl-8 border-l border-white/10 ml-4 md:ml-0">
                {EXPERIENCE.map((item, i) => (
                  <div
                    key={i}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedExperience(item)}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border border-white/20 bg-[#050505] group-hover:border-[#DA205A] group-hover:bg-[#DA205A] transition-colors duration-300 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content Card */}
                    <ExperienceCard
                      item={item}
                      onClick={() => setSelectedExperience(item)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Reordered: Now Second) */}
      <section
        id="work"
        className="relative z-20 py-40 px-6 border-t border-white/10 bg-[#050505]"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-24 pb-8 border-b border-white/10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none">
              Selected <br />
              <span style={{ color: ACCENT_COLOR }}>Works</span>
            </h2>
            <div className="hidden md:flex gap-12 text-xs font-mono uppercase tracking-widest text-gray-400">
              <span>01 — Research</span>
              <span>02 — Strategy</span>
              <span>03 — Design</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={i}
                project={p}
                onClick={() => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section
        id="contact"
        className="py-40 px-6 text-center relative overflow-hidden bg-black/40 backdrop-blur-md border-t border-white/10"
      >
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12 leading-none text-white">
            Let's <br /> Talk.
          </h2>

          <div className="flex justify-center gap-6 mb-24">
            <MagneticButton
              onClick={() => setContactOpen(true)}
              className="px-12 py-6 rounded-full bg-white text-black font-bold text-xl hover:bg-[#DA205A] hover:text-white transition-colors shadow-2xl"
            >
              {PROFILE.email}
            </MagneticButton>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-xs font-mono uppercase tracking-widest text-gray-500 gap-6">
            <div className="text-left">
              <p>© 2025 {PROFILE.name}</p>
              <p className="mt-1 opacity-50 text-[10px]">
                本网站仅供参考学习,不用于任何盈利用途.
              </p>
            </div>
            <div className="flex gap-12 opacity-50">
              {" "}
              {/* Static icons */}
              <div className="text-gray-500">
                <MessageCircle size={20} />
              </div>
              <div className="text-gray-500">
                <Mail size={20} />
              </div>
              <div className="text-gray-500">
                <Phone size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By Section (Moved to Bottom) */}
      <PoweredBy />

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {selectedExperience && (
        <ExperienceDetail
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}

      <GeminiChatWidget />
    </div>
  );
};

export default App;
