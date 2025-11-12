import Lenis from "lenis";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./styles.css";

import gsap from "gsap";
import BrainscanImg from "../src/assets/AI4.jpg";
import canadaImg from "../src/assets/Hajj-N.jpg";
import ctoImg from "../src/assets/engr.jpg";
import drugDiscoveryImg from "../src/assets/AI-.jpg";
import praisesAiImg from "../src/assets/AI2-.jpg";
import scmImg from "../src/assets/AI5.jpg";
import termMgmtImg from "../src/assets/AI3.jpg";
import cartonImg from "../src/assets/carton.jpg";
import buildingImg from "../src/assets/building.jpg";
import globeImg from "../src/assets/globe.jpg";
import hotelImg from "../src/assets/hotel.jpg";
import hajjImg from "../src/assets/hajj.jpg";
import airplaneImg from "../src/assets/airplane.jpg";

interface AccordionItem {
  title: string;
  content: string;
}

new Lenis({
  autoRaf: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const sections: { element: HTMLElement | null; animateChildren: boolean }[] =
    [
      { element: document.querySelector("#hero"), animateChildren: true },
      { element: document.querySelector("#trusted"), animateChildren: false },
      { element: document.querySelector("#provides"), animateChildren: false },
      { element: document.querySelector("#about"), animateChildren: false },
      { element: document.querySelector("#project-0"), animateChildren: false },
      { element: document.querySelector("#project-1"), animateChildren: false },
      { element: document.querySelector("#project-2"), animateChildren: false },
      { element: document.querySelector("#project-3"), animateChildren: false },
      { element: document.querySelector("#project-4"), animateChildren: false },
      { element: document.querySelector("#services"), animateChildren: false },
      {
        element: document.querySelector("#testimonies"),
        animateChildren: false,
      },
      { element: document.querySelector("#news"), animateChildren: false },
      { element: document.querySelector("#faqs"), animateChildren: false },
      { element: document.querySelector("#footer"), animateChildren: false },
      {
        element: document.querySelector("#footer-text"),
        animateChildren: false,
      },
    ];

  const animateSection = (section: HTMLElement | null): void => {
    if (section) {
      gsap.from(section, {
        opacity: 0,
        y: 100,
        scale: 0.95, // Slight zoom-in effect
        // rotation: 5, // Subtle rotation for a modern feel
        duration: 1.2, // Faster but smooth
        ease: "power4.out", // Smoother easing for a modern look
      });
    }
  };

  const animateHeroChildren = (): void => {
    gsap.from("#hero h1, #hero p, #hero img", {
      opacity: 0,
      y: 40,
      duration: 1.4,
      ease: "expo.out", // Smoother, faster exit
      stagger: 0.2, // Delays each item slightly for staggered effect
      scale: 0.9, // Add a slight scale-up effect
    });
  };

  // Function to animate section children if specified
  const animateSectionChildren = (section: {
    element: HTMLElement | null;
    animateChildren: boolean;
  }): void => {
    if (
      section.animateChildren &&
      section.element === document.querySelector("#hero")
    ) {
      animateHeroChildren();
    }
  };

  // Create an intersection observer to trigger animations when sections come into view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((sec) => sec.element === entry.target);

          if (section) {
            animateSection(section.element);
            animateSectionChildren(section);
          }
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the section is visible
    }
  );

  // Start observing all sections
  sections.forEach((section) => {
    if (section.element) {
      observer.observe(section.element);
    }
  });
});

const navBtn = document.getElementById("nav-btn");
const links = document.getElementById("links");
const contact_btn = document.getElementById("contact-btn");

navBtn?.addEventListener("click", () => {
  links?.classList.toggle("hide");
  contact_btn?.classList.toggle("hide");
});

const services = [
  {
    title: "Hajj & Uumrah",
    description:
      "Sacred journey made easy for you with spiritual connections all through your journey with our nasheeds and adhkars",
    icon: `      <img src="../src/assets/hajj.jpg" alt="Kaaba icon" width="50" height="50" class="object-cover"/>`,
    img: hajjImg,
    alt: "Kaaba icon",
  },
  {
    title: "Travels and Tours",
    description:
      "Experience seamless global travel with our comprehensive flight bookings, visa assistance and customized tour packages.",
    icon: `    <img src="../src/assets/airplane.jpg" alt="Airplane icon" width="50" height="50" object-cover/>`,
    img: airplaneImg,
  },
  {
    title: "General Contracting",
    description:
      "Quality construction services for residential and commercial projects with expert craftmanship and timely delivery.",
    img: globeImg,
  },
  //
  {
    title: "General Merchandise",
    description:
      "Reliable import-export solutions connecting businesses with quality products across diverse industries worldwide.",
    img: cartonImg,
  },
  {
    title: "International trading",
    description:
      "    Facilitating smooth commercial transactions and bulk trading operations across borders with transparency.",
    img: buildingImg,
  },
  {
    title: "Accommodation Services",
    description:
      " Premium hotel reservations and comfortable lodging arrangements for pilgrims and travelers worldwide.",
    img: hotelImg,
  },
];

