import "./styles.css";
import Lenis from "lenis";

// // Initialize Lenis
// const lenis = new Lenis({
//   autoRaf: true,
// });

// // Listen for the scroll event and log the event data
// lenis.on("scroll", (e) => {
//   console.log(e);
// });

const services = [
  {
    title: "Custom AI/ML Software Development",
    description:
      "Tailor-made AI and ML solutions designed to address your specific business needs and integrate seamlessly with your existing systems",
    icon: `              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary-color)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chart-line"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 19l16 0" />
                <path d="M4 15l4 -6l4 2l4 -5l4 4" />
              </svg>`,
  },
  {
    title: "Data Science & Analytics",
    description:
      "Advanced data analysis and visualization services to uncover hidden patterns, optimize operations, and drive data-informed decision-making for enterprises.",
    icon: `              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary-color)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-settings"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              </svg>`,
  },
  {
    title: "Natural Language Processing (NLP) Solutions",
    description:
      "Cutting-edge NLP applications for text, sentiment analysis, chatbots, and language translation to enhance communication",
    icon: `              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary-color)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bulb"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"
                />
                <path
                  d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"
                />
                <path d="M9.7 17l4.6 0" />
              </svg>`,
  },
  //
  {
    title: "Computer Vision Applications",
    description:
      "State-of-the-art image and video processing solutions for object detection, facial recognition, and visual inspection in various industries",
    icon: `              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary-color)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-vision-pro"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 7c1.143 0 2.235 .035 3.275 .104c1.017 .068 1.95 .207 2.798 .42c.813 .203 1.52 .505 2.119 .909a3.903 3.903 0 0 1 1.328 1.531c.326 .657 .48 1.48 .48 2.466c0 1.006 -.189 1.91 -.574 2.707c-.375 .779 -.886 1.396 -1.537 1.848a3.696 3.696 0 0 1 -2.16 .66c-.509 0 -.97 -.068 -1.382 -.21a5.84 5.84 0 0 1 -1.17 -.548a18.45 18.45 0 0 1 -1.045 -.695a9.104 9.104 0 0 0 -1.001 -.63a2.376 2.376 0 0 0 -1.13 -.301c-.373 0 -.75 .097 -1.132 .3c-.316 .17 -.65 .38 -1 .63c-.322 .23 -.67 .462 -1.047 .695a5.78 5.78 0 0 1 -1.168 .548c-.413 .142 -.872 .21 -1.378 .21a3.706 3.706 0 0 1 -2.165 -.659c-.651 -.452 -1.162 -1.07 -1.537 -1.848c-.385 -.798 -.574 -1.7 -.574 -2.709c-.004 -.98 .15 -1.802 .477 -2.46a3.897 3.897 0 0 1 1.33 -1.531c.6 -.403 1.307 -.704 2.12 -.907a16.088 16.088 0 0 1 2.8 -.423c1.04 -.071 2.13 -.107 3.273 -.107z"
                />
              </svg>`,
  },
  {
    title: "Predictive Modeling and Forecasting",
    description:
      "    Sophisticated predictive analytics tools to anticipate market trends, customer behavior, and business outcomes for strategic planning",
    icon: `              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary-color)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chart-area-line"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
                <path d="M4 12l3 -4l4 2l5 -6l4 4" />
              </svg>`,
  },
  {
    title: "AI-Powered Process Automation",
    description:
      "Intelligent automation solutions that streamline workflows, reduce errors, and increase efficiency across your organization",
    icon: `            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary-color)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cpu"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"
                />
                <path d="M9 9h6v6h-6z" />
                <path d="M3 10h2" />
                <path d="M3 14h2" />
                <path d="M10 3v2" />
                <path d="M14 3v2" />
                <path d="M21 10h-2" />
                <path d="M21 14h-2" />
                <path d="M14 21v-2" />
                <path d="M10 21v-2" />
              </svg>`,
  },
];

const serviceGrid = document.getElementById("serviceGrid");

serviceGrid.innerHTML = services
  .map(
    (service) =>
      `<aside
            class="bg-white p-4 rounded-md space-y-4"
            style="
              box-shadow: 0 1px 10px rgba(81, 169, 225, 0.2),
                0 4px 5px rgba(81, 169, 225, 0.12),
                0 2px 4px rgba(81, 169, 225, 0.14);
            "
          >
            <div class="flex justify-center">
             ${service.icon}
            </div>

            <h2 class="text-lg font-semibold text-center">
             ${service.title}
            </h2>
            <p class="text-center">
                ${service.description}
            </p>
        </aside>`
  )
  .join("");

