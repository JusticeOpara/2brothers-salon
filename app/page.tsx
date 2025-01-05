import AppHero from "@/components/app-hero";
import AppNavbar from "@/components/app-navbar";


export default function Home() {
  return (
    //#671B0B #19100F
    <div className="px-24  bg-gradient-to-bl to-[#671B0B] from-[#19100F] min-h-screen text-white font-poppins">
    <AppNavbar/>
<AppHero/>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       FOOTER
      </footer>
    </div>
  );
}
