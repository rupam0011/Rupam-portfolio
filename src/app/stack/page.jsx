import Stack from "./Stack"; // Import your client component

export const generateMetadata = () => ({
  title: "Stack",
  description: "Frameworks, libraries, and tools I use regularly in my projects.",
  keywords: "React, Redux, Material UI, Bootstrap",
});

export default function StackPage() {
  return <Stack />;
}
