export default function TechTag({ tech }: { tech: string }) {
  return (
    <span className="px-4 py-1 bg-gray-200/75 text-gray-700 text-sm font-semibold border border-gray-400/50 rounded-full dark:bg-gray-700 dark:text-gray-300 cursor-default">
      {tech}
    </span>
  );
}
