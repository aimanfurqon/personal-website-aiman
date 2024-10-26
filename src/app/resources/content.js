import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Muhammad Aiman",
  lastName: "Furqon",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.png",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aimanfurqon",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-aiman-furqon",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:aimanconnects@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer & Designer</>,
  subline: (
    <>
      I'm Aiman, a full stack developer intern at{" "}
      <InlineCode>Kalbe Nutritionals</InlineCode>, where I craft intuitive
      <br /> code. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aiman is a Jakarta-based Full Stack Developer passionate about turning
        complex challenges into streamlined, efficient solutions. His expertise
        spans C#, ASP.NET, and JavaScript, focusing on end-to-end system
        development, UI/UX design, and the intersection of technology and
        business.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kalbe Nutritionals",
        timeframe: "2024 - Present",
        role: "Full Stack Developer Intern",
        achievements: [
          <>
            Conducted business needs analysis and provided consultation to the
            team to design and develop the E-Calibration System Management
            platform using C#, ASP.NET, .NET Core, and JavaScript.
          </>,
          <>
            Created technical documentation, system design, and SQL Server
            database design to support efficient calibration operations.
          </>,
          <>
            Developed full-stack applications encompassing both front-end and
            back-end components, integrating SQL Server for reliable data
            management.
          </>,
          <>
            Executed Quality Assurance (QA) processes, including comprehensive
            testing and preparation for User Acceptance Testing (UAT), to ensure
            the system met functional and performance standards.
          </>,
        ],
        images: [
          //   // optional: leave the array empty if you don't want to display images
          //   {
          //     src: "/images/projects/project-01/cover-01.jpg",
          //     alt: "Once UI Project",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        company: "IBISMA Business Incubator",
        timeframe: "2023 - 2024",
        role: "Frontend Developer Intern",
        achievements: [
          <>
            Managed and optimized 15+ WordPress pages with Elementor, improving
            UX and aligning visual presentation with brand goals, demonstrating
            product management proficiency.
          </>,
          <>
            Designed and developed 500+ UI/UX components in Figma, resulting in
            an intuitive interface and a 96% website review rating, showcasing
            strong product vision and execution.
          </>,
          <>
            Attained an 87% Site Performance score through website optimization
            and robust Internal Linking practices, highlighting dedication to
            enhancing user experience and product quality.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/IBISMA-Portfolio.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bangkit Academy 2022",
        // description: <>Studied android development.</>,
        description: (
          <>
            led by Google, Gojek, Tokopedia & Traveloka with Mobile Development
            Learning Path
          </>
        ),
      },
      {
        name: "Islamic University of Indonesia",
        // description: <>Studied software engineering.</>,
        description: <>Bachelor of Computer Science </>,
      },
      //   {
      //     name: "Build the Future",
      //     description: <>Studied online marketing and personal branding.</>,
      //   },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>
            Proficient in rapid prototyping with Figma, leveraging advanced UI
            design skills to create user-centered interfaces with efficiency.
          </>
        ),
        images: [
          //   {
          //     src: "/images/projects/project-01/cover-02.jpg",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
          //   {
          //     src: "/images/projects/project-01/cover-03.jpg",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      //   {
      //     title: "Next.js",
      //     description: (
      //       <>Building next gen apps with Next.js + Once UI + Supabase.</>
      //     ),
      //     images: [
      //       {
      //         src: "/images/projects/project-01/cover-04.jpg",
      //         alt: "Project image",
      //         width: 16,
      //         height: 9,
      //       },
      //     ],
      //   },
      {
        title: "C# & .NET Framework",
        description: (
          <>
            Experienced in building next-generation applications with C# and
            .NET, integrating seamlessly with Next.js and Supabase for
            comprehensive full-stack solutions.
          </>
        ),
        images: [
          //   {
          //     src: "/images/projects/project-01/cover-04.jpg",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        title: "HTML, CSS & JavaScript",
        description: (
          <>
            Skilled in core front-end development using HTML, CSS, and
            JavaScript, focusing on responsive design and creating dynamic user
            interfaces.
          </>
        ),
        images: [
          //   {
          //     src: "/images/projects/project-01/cover-04.jpg",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        title: "SQL Server",
        description: (
          <>
            Adept at managing databases with SQL Server, executing complex
            queries, and integrating robust data management into modern web
            applications.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
