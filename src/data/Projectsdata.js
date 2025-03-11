// data/projectsData.js
import chatx from '../../assets/chatx1.png'
import chatx2 from '../../assets/chatx2.png'
import chatx3 from '../../assets/chatx3.png'
import foodmaze from '../../assets/foodmaze1.png'
import foodmaze2 from '../../assets/foodmaze2.png'
import foodmaze3 from '../../assets/foodmaze3.png'
import foodmaze4 from '../../assets/foodmaze4.png'
import foodmaze5 from '../../assets/foodmaze5.png'
import foodmaze6 from '../../assets/foodmaze6.png'
import gemini from '../../assets/gemini.png'
import axios from '../../assets/Azios.png'
import swiper from '../../assets/swiper.png'
// import chatx from '@/assets/chatx1.png';

const projectsData = [
    {
        id: "chatx",
        title: "ChatX - Frontend Development",
        description: "In today's fast-paced digital world, AI chatbots are transforming the way we interact with technology. ChatX is a cutting-edge chatbot application built using React.js, Gemini API, and CSS to provide a seamless and intelligent conversation experience. Whether it's answering questions, providing recommendations, or engaging in casual conversations, ChatX delivers fast and accurate responses using the power of AI.",
        mainimg:chatx,
        images: [
            chatx,chatx2,chatx3
        ],
        features: [
            {
                id:1,
                title: "AI-Powered Conversations:",
                description: "ChatX leverages Google’s Gemini API to understand user queries and generate human-like responses. It processes natural language efficiently, making conversations smooth and engaging."
            },
            {
                id:2,
                title: "Built with React.js:",
                description: "Using React.js, ChatX ensures a dynamic and responsive UI. The component-based structure allows for easy scalability and maintenance, making it a robust application."
            },
            {
                id:3,
                title: "Sleek & Modern UI with CSS:",
                description: "ChatX features a clean, modern, and intuitive interface designed using CSS. The responsive design ensures a seamless experience across different devices, enhancing user engagement."
            },
            {
                id:4,
                title: "Real-Time Responses:",
                description: "Thanks to Gemini API’s fast processing capabilities, ChatX provides instant replies, making conversations feel fluid and natural."
            },
            {
                id:5,
                title: "Customizable & Scalable:",
                description: "ChatX is built to be flexible and easily customizable. Whether integrating new features, changing the design, or modifying API interactions, the project is structured for smooth enhancements."
            }
        ],
        technologies: [
            { id:1, name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", link: "https://reactjs.org/" },
            { id:2, name: "Gemini API", icon: gemini, link: "https://ai.google.dev/" },
            { id:3, name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { id:4, name: "Axios", icon: axios, link: "https://axios-http.com/" }
        ],
        github: "https://github.com/rupam0011/Chatx.git",
        liveDemo: "https://chatx-sable.vercel.app/"
    },
    {
        id: "foodmaze",
        title: "Foodmaze - Frontend Development",
        description: "In today’s fast-paced world, online grocery shopping has become a necessity. FoodMaze is a modern and intuitive eCommerce grocery shopping platform built using React, JSON Server, Redux, Material UI, and Swiper.js to deliver a seamless and feature-rich user experience. Whether you’re browsing products, adding them to your cart, or tracking your orders, FoodMaze ensures a smooth and interactive shopping journey with powerful state management, dynamic UI, and real-time updates.",
        mainimg:foodmaze,
        images: [
            foodmaze2,foodmaze3,foodmaze4,foodmaze5,foodmaze6
        ],
        features: [
            {
                id:1,
                title: "Complete E-Commerce Functionality:",
                description: "FoodMaze offers all essential eCommerce features, including user authentication, product browsing, cart, wishlist, order tracking, and search functionality to provide a robust shopping experience."
            },
            {
                id:2,
                title: "Secure Authentication & User Accounts:",
                description: "With JSON Server and Redux, FoodMaze handles secure login, signup, and user authentication, ensuring that user data is managed efficiently."
            },
            {
                id:3,
                title: "Smart Product Store & Cart Management:",
                description: "Built using Redux, FoodMaze provides a state-managed cart and wishlist system, allowing users to easily add, remove, and update items in their cart while keeping track of their favorite products."
            },
            {
                id:4,
                title: "Advanced Search & Filtering:",
                description: "FoodMaze makes shopping easier with real-time search and category filtering, allowing users to quickly find their desired products with just a few clicks."
            },
            {
                id:5,
                title: "Order Tracking & History:",
                description: "Users can view their order history, track active orders, and manage past purchases directly within their account."
            },
            {
                id:6,
                title: "Modern & Responsive UI with Material UI:",
                description: "Designed with Material UI & CSS, the platform features a sleek, responsive, and visually appealing interface, ensuring a smooth experience on both mobile and desktop."
            },
            {
                id:7,
                title: "Interactive Product Carousel & Sliders:",
                description: "With Swiper.js, FoodMaze delivers engaging product carousels and banners, making browsing more interactive and visually appealing."
            },
            {
                id:8,
                title: "Fast & Efficient API Communication with Axios:",
                description: "FoodMaze uses Axios for making efficient API requests, ensuring smooth and fast data fetching for products, user authentication, and order management."
            }
        ],
        technologies: [
            { id:1, name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", link: "https://reactjs.org/" },
            { id:2, name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", link: "https://redux.js.org/" },
            { id:3, name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", link: "https://mui.com/" },
            { id:4, name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { id:5, name: "Axios", icon: axios, link: "https://axios-http.com/" },
            { id:6, name: "Swiper.js", icon: swiper, link: "https://swiperjs.com/" }
        ],
        github: "https://github.com/rupam0011/foodmaze.git",
        // liveDemo: "https://foodmaze-demo.vercel.app"
    }
];

export default projectsData;
