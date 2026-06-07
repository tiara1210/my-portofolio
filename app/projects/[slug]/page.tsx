import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Greenben - Minyak Jelantah Collection",
    slug: "greenben",
    description:
      "Landing page design for a platform that collects and manages used cooking oil (minyak jelantah) to be transformed into various creative and useful products. The design features waste oil collection scheduling, partner dashboard, and sustainability impact tracking.",
    role: "Designer",
    image: "/assets/project/greenben.png",
    tech: ["Figma", "UI/UX Design", "Dashboard", "Sustainability"],
    year: "2026",
    duration: "1 week",
    teamSize: 1,
    features: [
      "Hero section with sustainability concept",
      "Collection scheduling interface",
      "Partner dashboard mockup",
      "Impact tracking visualization",
      "Mobile responsive layout",
      "Call-to-action sections",
    ],
    demoUrl:
      "https://www.figma.com/design/P8Rz5RPowZ8wbXbGTV88QG/Aplikasi?t=BHZUTLTG0Z6NnnWa-1",
    details:
      "UI/UX design project for used cooking oil collection platform. The design emphasizes clean interface and environmental impact visualization.",
  },
  {
    title: "Akuaponik - Smart Aquaponics System",
    slug: "akuaponik",
    description:
      "Landing page design for a smart aquaponics monitoring system. The design showcases fish and plant health tracking, water quality monitoring, and automated farming controls.",
    role: "Designer",
    image: "/assets/project/akuaponik.png",
    tech: ["Figma", "UI/UX Design", "Agritech", "Dashboard Design"],
    year: "2026",
    duration: "1 week",
    teamSize: 1,
    features: [
      "Hero section with aquaponics concept",
      "Fish health tracking interface mockup",
      "Plant monitoring dashboard design",
      "Water quality indicators",
      "Automated control panels",
      "Mobile-first responsive design",
    ],
    demoUrl:
      "https://www.figma.com/design/1VMU6hKGLvTqsF2BJLTGcf/AKUAPONIK?node-id=0-1&t=BHZUTLTG0Z6NnnWa-1",
    details:
      "UI/UX design project for a smart aquaponics system. The design focuses on clean, modern aesthetics suitable for sustainable agriculture technology.",
  },
  {
    title: "Sistem Asesmen Terpadu BNN Jawa Tengah",
    slug: "bnn-system",
    description:
      "Developing a web application for the Integrated Assessment System (TAT) of the National Narcotics Agency (BNN) of Central Java which is used to support the integrated assessment process for drug users, starting from assessment data management, scheduling, case monitoring, to reporting assessment results in an integrated manner. The system supports multiple user roles, including Super Admin for system management and user access control, Ketua TAT for reviewing and approving assessment outcomes, Sekretariat for administrative verification and scheduling, Tim Hukum for conducting legal assessments, Tim Medis for performing medical and rehabilitation assessments, and Pemohon for submitting assessment requests and monitoring application progress.",
    role: "Frontend developer",
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
    ],
    year: "2025 - 2026",
    duration: "6 months",
    teamSize: 4,
    features: [
      "Role-based access control (RBAC)",
      "Assessment application submission",
      "Applicant and case management",
      "Document upload and verification",
      "Integrated assessment scheduling",
      "Medical assessment workflow",
      "Legal assessment workflow",
      "Assessment review and approval",
      "Case status tracking",
      "Real-time monitoring dashboard",
      "Assessment reporting",
      "PDF/Excel report export",
      "User and permission management",
      "Audit logs and activity tracking",
      "REST API documentation",
    ],
    demoUrl: "https://fe-bnn.jong.my.id/",
    details:
      "This application was developed for the National Narcotics Agency to support data management and monitoring of anti-narcotics activities. I served as the Frontend Developer on this project.",
  },
  {
    title: "Poliklinik",
    slug: "polyclinic-system",
    description:
      "Developed a web-based Polyclinic Management System to streamline healthcare service operations, including patient registration, appointment scheduling, medical record management, prescription handling, and healthcare staff administration. The system helps improve operational efficiency, data accessibility, and patient service quality through a centralized digital platform.",
    role: "Full Stack",
    image: "/assets/project/poliklinik.png",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "daisyUI",
      "vite",
    ],
    year: "2024",
    duration: "2 days",
    teamSize: 3,
    features: [
      "Patient registration",
      "Patient management",
      "Doctor management",
      "Appointment scheduling",
      "Medical records",
      "Diagnosis management",
      "Prescription management",
      "Medicine inventory",
      "Pharmacy management",
      "Patient visit history",
      "Queue management",
      "Dashboard and analytics",
      "Report generation",
      "Role-based access control (RBAC)",
      "User management",
    ],
    demoUrl: "poliklinik.infinityfree.me",
    details:
      "Clinic management system that facilitates patient registration and medical record management. I worked as the Full Stack Developer on this project.",
  },
  {
    title: "Alumni Platform",
    slug: "alumni-platform",
    description:
      "Developed a web-based Alumni Career & Networking Platform designed to connect alumni, students, and industry partners through a centralized ecosystem. The platform facilitates career development, job opportunities, professional networking, and alumni engagement by providing tools for profile management, CV sharing, job matching, discussion forums, and collaboration between alumni and organizations.",
    role: "Full Stack",
    image: "/assets/project/alumni.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Lucide React",
      "SWR",
      "Sonner",
      "Zod",
      "Zustand",
      "React Hook Form",
      "TanStack Query",
      "Laravel Reverb",
      "PHP",
      "MySQL",
    ],
    year: "2026",
    duration: "2 weeks",
    teamSize: 2,
    features: [
      "Discussion forum",
      "Forum post creation",
      "Forum post management",
      "Comment system",
      "Real-time forum updates",
      "Real-time notifications",
      "Infinite scrolling forum feed",
      "Forum search and filtering",
      "Google authentication onboarding flow",
      "CV preview and management",
      "Alumni data integration",
      "Role-based access control",
    ],
    demoUrl: "https://alumni.dieseltrack.site/",
    details:
      "Platform that connects alumni for networking and job opportunities. I was involved as the Full Stack Developer on this project.",
  },
  {
    title: "BengTix",
    slug: "bengtix",
    description:
      "Developed a web-based Event Ticketing Platform that enables users to discover events, purchase tickets, and manage bookings through a centralized system. The platform streamlines event management by providing organizers with tools to create events, monitor ticket sales, manage attendees, and generate reports, while offering attendees a seamless ticket purchasing experience.",
    role: "Full Stack",
    image: "/assets/project/shop.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "TanStack Query",
      "Zod",
      "React Hook Form",
      "Laravel",
      "MySQL",
      "REST API",
    ],
    year: "2025",
    duration: "4 days",
    teamSize: 2,
    features: [
      "User authentication",
      "Role-based access control (RBAC)",
      "Event management",
      "Event publishing",
      "Ticket management",
      "Ticket booking",
      "Online ticket purchasing",
      "Order management",
      "Payment",
      "Transaction history",
      "QR code ticket validation",
      "Attendee management",
      "Event analytics dashboard",
      "Sales reporting",
      "Notification system",
    ],
    demoUrl: "https://bengtix.infinityfree.me/?i=1",
    details:
      "Ticketing website for events and activities from Bengkel Koding. I was responsible as the Full Stack Developer on this project.",
  },
  {
    title: "Cashier App",
    slug: "cashier-app",
    description:
      "Developed a web-based Point of Sale (POS) System for Tiara Snack to streamline daily retail operations, including product management, sales transactions, inventory tracking, and reporting. The system helps improve transaction efficiency, stock monitoring, and business performance analysis through a centralized management platform.",
    role: "Full Stack",
    image: "/assets/project/chasier.jpg",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "REST API",
      "shadcn/ui",
      "Lucide React",
      "TanStack Query",
    ],
    year: "2024",
    duration: "1 day",
    teamSize: 1,
    features: [
      "Product management",
      "Category management",
      "Inventory management",
      "Stock monitoring",
      "Sales transactions",
      "Shopping cart system",
      "Order management",
      "Receipt generation",
      "Sales history",
      "Daily sales reporting",
      "Revenue analytics",
      "User management",
      "Role-based access control (RBAC)",
      "Dashboard and statistics",
    ],
    demoUrl: "https://tiarasnack.infinityfree.me/",
    details:
      "Modern cashier application for Indonesian SMEs with complete features for sales reports and inventory management.",
  },
  {
    title: "Shop - Online Marketplace",
    slug: "shop",
    description:
      "Developed a web-based e-commerce platform for online buying and selling of goods. The system includes product catalog management, shopping cart, order processing, and discount management features.",
    role: "Full Stack",
    image: "/assets/project/shop.png",
    tech: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    year: "2024",
    duration: "2 weeks",
    teamSize: 1,
    features: [
      "Product catalog management",
      "Category management",
      "Shopping cart system",
      "User authentication",
      "Order management",
      "Discount/promo code system",
      "Payment integration",
      "Transaction history",
      "Product search and filtering",
      "Shopping cart persistence",
      "Order status tracking",
      "Admin dashboard",
      "Sales reporting",
    ],
    demoUrl: "https://toko.infinityfree.me/",
    details:
      "E-commerce website built with CodeIgniter 4 and Bootstrap. Features include product management, shopping cart, order processing, and discount management for online shopping.",
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
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-red transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96 w-full bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {project.title}
              </h1>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  project.role === "Full Stack"
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {project.role}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <span className="font-medium text-gray-700">Year:</span>{" "}
                {project.year}
              </span>
              <span className="flex items-center gap-1">
                <span className="font-medium text-gray-700">Duration:</span>{" "}
                {project.duration}
              </span>
              <span className="flex items-center gap-1">
                <span className="font-medium text-gray-700">Team:</span>{" "}
                {project.teamSize} people
              </span>
            </div>

            <p className="text-gray-600 text-lg mb-6">{project.description}</p>

            {project.demoUrl && (
              <div className="mb-6">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red to-orange-light text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Application
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-red"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Details
              </h2>
              <p className="text-gray-600 leading-relaxed">{project.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