const serviceGrid = document.getElementById("serviceGrid");

if (serviceGrid) {
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
              <img src=${service.img} alt=${service.alt} width="50" height="50" class='object-cover'/>
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
}

const projects = [
  {
   
    title: "",
    description:
      "Over 15 years of delivering exceptional services across pilgrimage,construction,travel,and trade sectors",
    img: drugDiscoveryImg,
  },
  {
    
    title: "24/7 Support",
    description:
      "We operate with full licensing and accreditation from relevant Nigerian authorities.Our Hajj and Umrah services are officially approved,our construction projects meet all building codes,and our trading operations comply with international regulations.",
    img: praisesAiImg,
  },
  {
    
    title: "Members of the  Management",
    description:
      "Our team comprises of seasoned professionals with extensive expertise in Islamic pilgrimage protocols,international travel regulations,construction management, and global trade.We bring knowlwdge,skill and dedication to every client interaction.",
    img: termMgmtImg,
  },
  {
    
    title: "",
    description:
      "Your needs dont't operate on a 9-5 schedule,and neither do we.Our dedicated support team is available around the clock to assist you with inquiries,emergencies,and last-minute changes,ensuring a smooth experience from start to finish.",
    img: scmImg,
  },
  {
    
    title: "",
    description:
      "No hidden fees,no surprise charges.Just honest,upfront pricing that respects your budget.We believe quality services should be accessibl,affordable.Our competitive rates reflect that commitment while delivering exceptional value.",
    img: BrainscanImg,
  },
];

const projectsGrid = document.getElementById("projectsGrid");

if (projectsGrid) {
  projectsGrid.innerHTML = projects
    .map(
      (project, index) =>
        `          <div
            class="grid lg:grid-cols-2 gap-10 items-center bg-white" id=${
              "project-" + index
            }
          
          >
             <aside class="${
               index % 2 === 0 ? "lg:order-last lg:flex lg:justify-end" : ""
             }">
              <img
                src=${project.img}
                alt=${project.title}
                class="w-[500px] h-[300px] lg:h-[400px] object-cover" style="height: 500px;"
              />
            </aside>

            <aside class="space-y-2">
              
              <h5 class="font-semibold text-lg">${project.title}</h5>
              <p class="mt-2">
                ${project.description}  
              </p>

            
            </aside>
          </div>`
    )
    .join("");
}

const blogs = [
  {
    img: canadaImg,
    date: "01 Oct 2025",
    title: "Hajj 2026 Registration Now Open",
    desc: "Early bird registration for Hajj 2026 is now open. Secure your spot for a spiritually enriching journey with our comprehensive packages...",
  },
  {
    img: praisesAiImg,
    date: "20 Oct 2025",
    title: 
      "New partnership with Al-Noor Hospitality Group.",
    desc: "We are excited to announce our strategic partnership with one of the leading accommodation providers in Mecca and Medina....",
  },
  {
    img: ctoImg,
    date: "28 Nov 2025",
    title:
      "Lagos Office Expansion Complete",
    desc: "Our expanded Lagos office at Ojokoro is now fully operational with enhanced facilities and additional staff to better serve our clients in the region...",
  },
];

const blogsGrid = document.getElementById("blogsGrid");

if (blogsGrid) {
  blogsGrid.innerHTML = blogs
    .map(
      (blog) =>
        `
         <aside class="shadow rounded-lg">
              <img src=${blog.img} alt=${blog.title} class="h-[200px] w-full object-cover rounded-t-lg" />
              <div class="my-6 space-y-2 p-2">
                <p class="font-semibold text-[#A9B7C4] uppercase text-sm">
                ${blog.date}
                </p>
                <h5 class="font-semibold min-h-[5rem]">
                 ${blog.title}
                </h5>
                <p class="text-[#4D4D4D] text-sm">${blog.desc}</p>
                <a
                  href=""
                  class="mt-4 flex items-center text-[var(--primary-color)] hover:underline"
                >
                  Read More
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
              </div>
            </aside>
  `
    )
    .join("");
}

