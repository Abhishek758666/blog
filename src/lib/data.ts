export const blogData = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    date: "2023-04-15T10:00:00Z",
    content:
      "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.\n\nNext.js provides a solution to all of these problems. But more importantly, it puts you and your team in the pit of success when building React applications.\n\nNext.js aims to have best-in-class developer experience and many built-in features, such as:\n\n- An intuitive page-based routing system (with support for dynamic routes)\n- Pre-rendering, both static generation (SSG) and server-side rendering (SSR) are supported on a per-page basis\n- Automatic code splitting for faster page loads\n- Client-side routing with optimized prefetching\n- Built-in CSS and Sass support, and support for any CSS-in-JS library\n- Development environment with Fast Refresh support\n- API routes to build API endpoints with Serverless Functions\n- Fully extendable",
    tags: ["Next.js", "React", "Web Development"],
    likes: 42,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    slug: "understanding-react-hooks",
    excerpt:
      "Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class.",
    date: "2023-04-20T14:30:00Z",
    content:
      'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.\n\nHooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks don\'t work inside classes — they let you use React without classes.\n\nReact provides a few built-in Hooks like useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, and useDebugValue.\n\nThe State Hook (useState) lets you add React state to function components. The Effect Hook (useEffect) lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.',
    tags: ["React", "Hooks", "JavaScript"],
    likes: 38,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "3",
    title: "CSS-in-JS vs CSS Modules",
    slug: "css-in-js-vs-css-modules",
    excerpt: "Comparing different styling approaches in modern web development.",
    date: "2023-05-05T09:15:00Z",
    content:
      "When it comes to styling React components, there are several approaches to choose from. Two popular options are CSS-in-JS libraries and CSS Modules.\n\nCSS-in-JS is an approach where CSS is composed using JavaScript instead of defined in external files. Libraries like styled-components and Emotion are examples of this approach. They offer features like scoped styles, dynamic styling based on props, theming, and more.\n\nCSS Modules, on the other hand, let you write traditional CSS files but with local scoping by default. When you import a CSS Module, it exports an object with class names mapped to locally scoped identifiers. This ensures that the styles you write for a component won't affect other elements on the page.\n\nBoth approaches have their pros and cons. CSS-in-JS provides a more integrated experience with React's component model but adds runtime overhead. CSS Modules leverage existing CSS knowledge and tooling but might require additional setup.",
    tags: ["CSS", "Styling", "Web Development"],
    likes: 25,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "4",
    title: "Building a REST API with Node.js",
    slug: "building-rest-api-nodejs",
    excerpt: "Learn how to create a RESTful API using Node.js, Express, and MongoDB.",
    date: "2023-05-12T16:45:00Z",
    content:
      "Building a RESTful API with Node.js is a common task for web developers. In this blog post, we'll explore how to create a simple yet powerful API using Express.js and MongoDB.\n\nExpress.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's the de facto standard server framework for Node.js.\n\nMongoDB is a document database that stores data in flexible, JSON-like documents. It's a popular choice for many modern web applications due to its scalability and flexibility.\n\nWe'll cover setting up the project, defining routes, connecting to the database, implementing CRUD operations, adding authentication, and testing the API. By the end, you'll have a solid foundation for building your own APIs.",
    tags: ["Node.js", "API", "Express", "MongoDB"],
    likes: 31,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "5",
    title: "Introduction to TypeScript",
    slug: "introduction-to-typescript",
    excerpt: "Discover how TypeScript can enhance your JavaScript development experience.",
    date: "2023-05-18T11:20:00Z",
    content:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds static type definitions to JavaScript, which can help catch errors early and improve developer productivity.\n\nIn this post, we'll explore the basics of TypeScript, including its type system, interfaces, classes, and more. We'll also look at how it integrates with popular frameworks like React and Node.js.\n\nOne of the biggest benefits of TypeScript is its excellent tooling support. Modern code editors like Visual Studio Code provide features like auto-completion, navigation, and refactoring specifically for TypeScript.\n\nWhile there is a learning curve, many developers find that the benefits of TypeScript outweigh the costs, especially for larger projects or teams.",
    tags: ["TypeScript", "JavaScript", "Programming"],
    likes: 45,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "6",
    title: "Responsive Design Best Practices",
    slug: "responsive-design-best-practices",
    excerpt: "Tips and techniques for creating websites that work well on all devices.",
    date: "2023-05-25T13:10:00Z",
    content:
      "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It's essential in today's multi-device world.\n\nIn this post, we'll cover best practices for responsive design, including flexible grids, responsive images, media queries, and mobile-first design. We'll also explore tools and frameworks that can help you implement responsive designs more efficiently.\n\nOne key principle is to design with flexibility in mind. Use relative units like percentages, ems, or rems instead of fixed pixel values. Implement responsive images that adjust based on the device. And test your designs on a variety of devices and screen sizes.\n\nBy following these best practices, you can create websites that provide a great user experience regardless of how they're accessed.",
    tags: ["CSS", "Responsive Design", "Web Development"],
    likes: 29,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "7",
    title: "State Management in React",
    slug: "state-management-in-react",
    excerpt: "Comparing different state management solutions for React applications.",
    date: "2023-06-02T15:30:00Z",
    content:
      "State management is a crucial aspect of React application development. As applications grow in complexity, managing state becomes more challenging.\n\nIn this post, we'll compare different state management solutions for React, including Context API, Redux, MobX, Recoil, and Zustand. We'll discuss their pros and cons, use cases, and how to choose the right one for your project.\n\nThe Context API is built into React and provides a way to pass data through the component tree without having to pass props down manually at every level. It's great for simpler applications or specific sections of your app.\n\nRedux is a predictable state container that helps you write applications that behave consistently across different environments. It's more verbose but provides powerful debugging tools and middleware support.\n\nMobX is a battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming. It's less verbose than Redux but might be less predictable.\n\nRecoil and Zustand are newer libraries that aim to simplify state management while providing powerful features. They're worth considering for new projects.",
    tags: ["React", "State Management", "JavaScript"],
    likes: 37,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "8",
    title: "Getting Started with Docker",
    slug: "getting-started-with-docker",
    excerpt: "Learn how to containerize your applications with Docker.",
    date: "2023-06-10T09:45:00Z",
    content:
      "Docker is a platform for developing, shipping, and running applications in containers. Containers allow developers to package up an application with all of its dependencies and ship it as one package.\n\nIn this post, we'll cover the basics of Docker, including containers, images, Dockerfiles, and Docker Compose. We'll also walk through containerizing a simple web application.\n\nContainers are lightweight and contain everything needed to run the application, so you don't need to rely on what's installed on the host. This makes your applications more portable and easier to deploy.\n\nDocker simplifies the development process by providing a consistent environment, makes it easier to collaborate with others, and streamlines the deployment process. It's a valuable tool for modern software development.",
    tags: ["Docker", "DevOps", "Containers"],
    likes: 33,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "9",
    title: "Introduction to GraphQL",
    slug: "introduction-to-graphql",
    excerpt: "Discover how GraphQL can improve your API development experience.",
    date: "2023-06-18T14:20:00Z",
    content:
      "GraphQL is a query language for your API, and a server-side runtime for executing queries. It was developed by Facebook in 2012 and released as an open-source project in 2015.\n\nIn this post, we'll exploreplore the basics of GraphQL, including its schema definition language, queries, mutations, and subscriptions. We'll also compare it with REST and discuss when to use each approach.\n\nOne of the key benefits of GraphQL is it with REST and discuss when to use each approach.\n\nOne of the key benefits of GraphQL is that it allows clients to request exactly the data they need, no more and no less. This can help reduce over-fetching and under-fetching of data, which are common problems with REST APIs. GraphQL also enables clients to request multiple resources in a single query, reducing the number of network requests.\n\nHowever, GraphQL isn't always the best choice. REST can be simpler to implement for basic CRUD operations and has better caching support out of the box. The right choice depends on your specific requirements and constraints.",
    tags: ["GraphQL", "API", "Web Development"],
    likes: 40,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "10",
    title: "Web Accessibility Fundamentals",
    slug: "web-accessibility-fundamentals",
    excerpt: "Learn how to make your websites accessible to everyone.",
    date: "2023-06-25T10:15:00Z",
    content:
      "Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. It's not just a nice-to-have feature; in many countries, it's a legal requirement.\n\nIn this post, we'll cover the fundamentals of web accessibility, including the WCAG guidelines, semantic HTML, keyboard navigation, ARIA attributes, and testing tools. We'll also discuss common accessibility issues and how to fix them.\n\nBy making your websites accessible, you're not only helping people with disabilities but also improving the user experience for everyone. Accessible websites often have better SEO, are more usable on mobile devices, and reach a wider audience.\n\nRemember, accessibility is not a checklist but a continuous process. It should be considered from the beginning of a project and maintained throughout its lifecycle.",
    tags: ["Accessibility", "Web Development", "HTML"],
    likes: 27,
    image: "/placeholder.svg?height=400&width=800",
  },
]

