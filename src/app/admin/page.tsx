import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await auth();
  
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-[100vh] bg-[#050505] text-white p-6 md:p-12 mix-blend-difference mt-24">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <h1 className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em]">Control Panel</h1>
          <form action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}>
            <button className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-full">
              Sign Out
            </button>
          </form>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Link href="/admin/projects/new" className="border border-white/10 rounded-2xl p-8 bg-black flex flex-col items-center justify-center text-center hover:border-white/40 transition-all cursor-pointer group min-h-[250px]">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-white group-hover:text-black group-hover:border-white">
                <span className="text-2xl font-light">+</span>
              </div>
              <h3 className="uppercase tracking-[0.1em] text-xs font-semibold">Compile New Project</h3>
           </Link>
           
           <div className="border border-white/10 rounded-2xl p-8 bg-black flex flex-col justify-between hidden md:flex col-span-2 min-h-[250px]">
              <h3 className="uppercase tracking-[0.1em] text-xs text-gray-500 mb-4">Database Overview</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-md">
                No active projects indexed in the database yet. Click "Compile New Project" to upload your first visual asset to the public collection.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