// function toggleElementVisibility(element: HTMLElement) {
//   element.classList.toggle("hide");
// }

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
      "What makes A-Din Globals differnt from other Hajj and travel agencies?",
    content:
      "Unlike single service providers,A-DIN Global offers a complete ecosystem of services under one roof.We're not just a travel agency,we are your lifetime partner.Whether you need pilgrimage services today,construction services tommorrow or international trading support next year,we are here for you.Our multi-location presence in Ilorin and Lagos,combined with years of experiece and 24/7 support,means you always have a trusted partner ready to serve you.",
  },
  {
    title:
      "How do you ensure the quality and safety of your hajj and umrah packages?",
    content:
      "Quality and safety are non negotiables for us.We are fully licensed and accredited by Nigerian authorities,and we partner exclusively with verified,premium hotels within walking distance of Masjid al-Haram and Masjid an-Nabawi.Our experienced team handles every detail,from visa processing to on-ground support,to ensure a smooth,safe and spiritually fulfilling journey for all our clients.Our 24/7 support means you are never alone during your sacred journey.we also maintain small group sizes to provide personalized attention and care for each pilgrim.",
  },
  {
    title:
      "Can A-DIN Global handle multiple services for my business simultaneously?",
    content:
      "Absolutely!That's one of our core strengths.Our integrated service model allows us to manage multiple aspects of your business needs seamlessly.Whether you require construction services for a new office building,travel arrangements for your team,and international trading support,we coordinate everything efficiently to save you time and hassle.Our dedicated account managers ensure clear communication and smooth execution across all services.",
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

// TESTIMONIALS
const testimonials = [
  {
    name: "Barr Fatimah A.",
    company: "A barrister and business owner in Lagos Nigeria",
    comment:
      "My hajj journey with A-DIN Globals was truly a blessing.From visa processing to accommodation near the Masjid al-Haram,everything was perfectly arranged.Their team's attention to detail and spiritual suppport made this experience unforgettable.I felt cared for every step of the way.May Allah reward them abundantly for their excellent services.",
  },
  {
    name: "Captain Olumide J.",
    company: "SkyWings Aviation Services",
    comment:
      "We've patnered with A-Din Globals for over 5years,and their professionalism is exceptional.They handle flight bookings with precision and prioritizes their client's comfort and satisfaction.Their team is knowledgeable,responsive and truly understands the aviation industry.It's been a pleasure working with them.",
  },
  {
    name: "Engr Abdullah S.",
    company: "Project Manager,ilorin",
    comment:
      "A-DIN Globals constructed our office complex,and i couldn't be more impressed.They delivered quality workmanship,stayed within budget and completed the project ahead of schedule.Their project management team was transparent throughout,and their attention to structural integrity was outstanding.I highly recommend their construction services to anyone. ",
  },
  {
    name: "Ahmad H.",
    company: "Dir,Al-Noor Hospitality Group,Saudi Arabia",
    comment:
      "A-DIN Globals has been our trusted partner for accommodation services for several years.They consistently secures excellent lodging options for our clients,pilgrims and business travelers alike.Their team is efficient,responsive and goes above and beyond to ensure a comfortable stay for all.Our partnership has been invaluable to our operations.",
  },
];

const testimonialContainer = document.getElementById("testimonials-container");

if (testimonialContainer) {
  testimonialContainer.innerHTML = `
    <div class="swiper">
      <div class="swiper-wrapper">
        ${testimonials
          .map(
            (testimony) => `
            <div class="swiper-slide">
              <article
                class="p-6 lg:w-[800px] mx-auto flex flex-col gap-4 items-center font-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="var(--primary-color)"
                  stroke="var(--primary-color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="50"
                  height="50"
                  stroke-width="1.5"
                >
                  <path
                    d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"
                  ></path>
                  <path
                    d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"
                  ></path>
                </svg>

                <p class="text-center text-[#171717] font-medium text-lg">
                ${testimony.comment}
                </p>

                <p class="text-[#667185] text-center font-medium mt-4">
                  ${testimony.name}, ${testimony.company}
                </p>
              </article>
            </div>`
          )
          .join("")}
      </div>
    </div>`;

  new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".image-swiper-button-next",
      prevEl: ".image-swiper-button-prev",
      disabledClass: "swiper-button-disabled",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

// FORM
//document.addEventListener("DOMContentLoaded", function () {
 // const form = document.getElementById("contactForm");

 // form?.addEventListener("submit", function (event) {
   /// event.preventDefault();

    //const nameInput = document.querySelector(
   //   'input[name="Name"]'
   // ) as HTMLInputElement | null;
 //   const emailInput = document.querySelector(
     // 'input[name="Email"]'
   // ) as HTMLInputElement | null;
    //const messageInput = document.getElementById(
    //  "message"
    //) as HTMLInputElement | null;

    //if (nameInput && emailInput && messageInput) {
    //  const name = nameInput.value;
    //  const email = emailInput.value;
      //const message = messageInput.value;

      //const createMailtoLink = () => {
       // const mailto = "contact@alveum.com";
       // const subjectParam = encodeURIComponent(
        //  "contacting you from your website"
       // );
       // const bodyParam = encodeURIComponent(`Hello, I'm ${name}.\n${message}`);
       // const emailParam = encodeURIComponent(email);

      //  return `mailto:${mailto}?subject=${subjectParam}&body=${bodyParam}&cc=${emailParam}`;
     // };

      //const mailtoLink = createMailtoLink();
      //window.open(mailtoLink, "_blank");
   // }
 // });
//});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm") as HTMLFormElement | null;
  const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement | null;
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form inputs
    const nameInput = document.querySelector('input[name="Name"]') as HTMLInputElement | null;
    const emailInput = document.querySelector('input[name="Email"]') as HTMLInputElement | null;
    const messageInput = document.getElementById("message") as HTMLTextAreaElement | null;

    if (!nameInput || !emailInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      if (errorMessage) {
        errorMessage.textContent = "Please fill in all fields.";
        errorMessage.classList.remove("hidden");
      }
      return;
    }

    // Disable button and show "Sending..."
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    // Create mailto link
    const mailto = "contact@alveum.com";
    const subjectParam = encodeURIComponent("Contacting you from your website");
    const bodyParam = encodeURIComponent(`Hello, I'm ${name}.\n\n${message}`);
    const emailParam = encodeURIComponent(email);
    const mailtoLink = `mailto:${mailto}?subject=${subjectParam}&body=${bodyParam}&cc=${emailParam}`;

    // Simulate sending (no backend)
    try {
      window.location.href = mailtoLink;

      // Optional: Show success message for a few seconds
      if (successMessage) {
        successMessage.textContent = "Message ready to send via your email app!";
        successMessage.classList.remove("hidden");
      }

      // Reset form
      form.reset();
    } catch (error) {
      if (errorMessage) {
        errorMessage.textContent = "Something went wrong. Please try again.";
        errorMessage.classList.remove("hidden");
      }
    } finally {
      // Re-enable button after 2 seconds
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        }
      }, 2000);
    }
  });
});

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    timestamp: string;
}

