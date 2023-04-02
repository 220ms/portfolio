const Projects = [
    {
        image: 'compare.png',
        title: 'Legal Hackathon',
        description: `My team for the Monash Legal Hackathon created an AI-based application to solve a legal sector problem. 
        we used Python libraries, including opencv, to compare images and text to the Australian national trademark registry.
         The data was passed through a neural network to produce a score for copyright infringement. 
         I focused on UI design using the pygame module and in the end, we won the hackathon.`,
        technologies: ['Python','AI','Pygame'],
        link: 'https://github.com/220ms/Hackathon',
        id: 'Card1'
    },
    {
        image: 'sorted-files.png',
        title: 'Classify Images',
        description: `I created this code to solve a problem my parents had when they came back from their holiday in New Zealand.
         They wanted to upload to the cloud but they had too many images in the same folder and the folder size exceeded the upload 
         capacity for OneDrive. So I decided to come up with a solution that classifies images based on the date metadata contained 
         within the NEF image files and puts them into date-based directories.`,
        technologies: ['Python','Metadata'],
        link: 'https://github.com/220ms/sort-image-by-date',
        id: 'Card2'
    },
    {
        image: 'ecommerce.png',
        title: 'E-Commerce site',
        description: `I developed an E-Commerce website using CakePHP for my final year project. We created a product management system for easy purchasing and added a secure payment gateway through PayPal.
         Despite the challenges, my team delivered a functional site and gained valuable experience in web development and project management.`,
        technologies: ['CakePHP','Web development','SQL','Project Management'],
        link: 'https://github.com/220ms/JJCrackers-Lavosh',
        id: 'Card3'
    }
]

export default Projects;