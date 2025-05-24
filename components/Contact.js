export default function Contact() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24" id="contact">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contact</h2>
      <p className="text-lg text-center">
        Email: <a href="mailto:your@email.com" className="underline hover:text-blue-600 dark:hover:text-blue-400">your@email.com</a>
      </p>
    </section>
  );
} 