/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yopi Portofolio",
  description:
    "A passionate Network Operations Center (NOC) and Network Engineer with hands-on experience in monitoring, troubleshooting, and maintaining modern network infrastructures. Skilled in MikroTik, Cisco, and FTTH technologies, with a strong commitment to delivering reliable, scalable, and efficient networking solutions while continuously learning and embracing new technologies.",
  og: {
    title: "Yopi Hermawan Portofolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Yopi Hermawan",
  logo_name: "YopiHermawan",
  nickname: "Yopi",
  subTitle:
    "A passionate Network Operations Center (NOC) and Network Engineer with hands-on experience in monitoring, troubleshooting, and maintaining modern network infrastructures. Skilled in MikroTik, Cisco, and FTTH technologies, with a strong commitment to delivering reliable, scalable, and efficient networking solutions while continuously learning and embracing new technologies.",
  resumeLink:
    "https://drive.google.com/file/d/1dyiH9a4fL6IIz3vNDnQKsp5JDEFGotg_/view?usp=sharing",
  portfolio_repository: "https://github.com/yopihermawan",
  githubProfile: "https://github.com/yopihermawan",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/yopihermawan",
  // linkedin: "https://www.linkedin.com/in/yopi-hermawan",
  // gmail: "yopi.h99@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // twitter: "https://twitter.com",
  // instagram: "https://www.instagram.com/yopi_hermawan"

  {
    name: "Github",
    link: "https://github.com/yopihermawan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yopi-hermawan",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:yopi.h99@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Network Monitoring & Operations",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Monitoring network devices and FTTH infrastructure using Network Monitoring Systems (NMS)",
        "⚡ Performing real-time troubleshooting and incident handling to ensure service availability",
        "⚡ Analyzing alarms, logs, and network performance to maintain optimal network quality",
      ],
      softwareSkills: [
        {
          skillName: "Zabbix",
          fontAwesomeClassname: "logos:zabbix",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "The Dude",
          fontAwesomeClassname: "mdi:server-network",
          style: {
            backgroundColor: "white",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GNS3",
          fontAwesomeClassname: "mdi:router-network",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Network Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing, configuring, and maintaining enterprise network infrastructures",
        "⚡ Configuring routing, switching, VLANs, NAT, VPN, and firewall policies",
        "⚡ Troubleshooting network connectivity and performance issues across LAN, WAN, and FTTH environments",
      ],
      softwareSkills: [
        {
          skillName: "MikroTik",
          fontAwesomeClassname: "simple-icons:mikrotik",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Cisco",
          fontAwesomeClassname: "simple-icons:cisco",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "VMware",
          fontAwesomeClassname: "logos:vmware",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Telkom University Purwokerto",
      subtitle: "Bachelor of Telecommunication Engineering",
      logo_path: "tup.png",
      alt_name: "Telkom University Purwokerto",
      duration: "2018 - 2024",
      descriptions: [
        "⚡ Graduated with a GPA of 3.57/4.00.",
        "⚡ Specialized in Computer Networks, Telecommunications, and Network Infrastructure.",
        "⚡ Final Project: Performance Analysis of Web-Based Network Automation for OSPF and EIGRP Routing Using Python.",
      ],
      website_link: "https://purwokerto.telkomuniversity.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Belajar Network Automation berbasis Web dengan Django ",
      subtitle: "Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d2ac98b9-d408-4781-91cc-7a4207f94e68/",
      alt_name: "Udemy",
      color_code: "#FFFFFF",
    },
    {
      title: "Pengaplikasian Cisco CCNA untuk Analisis Jaringan Komputer",
      subtitle: "Skill Academy",
      logo_path: "skillacademy.png",
      certificate_link:
        "https://drive.google.com/file/d/1_mWKl3q25jSyvnMLX8Qpm_T8Gsy6mp2D/view?usp=sharing",
      alt_name: "Skill Academy",
      color_code: "#FFFFFF",
    },
    {
      title: "CCNA R&S: Connecting Networks",
      subtitle: "Cisco Networking Academy",
      logo_path: "netacad.png",
      certificate_link:
        "https://drive.google.com/file/d/1Z2f0FXCm08afkAnsmDFiTE5xzzlHq5tp/view?usp=sharing",
      alt_name: "Netacad",
      color_code: "#FFFFFF",
    },
    {
      title: "Junior Network Administrator",
      subtitle: "Badan Nasional Sertifikasi Profesi",
      logo_path: "bnsp.png",
      certificate_link:
        "https://drive.google.com/file/d/18e1d2jS3rcVbWeBEbGRCJz2Lqb9A3y_1/view?usp=sharing",
      alt_name: "BNSP",
      color_code: "#FFFFFF",
    },
    {
      title: "Pelatihan Teknisi Utama Jaringan Komputer",
      subtitle:
        "Balai Pelatihan dan Pengembangan Teknologi Informasi dan Komunikasi",
      logo_path: "bpptik.png",
      certificate_link:
        "https://drive.google.com/file/d/1C7db40EYLBLpYBAEMrFz-hJb3a424vIP/view?usp=sharing",
      alt_name: "BPPTIK",
      color_code: "#FFFFFF",
    },
    {
      title: "CCNA R&S: Scaling Networks",
      subtitle: "Cisco Networking Academy",
      logo_path: "netacad.png",
      certificate_link:
        "https://drive.google.com/file/d/1kp0XpIozPRna3pZoANjShVrm5H9khmQ8/view?usp=sharing",
      alt_name: "Netacad",
      color_code: "#FFFFFF",
    },
    {
      title: "CCNA R&S: Routing and Switching Essentials",
      subtitle: "Cisco Networking Academy",
      logo_path: "netacad.png",
      certificate_link:
        "https://drive.google.com/file/d/1CB6J5C7Ju_CctgOSiMdjHNLvRKjMz8c5/view?usp=sharing",
      alt_name: "Netacad",
      color_code: "#FFFFFF",
    },
    {
      title: "Kursus Mikrotik Terlengkap, Lebih dari 100 Video Tutorial!",
      subtitle: "Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Cf6-LwPj_4EQ0XJIHIz8lSeao5owhhNE/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#FFFFFF",
    },
    {
      title: "ICSI | CNSS Certified Network Security Specialist",
      subtitle: "International Cyber Security Institute",
      logo_path: "icsi.png",
      certificate_link:
        "https://drive.google.com/file/d/19N_6AlTJ5CpZWabhg2s0HOHN2a4KhyKe/view?usp=sharing",
      alt_name: "ICSI",
      color_code: "#FFFFFF",
    },
    {
      title: "CCNA R&S: Introduction to Networks",
      subtitle: "Cisco Networking Academy",
      logo_path: "netacad.png",
      certificate_link:
        "https://drive.google.com/file/d/1RwQODUctYkxIEPiaNCNye1oQNH0GhQrA/view?usp=sharing",
      alt_name: "Netacad",
      color_code: "#FFFFFF",
    },
    {
      title: "Cisco Networking Basics",
      subtitle: "Adigama",
      logo_path: "adigama.png",
      certificate_link:
        "https://drive.google.com/file/d/1OFBlbLXxmo-SwvvWvdsdgM1-gjSBENF1/view?usp=sharing",
      alt_name: "Adigama",
      color_code: "#FFFFFF",
    },
    {
      title: "LTE Radio Network Planning",
      subtitle: "Hexacomm",
      logo_path: "hexacomm.png",
      certificate_link:
        "https://drive.google.com/file/d/1aUdUcdW1Yr4dRThSaUJwBi8qK8nXkZIS/view?usp=sharing",
      alt_name: "Hexacomm",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Freelance and Internship",
  description:
    "Experienced in network monitoring, troubleshooting, FTTH operations, and network infrastructure maintenance. Passionate about ensuring reliable network performance while continuously improving technical skills in networking and automation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Network Operations Center (NOC)",
          company: "PT Asri Global Investama",
          company_url: "https://asrinet.co.id/",
          logo_path: "asri.png",
          duration: "March 2025 - Present",
          location: "Bekasi",
          description:
            "Monitor network devices and FTTH infrastructure using Network Monitoring Systems (NMS). Perform network troubleshooting, analyze alarms, handle incidents, and ensure optimal network performance and service availability.",
          color: "#000000",
        },
        {
          title: "Network Operations Center (NOC)",
          company: "PT Sekawan Global Komunika",
          company_url: "https://mentarisatria.net.id/",
          logo_path: "sgk.png",
          duration: "March 2025 - June 2026",
          location: "Purwokerto",
          description:
            "Monitored network infrastructure and customer connectivity in real time. Diagnosed and resolved network incidents related to MikroTik routers and FTTH services. Performed preventive monitoring to ensure optimal network availability. Escalated major incidents to the appropriate technical teams and documented troubleshooting activities. Assisted in maintaining service quality and minimizing network downtime.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Freelance",
      experiences: [
        {
          title: "IT Engineer",
          company: "PT Graha Karya Informasi",
          company_url: "https://grahakarya.com/",
          logo_path: "grahakarya.png",
          duration: "November 2024 - December 2024",
          location: "Brebes",
          description:
            "Performed router rack installation, provider link verification, documentation, and SD-WAN migration support for enterprise network deployment projects.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internship",
      experiences: [
        {
          title: "Network Engineer",
          company: "PT SaranaInsan MudaSelaras",
          company_url: "https://sims.co.id/",
          logo_path: "sims.png",
          duration: "August 2021 - October 2021",
          location: "Purworejo",
          description:
            "Assisted in network installation, troubleshooting, device configuration, and documentation while gaining hands-on experience in enterprise networking.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Thank you for visiting my portfolio. I am open to opportunities as a Network Engineer or Network Operations Center (NOC). Feel free to contact me for collaboration, networking projects, or professional discussions. I will respond as soon as possible.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