export const commentsData = [
  {
    id: "comment-1",
    blogId: "1",
    parentId: null,
    author: "Alice",
    content: "Great introduction to Next.js! I've been wanting to try it out for a while.",
    date: "2023-04-16T08:30:00Z",
  },
  {
    id: "comment-2",
    blogId: "1",
    parentId: null,
    author: "Bob",
    content: "I've been using Next.js for a few months now and it's been a game-changer for my workflow.",
    date: "2023-04-16T10:15:00Z",
  },
  {
    id: "comment-3",
    blogId: "1",
    parentId: "comment-2",
    author: "Charlie",
    content: "What kind of projects have you built with it? I'm curious about real-world applications.",
    date: "2023-04-16T11:20:00Z",
  },
  {
    id: "comment-4",
    blogId: "1",
    parentId: "comment-2",
    author: "Bob",
    content:
      "I've built a few e-commerce sites and a blog. The static generation feature is perfect for content-heavy sites.",
    date: "2023-04-16T12:45:00Z",
  },
  {
    id: "comment-5",
    blogId: "2",
    parentId: null,
    author: "Diana",
    content: "Hooks have completely changed how I write React components. So much cleaner!",
    date: "2023-04-21T09:10:00Z",
  },
  {
    id: "comment-6",
    blogId: "2",
    parentId: null,
    author: "Evan",
    content: "I'm still getting used to the useEffect hook. The dependency array trips me up sometimes.",
    date: "2023-04-21T14:30:00Z",
  },
  {
    id: "comment-7",
    blogId: "2",
    parentId: "comment-6",
    author: "Fiona",
    content:
      "A good rule of thumb is to include all variables used inside the effect that might change between renders.",
    date: "2023-04-21T15:45:00Z",
  },
]

export const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password123",
    image: "/placeholder.svg?height=32&width=32",
  },
]
