import ContactForm from "@/components/ContactForm";
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle";

export default function Home() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <DarkModeToggle />
      <p>Please fill in the form below</p>
      <ContactForm />
    </div>
  );
}
