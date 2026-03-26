import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="w-full max-w-md p-8 border border-white/10 rounded-2xl bg-black shadow-2xl">
        <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase mb-8 text-center text-white">Access Portal</h1>
        
        <form 
          action={async (formData) => {
            "use server"
            await signIn("credentials", formData)
          }} 
          className="flex flex-col gap-8 text-sm"
        >
          <div className="flex flex-col gap-2">
            <label className="uppercase tracking-widest text-gray-500 text-[10px] font-semibold">Username</label>
            <input 
              name="username"
              type="text" 
              className="bg-transparent border-b border-white/20 px-0 py-2 focus:outline-none focus:border-white text-white transition-colors text-base"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="uppercase tracking-widest text-gray-500 text-[10px] font-semibold">Password</label>
            <input 
              name="password"
              type="password" 
              className="bg-transparent border-b border-white/20 px-0 py-2 focus:outline-none focus:border-white text-white transition-colors text-base"
              required
            />
          </div>
          
          <button 
             type="submit" 
             name="action"
             value="credentials"
             className="mt-4 border border-white/40 uppercase tracking-widest text-[10px] px-6 py-4 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
