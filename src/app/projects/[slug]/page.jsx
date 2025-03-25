import { client } from "@/sanity/lib/client";
import ProjectDetails from "./ProjectDetails"; // Import your client component

// Function to generate metadata dynamically
export async function generateMetadata({ params }) {
    const { slug } = await params;
    console.log(slug);
    

    const query = `*[_type == "project" && slug.current == $slug][0] {
        title,
        description
    }`;
    const project = await client.fetch(query, { slug });

    return {
        title: project ? `${slug}` : "Project Not Found",
        description: project ? project.description : "Details about this project are unavailable.",
    };
}

// Server Component fetching data & passing it to Client Component

export default async function ProjectPage({ params }) {
    const { slug } = await params;

    const query = `*[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        description,
        "mainimg": mainImage.asset->url,
        github,
        liveDemo,
        technologies[] {
            name,
            "icon": coalesce(icon.upload.asset->url, icon.url),
            link
        },
        features[],
        "images": gallery[].asset->url
    }`;

    const project = await client.fetch(query, { slug });

    if (!project) {
        return <div>Project not found</div>;
    }

    return <ProjectDetails project={project} />;
}
