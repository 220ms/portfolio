const Projects = [
  {
    image: "petsocialsphere.png",
    title: "PetSocialSphere",
    description: `PetSocialSphere is a pet-focused social media app where users can create profiles for themselves and their pets. It includes features to post, like, and comment on posts, manage friendships, and view pet profiles. The app uses JWT for authentication, with a 15-minute lifespan for the access token, and a refresh token for refreshing the access token.`,
    technologies: [
      "React",
      "Node.js",
      "JWT",
      "Axios",
      "TanStack Query",
      "MongoDB",
    ],
    link: "https://app.petsocialsphereapi.com/",
    id: "PetSocialSphere1",
  },
  {
    image: "compare.png",
    title: "Legal Hackathon",
    description: `My team for the Monash Legal Hackathon created an AI-based application to solve a legal sector problem. 
        we used Python libraries, including opencv, to compare images and text to the Australian national trademark registry.
         The data was passed through a neural network to produce a score for copyright infringement. 
         I focused on UI design using the pygame module and in the end, we won the hackathon.`,
    technologies: ["Python", "AI", "Pygame"],
    link: "https://github.com/220ms/Hackathon",
    id: "Card1",
  },
  {
    image: "sorted-files.png",
    title: "Classify Images",
    description: `I created this code to solve a problem my parents had when they came back from their holiday in New Zealand.
         They wanted to upload to the cloud but they had too many images in the same folder and the folder size exceeded the upload 
         capacity for OneDrive. So I decided to come up with a solution that classifies images based on the date metadata contained 
         within the NEF image files and puts them into date-based directories.`,
    technologies: ["Python", "Metadata"],
    link: "https://github.com/220ms/sort-image-by-date",
    id: "Card2",
  },
];

export default Projects;
