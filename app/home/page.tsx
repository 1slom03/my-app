"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Material UI Ikonkalari
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TerminalIcon from "@mui/icons-material/Terminal";
import MemoryIcon from "@mui/icons-material/Memory";
import LayersIcon from "@mui/icons-material/Layers";
import TelegramIcon from "@mui/icons-material/Telegram";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#3b82f6",
        },
        secondary: {
            main: "#ec4899",
        },
    },
});

const projects = [
    { id: 1, title: "AI Dashboard Platform", desc: "Keyingi avlod sun'iy intellekt tahlil tizimi.", tech: ["Next.js", "Tailwind", "MUI"] },
    { id: 2, title: "E-Commerce Cosmos", desc: "3D elementlar bilan boyitilgan internet do'kon.", tech: ["React", "Framer Motion", "Axios"] },
    { id: 3, title: "SaaS Analytics Tool", desc: "Katta hajmdagi ma'lumotlarni real vaqtda kuzatish paneli.", tech: ["TypeScript", "TanStack Query", "Tailwind"] },
];
const navbarItems = [
    { id: "about", label: "Men Haqimda", icon: <AccountCircleIcon /> },
    { id: "projects", label: "Loyihalar", icon: <CodeIcon /> },
    { id: "contact", label: "Aloqa", icon: <MailOutlineIcon /> },
];
const teachStack = [
    "React / Next.js", "TypeScript", "JavaScript", "Tailwind CSS, SCSS",
    "Material UI (MUI)", "Axios / REST API", "Git / GitHub"
]

export default function Home() {
    const [activeTab, setActiveTab] = useState("about");
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 }
        }
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="min-h-screen bg-[#0b0f19] text-gray-100 font-sans relative overflow-hidden selection:bg-pink-500 selection:text-white">

                <span className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
                <span className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[16px_16px] opacity-20 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 py-12 relative z-10 flex flex-col lg:flex-row gap-12 items-start min-h-screen">

                    <motion.aside initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full lg:w-1/3 lg:sticky lg:top-12 flex flex-col gap-8" >
                        {/* Profil Kardasi */}
                        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <div className="relative w-28 h-28 mx-auto mb-6">
                                <span className="absolute inset-0 bg-linear-to-tr from-blue-500 to-pink-500 rounded-2xl rotate-6 animate-spin [animation-duration:10s]" />
                                <div className="absolute inset-0.75 bg-[#0b0f19] rounded-2xl flex items-center justify-center">
                                    <TerminalIcon className="text-blue-400" sx={{ fontSize: 48 }} />
                                </div>
                            </div>

                            <h1 className="text-2xl font-bold text-center tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-slate-200 to-slate-400">
                                Karimjonov Islomjon
                            </h1>

                            <p className="text-sm text-center text-blue-400 font-medium mt-1 tracking-wide uppercase">
                                Frontend Developer
                            </p>

                            <p className="text-gray-400 text-sm text-center mt-4 leading-relaxed">
                                Zamonaviy, tezkor va interaktiv veb-ilovalarni yaratishga ixtisoslashgan ijodkor dasturchi.
                            </p>

                            <div className="flex justify-center gap-4 mt-6">
                                <a href="https://github.com/1slom03" target="_blank" className=" p-2 bg-slate-800/50 hover:bg-slate-800 text-gray-400 hover:text-blue-400 rounded-xl transition-all duration-300 border border-slate-700/50 flex items-center justify-center">
                                    <GitHubIcon sx={{ fontSize: 20 }} />
                                </a>
                                <a href="https://www.linkedin.com/in/islomjon-karimjonov-258625263/" target="_blank"  className="p-2 bg-slate-800/50 hover:bg-slate-800 text-gray-400 hover:text-pink-400 rounded-xl transition-all duration-300 border border-slate-700/50 flex items-center justify-center">
                                    <LinkedInIcon sx={{ fontSize: 20 }} />
                                </a>
                            </div>
                        </div>

                        <nav className="flex flex-col gap-3">
                            {navbarItems.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <Button key={tab.id} variant={isActive ? "contained" : "text"} color={isActive ? "primary" : "inherit"} onClick={() => setActiveTab(tab.id)} className={`justify-start text-left normal-case py-3 px-6 rounded-2xl transition-all duration-300 ${isActive ? "shadow-lg shadow-blue-500/20 font-semibold" : "hover:bg-slate-900/60 text-gray-400 hover:text-gray-200"}`} startIcon={tab.icon} fullWidth>
                                        {tab.label}
                                    </Button>
                                );
                            })}
                        </nav>
                    </motion.aside>

                    <main className="w-full lg:w-2/3 min-h-125">
                        <AnimatePresence mode="wait">
                            {activeTab === "about" && (
                                <motion.div key="about" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -20 }} className="space-y-8" >
                                    <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 p-8 rounded-3xl">
                                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                                            <MemoryIcon className="text-pink-500" /> Kreativ Yondashuv
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed text-base">
                                            Men shunchaki kod yozmayman, men foydalanuvchiga unutilmas tajriba ulashuvchi raqamli dunyolarni yarataman.
                                            Har bir animatsiya va chiziq ustida chuqur o'ylab ishlash orqali loyihalarni jonlantiraman. Clean UI va Clean Code prinsiplari mening asosiy qoidamdir.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold flex items-center gap-3">
                                            <LayersIcon className="text-blue-400" /> Texnologiyalar Stacki
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {teachStack.map((tech) => (
                                                <motion.div key={tech} variants={itemVariants} whileHover={{ scale: 1.05, borderColor: "#3b82f6" }} className="bg-slate-900/50 border cursor-pointer border-slate-800 p-4 rounded-2xl flex items-center justify-center text-center text-sm font-medium transition-colors cursor-default" >
                                                    {tech}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "projects" && (
                                <motion.div key="projects" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                                    {projects.map((project) => (
                                        <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -8 }} className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden" >
                                            <div>
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="p-3 bg-slate-800/80 rounded-2xl text-blue-400 group-hover:text-pink-400 transition-colors flex items-center justify-center">
                                                        <BusinessCenterIcon sx={{ fontSize: 22 }} />
                                                    </div>
                                                    <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center justify-center">
                                                        <LaunchIcon sx={{ fontSize: 20 }} />
                                                    </a>
                                                </div>
                                                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                                    {project.desc}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-6">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="text-xs font-mono bg-slate-800/60 text-slate-300 px-3 py-1 rounded-full border border-slate-700/50">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === "contact" && (
                                <motion.div key="contact" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -20 }} className="max-w-md mx-auto">
                                    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl text-center space-y-6">
                                        <div className="w-16 h-16 bg-linear-to-br from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-purple-500/20">
                                            <MailOutlineIcon className="text-white" sx={{ fontSize: 32 }} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Keling, birga ishlaymiz!</h3>
                                            <p className="text-gray-400 text-sm mt-2">
                                                Yangi g'oyalar, loyihalar yoki hamkorlik takliflari bo'lsa, istalgan vaqtda aloqaga chiqing.
                                            </p>
                                        </div>

                                        <div className="pt-4 flex flex-col gap-3">
                                            <Button variant="contained" color="secondary" size="large" fullWidth startIcon={<MailOutlineIcon />} className="rounded-xl py-3 shadow-lg shadow-pink-500/20 font-semibold normal-case" href="mailto:example@domain.com" >
                                                example@domain.com
                                            </Button>
                                            <Button variant="outlined" color="primary" size="large" fullWidth startIcon={<TelegramIcon />} className="rounded-xl py-3 border-slate-700 hover:border-blue-500 text-gray-300 normal-case" >
                                                Telegram orqali bog'lanish
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}