//  Google Apps Script URL //
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx8H4uRP-KwfjycHQo7qfwq08zbDAqUYfRvFg5FXLuWknWx1fWxLyzjrP0XFDK5442H/exec';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const successMessage = document.getElementById('successMessage') as HTMLDivElement;
    const errorMessage = document.getElementById('errorMessage') as HTMLDivElement;

    if (form) {
        form.addEventListener('submit', async (e: Event) => {
            e.preventDefault();

            // Hide previous messages
            successMessage?.classList.add('hidden');
            errorMessage?.classList.add('hidden');

            // Disable submit button
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }

            try {
                // Collect form data
                const formData: FormData = {
                    firstName: (document.getElementById('firstName') as HTMLInputElement).value,
                    lastName: (document.getElementById('lastName') as HTMLInputElement).value,
                    email: (document.getElementById('email') as HTMLInputElement).value,
                    phone: (document.getElementById('phone') as HTMLInputElement).value,
                    service: (document.getElementById('service') as HTMLSelectElement).value,
                    message: (document.getElementById('message') as HTMLTextAreaElement).value,
                    timestamp: new Date().toISOString()
                };

                // Send to Google Sheets
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                // Show success message
                successMessage?.classList.remove('hidden');
                form.reset();

                // Scroll to success message
                successMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });

            } catch (error) {
                console.error('Error:', error);
                errorMessage?.classList.remove('hidden');
                errorMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } finally {
                // Re-enable submit button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }
            }
        });
    }
});

    

    


const currentYear = document.getElementById("currentYear") as HTMLElement;
currentYear.textContent = new Date().getFullYear().toString();
