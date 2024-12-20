import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Network, Shield, Server, Code, Award, Rss, Home, GraduationCap, Briefcase, Layout, Phone, ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import CertificationCard from './components/CertificationCard';
import WatchCard from './components/WatchCard';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const pages = [
    { id: 'home', label: 'Accueil', icon: <Home className="w-5 h-5" /> },
    { id: 'education', label: 'Parcours', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'skills', label: 'Compétences', icon: <Code className="w-5 h-5" /> },
    { id: 'projects', label: 'Projets', icon: <Layout className="w-5 h-5" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
    { id: 'watch', label: 'Veille', icon: <Rss className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: "Tableau de Synthèse",
      description: "Documentation détaillée de mes compétences acquises et situations professionnelles.",
      icon: <Layout className="w-6 h-6" />,
      tags: ["Documentation", "Compétences", "BTS SIO"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2670",
      content: {
        sections: [
          {
            title: "Résumé",
            objective: "Créer un tableau synthétique.",
            tasks: ["Collecter les informations", "Créer le tableau", "Documenter chaque projet"],
            skills: ["Gestion", "Documentation"]
          }
        ]
      },
      downloadLink: "/tableau2synthese.xlsx"
    },
    {
      title: "Infrastructure Réseau",
      description: "Projets d'infrastructure réseau incluant la sécurisation HTTPS et la configuration de serveurs DHCP/DNS.",
      icon: <Network className="w-6 h-6" />,
      tags: ["HTTPS", "DHCP", "DNS", "Sécurité"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2574",
      content: {
        sections: [
          {
            title: "Serveur Web avec Sécurisation HTTPS",
            objective: "Installer un serveur web sécurisé avec HTTPS (Apache ou Nginx) pour héberger un site web interne.",
            tasks: [
              "Installer un serveur web sur une machine virtuelle ou physique.",
              "Configurer HTTPS avec un certificat SSL/TLS.",
              "Tester l'accès au site web avec un navigateur.",
              "Configurer le firewall pour restreindre les accès à certains ports et services."
            ],
            skills: [
              "Gestion des serveurs web et configuration SSL/TLS.",
              "Sécurisation des accès via HTTPS.",
              "Configuration des règles de sécurité pour les serveurs."
            ]
          },
          {
            title: "Configuration d'un Serveur DHCP et DNS",
            objective: "Mettre en place un serveur DHCP pour attribuer des adresses IP et un serveur DNS pour résoudre des noms de domaine dans un réseau local.",
            tasks: [
              "Configurer un serveur DHCP pour gérer l'attribution d'adresses IP dans un réseau local.",
              "Installer et configurer un serveur DNS interne pour la résolution des noms de domaine.",
              "Tester la configuration avec des machines clientes."
            ],
            skills: [
              "Installation et configuration des serveurs DHCP et DNS.",
              "Gestion de l'attribution d'adresses IP et résolution de noms de domaine."
            ]
          }
        ]
      }
    },
    {
      title: "Virtualisation Réseau",
      description: "Création d'un réseau virtuel avec des VLANs pour séparer les réseaux logiquement.",
      icon: <Server className="w-6 h-6" />,
      tags: ["VLAN", "VMware", "VirtualBox"],
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=2670",
      content: {
        sections: [
          {
            title: "Virtualisation de Serveurs et Mise en Place d'un Réseau Virtuel (VLAN)",
            objective: "Créer un réseau virtuel avec des VLANs pour séparer les réseaux logiquement tout en utilisant une infrastructure physique unique.",
            tasks: [
              "Créer plusieurs machines virtuelles à l'aide de VirtualBox ou VMware.",
              "Configurer des VLANs pour l'isolation du trafic.",
              "Configurer un routeur pour permettre la communication entre les VLANs."
            ],
            skills: [
              "Mise en place de VLANs et segmentation du réseau.",
              "Utilisation de la virtualisation pour créer des environnements isolés."
            ]
          }
        ]
      }
    },
    {
      title: " Cybersécurité",
      description: "Participation à des compétitions CTF pour améliorer les compétences en cybersécurité.",
      icon: <Shield className="w-6 h-6" />,
      tags: ["CTF", "Pentesting", "Sécurité"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670",
      content: {
        sections: [
          {
            title: "Participation à des CTF",
            objective: "Participer à des compétitions Capture the Flag (CTF) pour améliorer vos compétences en cybersécurité.",
            tasks: [
              "Résoudre des défis en ligne sur des plateformes comme Hack The Box ou TryHackMe.",
              "Utiliser des outils comme Nmap, Netcat, ou Burp Suite pour identifier des vulnérabilités.",
              "Appliquer des techniques de pentesting pour capturer les \"flags\"."
            ],
            skills: [
              "Résolution de vulnérabilités et exploitation d'applications.",
              "Maîtrise de l'analyse de paquets et des attaques sur des réseaux simulés."
            ]
          },
          {
            title: "Analyse de Sécurité avec Nmap",
            objective: "Utiliser Nmap pour effectuer des analyses de sécurité réseau et détecter des hôtes, services et vulnérabilités.",
            tasks: [
              "Scanner un réseau avec Nmap et découvrir des machines actives et des ports ouverts.",
              "Effectuer des scans de sécurité pour identifier des vulnérabilités.",
              "Analyser les résultats des scans pour détecter des failles."
            ],
            skills: [
              "Réalisation de tests de reconnaissance réseau.",
              "Identification de vulnérabilités et sécurisation des services."
            ]
          }
        ]
      }
    }
  ];

  const certifications = [
    {
      title: "Secnum",
      date: "2024",
      icon: <Award className="w-6 h-6" />,
      description: "Certification en cybersécurité",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670"
    },
    {
      title: "Atelier RGPD",
      date: "2024",
      icon: <Shield className="w-6 h-6" />,
      description: "Certification en cybersécurité",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2670"
    }
  ];

  const cloudContent = ` Veille sur le Cloud Computing 2024

 

Dernière mise à jour : Novembre 2024.`;

  const watches = [
    {
      title: "Le Cloud",
      date: "2024",
      icon: <Rss className="w-6 h-6" />,
      description: "Veille sur le CLOUD et son avancée.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2670",
      link: "https://github.com/AbdelKD94/Cloud-Veille",
      content: cloudContent
    }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 p-6 w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        );
      case 'certifications':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 p-6 w-full">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        );
      case 'watch':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 p-6 w-full">
            {watches.map((watch, index) => (
              <WatchCard key={index} {...watch} />
            ))}
          </div>
        );
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <motion.div
          initial={false}
          animate={{
            width: isSidebarOpen ? 'auto' : '20px',
            transition: { duration: 0.3 }
          }}
          className="relative bg-gray-900 text-white border-r border-gray-800 shadow-xl"
        >
          <motion.div
            animate={{
              x: isSidebarOpen ? 0 : -200,
              opacity: isSidebarOpen ? 1 : 0,
              transition: { duration: 0.3 }
            }}
            className="w-72"
          >
            <div className="p-6 text-center border-b border-gray-800 bg-gradient-to-r from-blue-600 to-blue-800">
              <h1 className="text-2xl font-bold">Portfolio</h1>
            </div>
            <nav className="flex-1 py-6">
              <ul className="space-y-1 px-3">
                {pages.map((page) => (
                  <li key={page.id}>
                    <button
                      onClick={() => setCurrentPage(page.id)}
                      className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                        currentPage === page.id
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                          : 'hover:bg-gray-800/50 text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className="flex-shrink-0">{page.icon}</div>
                      <span className="font-medium">{page.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-6 border-t border-gray-800 bg-gray-900/50">
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/AbdelKD94" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/abdelhafid-kechad-b957b9220/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg shadow-blue-500/50 hover:bg-blue-700 transition-colors z-50"
          >
            {isSidebarOpen ? (
              <ChevronLeft className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </motion.div>

        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 overflow-auto"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;