const projects = [
  {
    hashtag: "Machine Learning",
    title: "Cognitive Drug Discovery",
    description:
      "A comprehensive small molecules drug discovery platform utilizing generative AI and accuracy of physics-based methods to create optimal molecules.",
    img: "./src/assets/drugdiscovery.jpg",
  },
  {
    hashtag: "Artificial Intelligence",
    title: "Praises.ai",
    description:
      "A custom AI & ML-based mobile application with custom Multimodal Language Models and Augmented Reality (AR) features.",
    img: "./src/assets/praisesai.jpg",
  },
  {
    hashtag: "AI Process Automation",
    title: "Healthcare Terminology Management",
    description:
      "Modernizes terminology curation and integrates with meaningful use standards to assure functionality of local HIT applications and semantic interoperability.",
    img: "./src/assets/termmgmt.jpg",
  },
  {
    hashtag: "AI Process Automation",
    title: "Supply Chain Management",
    description:
      "Leveraging real-time data from IoT sensors, the custom LLM optimizes inventory levels and reduces food waste by accurately predicting demand and shelf life across diverse product categories. The model's natural language processing capabilities enable seamless communication between various stakeholders, automating order processes and facilitating rapid response to supply chain disruptions.",
    img: "./src/assets/scm.jpg",
  },
  {
    hashtag: "Machine Learning",
    title: "Brain Scan Image Recognition",
    description:
      "Grad-CAM integrated into deep learning pipelines for fMRI analysis, providing interpretable visualizations of model decision-making processes and enhancing clinician trust in AI-assisted diagnoses.",
    img: "./src/assets/brainscan.jpg",
  },
];

const projectsGrid = document.getElementById("projectsGrid");

if (projectsGrid) {
  projectsGrid.innerHTML = projects
    .map(
      (project) =>
        `          <div
            class="grid lg:grid-cols-2 gap-10 items-center bg-white shadow-md"
            style="
              box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
                rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
            "
          >
            <aside>
              <img
                src=${project.img}
                alt=${project.title}
                class="w-full h-[400px] object-cover"
              />
            </aside>

            <aside class="space-y-2">
              <p class="bg-[#051C2C] p-1 text-white w-fit">#${project.hashtag}</p>
              <h5 class="font-semibold text-lg">${project.title}</h5>
              <p class="mt-2">
                ${project.description}  
              </p>

              <a
                href=""
                class="mt-8 flex items-center text-[var(--primary-color)] hover:underline"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </a>
            </aside>
          </div>`
    )
    .join("");
}

function toggleElementVisibility(element: HTMLElement) {
  element.classList.toggle("hide");
}

function createAccordionItem(item: AccordionItem, index: number) {
  return `
      <article class="question">
        <button
          class="accordion question-btn flex items-center justify-between w-[100%] text-md font-semibold py-3 text-left text-[#4D4D4D] cursor-pointer"
          data-index="${index}" 
        >
          <span class="tracking-[1px]">${item.title}</span>
          <div class="text-[var(--primary-color)]" id="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </div>
        </button>
        <div class="panel question-text">
          <p class="text-sm text-[#666666] pb-1">${item.content}</p>
        </div>
      </article>
    `;
}

function addAccordionListeners(questions: NodeListOf<Element>) {
  questions.forEach((question) => {
    const btn = question.querySelector(".question-btn");

    btn?.addEventListener("click", () => {
      questions.forEach((item) => {
        if (item !== question) {
          item.classList.remove("show-text");
          item.querySelector("svg")?.classList.remove("rotate");
        } else {
          item.querySelector("svg")?.classList.toggle("rotate");
        }
      });

      question.classList.toggle("show-text");
    });
  });
}

const accordionContainer = document.getElementById("accordion");

// Accordion Data
const accordionData: AccordionItem[] = [
  {
    title:
      "How does Alveum ensure data security and privacy in AI/ML projects?",
    content:
      "We implement robust security measures including: End-to-end data encryption, Strict access controls and authentication protocols, Regular security audits and vulnerability assessments, Compliance with international data protection regulations (e.g., GDPR, CCPA), Data anonymization and pseudonymization techniques",
  },
  {
    title:
      "What makes Alveum's AI solutions more cost-effective than developing in-house?",
    content:
      "Our team of AI/ML experts brings years of experience across various industries, reducing the learning curve, development time and to quickly scale your team up or down based on project needs, optimizing resource allocation",
  },
  {
    title:
      "How does Alveum approach the interpretability and explainability of AI models?",
    content:
      "By focusing on interpretability (model architectures) and explainability (XAI - LIME, SNAP and Decision Trees) , we ensure that our AI solutions not only perform well but also build trust and facilitate informed decision-making within our clients' organizations",
  },
];

// Accordion Items
accordionData.forEach((item, index) => {
  const accordionItemHTML = createAccordionItem(item, index);
  if (accordionContainer) {
    accordionContainer.innerHTML += accordionItemHTML;
  }
});

// Questions
const questions = document.querySelectorAll(".question");

// Accordion Listeners
addAccordionListeners(questions);
