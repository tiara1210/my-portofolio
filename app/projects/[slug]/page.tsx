import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  User,
  Target,
  Zap,
  Lightbulb,
  Trophy,
  CheckCircle2,
  FileText,
} from "lucide-react";
import Link from "next/link";

interface ProjectResult {
  name: string;
  image: string;
  description: string;
}

interface Project {
  title: string;
  slug: string;
  description: string;
  roles: string[];
  image: string;
  tech: string[];
  year: string;
  duration: string;
  teamSize: number;
  features: string[];
  demoUrl: string;
  details: string[];
  date: string;
  challenges: string[];
  goals: string[];
  whatIDid: string[];
  outcome: string[];
  whatILearned: string[];
  result: ProjectResult[];
}

const projects: Project[] = [
  {
    title: "Greenben - Minyak Jelantah Collection",
    slug: "greenben",
    description:
      "Landing page design for a platform that collects and manages used cooking oil (minyak jelantah) to be transformed into various creative and useful products.",
    roles: ["UI/UX Designer", "Visual Designer"],
    image: "/assets/project/greenben.png",
    tech: ["Figma", "UI/UX Design"],
    year: "2024",
    date: "November 19 - 22, 2024",
    duration: "1 week",
    teamSize: 2,
    features: [
      "Collection Point Locator",
      "Collector Pickup Request",
      "Reward Point System",
      "Voucher Redemption",
      "Subscription Plans",
      "Educational Articles",
    ],
    demoUrl:
      "https://www.figma.com/design/P8Rz5RPowZ8wbXbGTV88QG/Aplikasi?t=BHZUTLTG0Z6NnnWa-1",
    details: [
      "UI/UX design project for used cooking oil collection platform.",
      "The design emphasizes clean interface and environmental impact visualization.",
    ],
    challenges: [
      "Design a user friendly mobile application that encourages people to dispose of used cooking oil responsibly by connecting them with nearby collection points and collectors. The platform aims to promote environmental sustainability while providing incentives through a reward-based system.",
    ],
    goals: [
      "Many households and restaurants dispose of used cooking oil improperly due to a lack of awareness and access to collection services. As a result, used oil often pollutes waterways and harms the environment.",
      "The challenge is to design a solution that not only makes oil disposal easy but also motivates users to consistently participate through rewards, educational content, and an engaging user experience.",
    ],
    whatIDid: [
      "Conducted user research to understand common challenges in disposing of used cooking oil.",
      "Designed user flows for oil collection requests, location discovery, reward redemption, and subscription management.",
      "Created wireframes and high fidelity mobile application designs in Figma.",
      "Designed an interactive map interface that allows users to locate nearby collection points.",
      "Developed a reward system interface where users can earn and redeem points for vouchers.",
      "Designed subscription plan screens to support users with recurring collection needs.",
      "Created article and educational content pages to increase environmental awareness.",
      "Focused on creating an intuitive and visually engaging user experience that encourages sustainable behavior.",
    ],
    outcome: [
      "Created a digital solution that promotes environmentally responsible disposal of used cooking oil.",
      "Designed an incentive based ecosystem that encourages long-term user participation.",
      "Improved accessibility to collection services through location-based discovery and pickup requests.",
      "Combined sustainability, education, and rewards into a single user experience.",
      "Produced a complete UI/UX prototype that demonstrates the end to end user journey.",
    ],
    whatILearned: [
      "Through this project, I learned how design can influence positive behavioral change. I gained experience in designing solutions that balance user convenience, business objectives, and environmental impact.",
      "The project also strengthened my skills in user research, user journey mapping, wireframing, prototyping, and designing incentive-driven experiences that encourage long-term engagement.",
    ],
    result: [
      {
        name: "Homepage",
        image: "/assets/features/Homepage.png",
        description:
          "Users can easily discover nearby used cooking oil collection points through an interactive location-based interface.",
      },
      {
        name: "Reward",
        image: "/assets/features/Reward.png",
        description: "Redeem points for available rewards.",
      },
      {
        name: "Article",
        image: "/assets/features/Artikel.png",
        description: "Learn about sustainability and proper waste management.",
      },
      {
        name: "Subscription Plans",
        image: "/assets/features/Member.png",
        description:
          "Premium plans for scheduled collections and exclusive benefits.",
      },
    ],
  },

  {
    title: "Akuaponik - Smart Aquaponics System",
    slug: "akuaponik",
    description:
      "Landing page design for a smart aquaponics monitoring system.",
    roles: ["UI/UX Designer", "Interaction Designer"],
    image: "/assets/project/akuaponik.png",
    tech: ["Figma", "UI/UX Design"],
    year: "2025",
    date: "March 28, 2025",
    duration: "1 day",
    teamSize: 1,
    features: [
      "Automated Fish Feeding",
      "Real Time Monitoring Dashboard",
      "Water Temperature Monitoring",
      "pH Monitoring",
      "Nutrient Monitoring",
      "IoT Device Integration",
      "Feeding Schedule Management",
    ],
    demoUrl:
      "https://www.figma.com/design/1VMU6hKGLvTqsF2BJLTGcf/AKUAPONIK?node-id=0-1&t=BHZUTLTG0Z6NnnWa-1",
    details: [
      "UI/UX design project focusing on clean, modern aesthetics for sustainable agriculture technology.",
    ],
    challenges: [
      "Many aquaponics owners face difficulties maintaining their systems when they travel or leave home for several days. One common problem is that fish are not fed on schedule, which can lead to fish mortality and disrupt the balance of the aquaponics ecosystem.",
      "Additionally, monitoring critical environmental factors such as water temperature, pH levels, and nutrient concentration requires regular attention and can be challenging without real-time visibility.",
    ],
    goals: [
      "Design a mobile application that helps aquaponics owners monitor their ecosystem remotely and automate routine maintenance tasks. The solution aims to ensure fish health and plant growth while reducing the risk of human error, especially when users are away from home for extended periods.",
    ],
    whatIDid: [
      "Conducted research on common challenges faced by aquaponics owners.",
      "Designed user flows for device monitoring, automated feeding schedules, and environmental tracking.",
      "Created wireframes and high-fidelity mobile interfaces in Figma.",
      "Designed dashboards that display real-time IoT sensor data, including water temperature, pH levels, and nutrient status.",
      "Designed scheduling interfaces that allow users to automate fish feeding routines.",
      "Created notification concepts for monitoring environmental conditions and feeding activities.",
      "Focused on creating a simple and intuitive user experience for users with varying levels of technical knowledge.",
    ],
    outcome: [
      "Designed a solution that reduces the risk of fish mortality caused by missed feeding schedules.",
      "Improved convenience for aquaponics owners by enabling remote monitoring and automation.",
      "Helped users maintain healthier aquaponics ecosystems through access to real-time environmental data.",
      "Demonstrated how IoT technology can simplify daily maintenance tasks and support sustainable food production practices.",
    ],
    whatILearned: [
      "This project taught me how to design user experiences around IoT ecosystems where software and hardware work together to solve real-world problems. I learned the importance of presenting complex environmental data in a simple and actionable way while balancing automation, monitoring, and user control.",
      "The project also strengthened my skills in user journey mapping, dashboard design, information hierarchy, and designing interfaces for connected devices.",
    ],
    result: [
      {
        name: "Login",
        image: "/assets/features/login.png",
        description:
          "Users can securely access and manage their aquaponics system through a personalized account, ensuring that monitoring data and feeding schedules remain protected.",
      },
      {
        name: "Homepage",
        image: "/assets/features/Home.png",
        description:
          "The homepage provides a quick overview of system conditions, allowing users to monitor important information and access key features from a single dashboard.",
      },
      {
        name: "Water pH Monitoring",
        image: "/assets/features/pH Air.png",
        description:
          "Users can monitor water pH levels directly from their mobile devices through IoT integration.",
      },
      {
        name: "Feeding Schedule",
        image: "/assets/features/jadwal.png",
        description:
          "Users can create and manage feeding schedules that are executed automatically by connected IoT devices.",
      },
    ],
  },
  {
    title: "Sistem Asesmen Terpadu BNN Jawa Tengah",
    slug: "bnn-system",
    description:
      "Developing a web application for the Integrated Assessment System (TAT) of the National Narcotics Agency (BNN) of Central Java.",
    roles: [
      "Lead Frontend developer",
      "Frontend Developer",
      "Backend Developer",
      "Problem Solving",
      "Communication",
      "UI/UX Design",
    ],
    image: "/assets/project/bnn.png",
    tech: [
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Swagger",
      "TypeScript",
      "Redis",
      "Docker",
      "Next.js",
      "React 19",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "TanStack Query",
      "Shadcn UI",
    ],
    year: "2025 - 2026",
    date: "December 2025 - Present",
    duration: "6 months",
    teamSize: 4,
    features: [
      "Multi-Role Assessment Workflow",
      "Dynamic Form Builder",
      "Automated Document Generation",
      "Digital Signature Integration",
      "Case Conference Management",
      "Assessment Scheduling",
      "Legal & Medical Assessment Modules",
      "Centralized Digital Documentation",
    ],
    demoUrl: "https://fe-bnn.jong.my.id/",
    details: [
      "This application was developed for the National Narcotics Agency to support data management and monitoring of anti-narcotics activities.",
      "I served as the Lead Frontend Developer on this project.",
    ],
    challenges: [
      "Prior to the development of this system, the assessment workflow relied heavily on physical documents and manual administrative processes. Each assessment stage required numerous paper-based forms and reports, resulting in significant operational costs, document duplication, and difficulty tracking assessment progress.",
      "Furthermore, the assessment process involved multiple stakeholders including applicants, secretaries, legal teams, medical teams, assessment leaders, and administrators making coordination and documentation management increasingly complex.",
    ],
    goals: [
      "Developing a digital platform to simplify the integrated assessment process at the Central Java National Narcotics Agency (BNN). This system aims to reduce operational costs, minimize paper-based administration, and provide a centralized digital record of assessment activities.",
    ],
    whatIDid: [
      "Lead front-end development and contribute to most workflows that interact directly with users.",
      "Develop responsive interfaces for various user roles.",
      "Integrate frontend applications with backend APIs.",
      "Built modules for report submission, report review, disposition management, scheduling, legal assessments, medical assessments, case conferences, and assessment history tracking.",
      "Contributed to the implementation of a dynamic form builder for flexible assessment forms.",
      "Support automated document generation based on submitted assessment data.",
      "Assist with the implementation of digital signature workflows to reduce paper-based approvals.",
    ],
    outcome: [
      "Reduce reliance on physical documents and paper-based administration.",
      "Help reduce operational costs associated with assessment documentation and reporting.",
      "Create a centralized digital archive that improves the accessibility and traceability of assessment records.",
      "Enhance collaboration among assessment stakeholders through an integrated workflow system.",
      "Build a scalable platform planned to support BNN offices across Central Java.",
    ],
    whatILearned: [
      "This project taught me how technology can have a meaningful impact beyond software development itself. I learned how digital transformation can improve efficiency, reduce operational costs, and simplify complex workflows involving multiple stakeholders. Working on large scale government projects also strengthened my skills in systems design, collaboration, and user centered problem solving.",
    ],
    result: [
      {
        name: "Landing Page",
        image: "/assets/features/landing-bnn.jpeg",
        description:
          "The Landing Page module is designed as the primary entry point for the Central Java BNN SAT system. It provides an intuitive user interface, quick access to key services, organizational information, announcements, and streamlined navigation to enhance user experience and accessibility.",
      },
      {
        name: "Disposition",
        image: "/assets/features/disposisi.jpg",
        description:
          "This setting feature is used to accept and reject requests submitted by the chairman.",
      },
      {
        name: "Form Builder",
        image: "/assets/features/form-builder.jpg",
        description:
          "The Dynamic Form Builder module allows administrators to create, customize, and manage digital forms without requiring code changes. This functionality supports flexible data collection and simplifies the process of adapting forms to meet organizational needs.",
      },
      {
        name: "Scheduling",
        image: "/assets/features/jadwal-bnn.png",
        description:
          "A scheduling module was developed to simplify activity planning and appointment management at the Central Java National Narcotics Agency (BNN) SAT. This system allows users to schedule, track, and coordinate events through a centralized platform, reducing scheduling conflicts and improving operational efficiency.",
      },
    ],
  },

  {
    title: "Alumni Information System",
    slug: "alumni-platform",
    description:
      "Developed a web-based Alumni Career & Networking Platform designed to connect alumni, students, and industry partners.",
    roles: [
      "Full Stack Developer",
      "Project Manager",
      "UI/UX Design",
      "Problem Solving",
      "Reporting",
    ],
    image: "/assets/project/alumni.png",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Laravel",
      "Laravel Reverb",
      "PHP",
      "MySQL",
    ],
    year: "2026",
    date: "May 1 - May 29, 2026",
    duration: "4 weeks",
    teamSize: 2,
    features: [
      "Discussion forum",
      "Real-time notifications",
      "CV preview",
      "Alumni data integration",
    ],
    demoUrl: "https://alumni.dieseltrack.site/",
    details: [
      "Platform that connects alumni for networking and job opportunities.",
      "I was involved as the Full Stack Developer on this project.",
    ],
    challenges: [
      "Alumni often lack a dedicated platform to stay connected with the university community and discover career opportunities after graduation. Industry partners and coordinators also need an efficient way to share information and connect with alumni.",
    ],
    goals: [
      "Develop a centralized platform that connects alumni, coordinators, and industry partners while supporting alumni engagement and career development. The platform provides a space for alumni to share experiences, exchange insights, and access career opportunities in one place.",
    ],
    whatIDid: [
      "Developed a forum feature that allows alumni to create posts, share experiences, and interact through comments",
      "Developed a forum feature that allows alumni to create posts, share experiences, and interact through comments.",
      "Implemented a job posting module that allows industry partners to publish job opportunities directly on the platform.",
      "Optimized API performance and database queries to improve application responsiveness and scalability.",
    ],
    outcome: [
      "Increase alumni engagement through forum-based discussions and knowledge sharing.",
      "Simplify resume creation through automated CV generation.",
      "Increase access to career opportunities by connecting alumni with industry partners.",
      "Create a centralized platform that supports community interaction and career development.",
    ],
    whatILearned: [
      "This project taught me how to design solutions for diverse stakeholder groups with different needs. I learned that a meaningful platform isn't just about managing data, but also about creating opportunities for knowledge sharing, professional growth, and community engagement.",
    ],
    result: [
      {
        name: "Landing Page",
        image: "/assets/features/landingpage-alumni.png",
        description:
          "The main page of the Alumni Information System, which provides access to community discussions, job opportunities, and profile management.",
      },
      {
        name: "Forum Features",
        image: "/assets/features/forum.png",
        description:
          "Alumni, Coordinators, and Partners can create posts, share experiences, and interact through comments to encourage knowledge sharing and community engagement.",
      },
      {
        name: "CV Generator",
        image: "/assets/features/CV_Tiara_Sofa.pdf",
        description:
          "An automatic CV creation feature that turns alumni profile data into a professional resume, reducing the effort required to create job-ready documents.",
      },
      {
        name: "Job Vacancy Module",
        image: "/assets/features/job.png",
        description:
          "Industry partners can publish job opportunities, while alumni can find and apply for relevant positions through a centralized platform.",
      },
    ],
  },

  {
    title: "Cashier App",
    slug: "cashier-app",
    description:
      "Developed a web-based Point of Sale (POS) System for Tiara Snack to streamline daily retail operations.",
    roles: ["Full Stack Developer", "UI/UX Designer", "Reporting"],
    image: "/assets/project/chasier.jpg",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "REST API",
      "Vite",
      "React",
      "Shadcn UI",
      "Tailwindcss",
      "Vite",
    ],
    year: "2026",
    date: "April 2 - 4  2026",
    duration: "2 day",
    teamSize: 1,
    features: [
      "Product management",
      "Inventory tracking",
      "Sales transactions",
      "Daily reporting",
    ],
    demoUrl: "https://tiarasnack.infinityfree.me/",
    details: [
      "Modern cashier application for Indonesian SMEs with complete sales reporting, focusing on high-performance JavaScript for transaction processing.",
    ],
    challenges: [
      "Before this system was developed, sales transactions, stock monitoring, and business records were managed manually. This approach increased the risk of calculation errors, made inventory tracking difficult, and limited access to sales insights needed for business decision-making.",
      "The system also needed to be simple enough for daily use while supporting cashier operations and administrative management.",
    ],
    goals: [
      "Developed a web-based cashier and inventory management system for a family owned retail business. The goal was to simplify daily operations, improve inventory tracking, and reduce manual record keeping through a centralized digital platform.",
    ],
    whatIDid: [
      "Designed and developed the system as a full stack web application.",
      "Built a product management module that supports tracking of SKUs, categories, suppliers, pricing, stock monitoring, and product images.",
      "Developed a Point of Sale (POS) interface with real time product search and dynamic shopping cart management.",
      "Implemented a stock validation mechanism to prevent overselling.",
      "Developed automated receipt generation optimized for 80mm thermal printers.",
      "Created a dashboard and reporting feature to monitor sales performance and inventory status.",
      "Implemented an Excel export function to support accounting and business analysis.",
      "Designed role-based access control for administrators and cashiers.",
    ],
    outcome: [
      "Digitize daily business operations previously managed manually.",
      "Improve transaction efficiency through streamlined POS workflows.",
      "Reduce inventory management errors through automated stock validation.",
      "Enable business owners to monitor sales performance and inventory levels in real time.",
      "Provide actionable business insights through reporting and Excel export features.",
    ],
    whatILearned: [
      "This project taught me how technology can directly support small business operations and improve day-to-day efficiency. Working with real users helped me understand the importance of designing software that balances functionality, usability, and business needs. I also gained valuable experience developing an end to end system that integrates inventory management, transaction processing, and business analytics into a single platform.",
    ],
    result: [
      {
        name: "Login Page",
        image: "/assets/features/login-kasir.png",
        description:
          "A secure authentication page designed for cashier and administrator access management. The login system ensures controlled access to application features while maintaining a simple and efficient user experience for day to day operations.",
      },
      {
        name: "Product Management",
        image: "/assets/features/product.png",
        description:
          "A product management module developed to efficiently handle inventory and product data. Users can manage product information, including categories, prices, stock availability, and product details, to support accurate sales operations.",
      },
      {
        name: "Transaction Page",
        image: "/assets/features/transaksi.png",
        description:
          "A core Point of Sale (POS) module that enables cashiers to process customer purchases quickly and accurately. This feature supports item selection, quantity calculation, payment processing, and automated transaction recording to improve checkout efficiency.",
      },
      {
        name: "Sales Report",
        image: "/assets/features/report.png",
        description:
          "The sales reporting module is designed to provide comprehensive transaction insights through organized and easily accessible reports. This feature helps monitor sales performance, track revenue, analyze transaction history, and support better business decision-making.",
      },
    ],
  },

  {
    title: "BengTix",
    slug: "bengtix",
    description:
      "Developed a web-based Event Ticketing Platform that enables users to discover events and purchase tickets.",
    roles: ["Full Stack Developer", "Database Designer"],
    image: "/assets/project/shop.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
    ],
    year: "2025",
    date: "February 2025",
    duration: "4 days",
    teamSize: 2,
    features: [
      "Event management",
      "Ticket booking",
      "QR code validation",
      "Sales reporting",
    ],
    demoUrl: "https://bengtix.infinityfree.me/?i=1",
    details: [
      "Ticketing website for events and activities from Bengkel Koding.",
      "I was responsible as the Full Stack Developer on this project.",
    ],
    challenges: [
      "Creating a fast and reliable booking system for high-demand events.",
      "Ensuring concurrent ticket purchases are handled without conflicts.",
      "Implementing secure QR-based entry validation.",
    ],
    goals: [
      "Build a seamless ticketing experience for event attendees.",
      "Provide organizers with a robust management and analytics dashboard.",
      "Digitize the event entry process with QR code validation.",
    ],
    whatIDid: [
      "Designed the user interface and overall user experience.",
      "Implemented the core ticket booking logic and payment flow.",
      "Integrated QR code generation for entry validation.",
    ],
    outcome: [
      "Successfully launched a platform that simplifies event ticketing.",
      "Reduced wait times at event entries through QR validation.",
      "Provided clear sales insights for event organizers.",
    ],
    whatILearned: [
      "Improved skills in transaction handling and race condition prevention.",
      "Learned how to integrate QR code technologies into web applications.",
      "Mastered building analytical dashboards for business use.",
    ],
    result: [
      {
        name: "Event Discovery",
        image: "/assets/project/shop.png",
        description:
          "Browse events and view detailed information before purchasing tickets.",
      },
    ],
  },

  {
    title: "Poliklinik",
    slug: "polyclinic-system",
    description:
      "Developed a web-based Polyclinic Management System to streamline healthcare service operations.",
    roles: ["Full Stack Developer", "Backend Lead"],
    image: "/assets/project/poliklinik.png",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "daisyUI"],
    year: "2024",
    date: "July 2024",
    duration: "2 days",
    teamSize: 3,
    features: [
      "Patient registration",
      "Medical records",
      "Prescription handling",
      "Queue management",
    ],
    demoUrl: "poliklinik.infinityfree.me",
    details: [
      "Clinic management system that facilitates patient registration and medical record management.",
      "I worked as the Full Stack Developer on this project.",
    ],
    challenges: [
      "Managing complex relationships between patients, doctors, and records.",
      "Building a robust queue management system in a short timeframe.",
      "Ensuring data privacy and accessibility for medical staff.",
    ],
    goals: [
      "Create a digital solution for clinics to manage daily operations efficiently.",
      "Digitize patient medical history and doctor findings.",
      "Improve the organization and flow of patient registrations.",
    ],
    whatIDid: [
      "Built the patient registration and medical record modules.",
      "Implemented the core queue management logic.",
      "Designed the responsive frontend using Tailwind CSS and daisyUI.",
    ],
    outcome: [
      "A streamlined system that reduces registration wait times.",
      "Highly organized storage for patient history and doctor diagnoses.",
      "Successfully improved clinic data accessibility for medical staff.",
    ],
    whatILearned: [
      "Improved skills in complex database relational design.",
      "Learned rapid prototyping techniques with Laravel and Tailwind.",
      "Gained insights into medical software requirements and data privacy.",
    ],
    result: [
      {
        name: "Medical Records",
        image: "/assets/project/poliklinik.png",
        description:
          "Secure and organized storage for patient history and doctor findings.",
      },
    ],
  },
];

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-red transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-[500px] w-full bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-12">
            {/* Title & Role */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-100">
                    <Calendar className="w-4 h-4 text-red" />
                    {project.date}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-100">
                    <User className="w-4 h-4 text-red" />
                    {project.teamSize}{" "}
                    {project.teamSize > 1 ? "People" : "Person"}
                  </span>
                </div>

                {/* Dedicated Roles Row */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wider w-full mb-1">
                    My Roles:
                  </span>
                  {project.roles.map((role, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-4 py-1.5 bg-red/5 text-red border border-red/10 rounded-lg text-sm font-semibold"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-red transition-all shadow-sm"
                >
                  Live Preview
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column: Context & Details */}
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
                    <Target className="w-6 h-6 text-red" />
                    Challenges & Goals
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                      <h3 className="text-lg font-bold text-red mb-4">
                        The Challenge
                      </h3>
                      <ul className="space-y-3">
                        {project.challenges.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                      <h3 className="text-lg font-bold text-blue-600 mb-4">
                        The Goal
                      </h3>
                      <ul className="space-y-3">
                        {project.goals.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
                    <Zap className="w-6 h-6 text-red" />
                    What I Did
                  </h2>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <ul className="space-y-4">
                      {project.whatIDid.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 text-gray-600 text-lg leading-relaxed"
                        >
                          <span className="mt-2.5 w-2 h-2 rounded-full bg-red shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
                      <Trophy className="w-6 h-6 text-red" />
                      Outcome
                    </h2>
                    <ul className="space-y-3">
                      {project.outcome.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-600 leading-relaxed"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
                      <Lightbulb className="w-6 h-6 text-red" />
                      What I Learned
                    </h2>
                    <ul className="space-y-3">
                      {project.whatILearned.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-600 leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>

              {/* Right Column: Tech & Features */}
              <div className="space-y-10">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 text-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Project Results
              </h2>
              <div className="grid grid-cols-1 gap-20">
                {project.result.map((res, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 md:gap-16 items-center`}
                  >
                    <div className="w-full md:w-1/2">
                      {res.image.toLowerCase().endsWith(".pdf") ? (
                        <a
                          href={res.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center aspect-video md:aspect-square w-full rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 hover:border-red hover:bg-red/5 transition-all group p-8 text-center"
                        >
                          <FileText className="w-16 h-16 text-gray-400 group-hover:text-red mb-4 transition-colors" />
                          <span className="text-gray-900 font-semibold mb-2 block">
                            View Document
                          </span>
                          <span className="text-gray-400 text-sm truncate max-w-xs">
                            {res.image.split("/").pop()}
                          </span>
                        </a>
                      ) : (
                        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
                          <Image
                            src={res.image}
                            alt={res.name}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {res.name}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {res.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
