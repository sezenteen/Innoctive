import CardCarousel from "../components/CardCarousel.jsx";

const featuredCardData = [
  {
    title: "Clean-up Drive: Tuul River",
    description: "Help us clean up the beautiful Tuul River. Family-friendly event!",
    imageUrl: "https://images.unsplash.com/photo-1549419358-00f75d27195d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linkUrl: "/opportunities/tuul-river-cleanup",
    linkText: "Join Now"
  },
  {
    title: "Tutor Children in Remote Areas",
    description: "Provide online or in-person tutoring for children lacking educational access.",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4486981881?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linkUrl: "/opportunities/children-tutor",
    linkText: "Apply Today"
  },
  {
    title: "Assist at Community Health Fairs",
    description: "Support health screenings and awareness campaigns in local neighborhoods.",
    imageUrl: "https://images.unsplash.com/photo-1542884742-0f04c6436f6d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linkUrl: "/opportunities/health-fair-support",
    linkText: "Learn More"
  },
  {
    title: "Elderly Companion Program",
    description: "Spend time with seniors, providing companionship and assistance.",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f539666?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linkUrl: "/opportunities/elderly-companion",
    linkText: "Sign Up"
  }
];

<section class="py-16 bg-gray-100 text-gray-800">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-10">Featured Volunteer Opportunities</h2>
    <CardCarousel cards={featuredCardData} client:load />
  </div>
</section>