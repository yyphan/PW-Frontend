import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-ide-bg border-b border-ide-border z-50 font-mono text-sm sm:text-base">
      <div className="max-w-[900px] w-full mx-auto px-5 h-full flex items-center justify-between">
        
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-ide-keyword">var</span>
          
          <span className="text-ide-var font-bold">YaoYifan</span>
          
          <span className="text-ide-fg">=</span>
          
          <div className="flex items-center gap-2 bg-black px-2 py-1 border border-zinc-700 rounded-sm">
            <Link 
              href="/" 
              className="text-ide-string underline decoration-1 underline-offset-4 hover:brightness-110 transition-all"
            >
              &quot;Techie&quot;
            </Link>
            
            <span className="text-zinc-600">|</span>
            
            <Link 
              href="/reader" 
              className="text-zinc-500 hover:text-ide-string transition-colors"
            >
              &quot;Reader&quot;
            </Link>
          </div>
          
          <span className="text-ide-fg">;</span>
        </div>

        <div className="text-ide-fg flex items-center gap-1 text-xs sm:text-sm">
          <span className="text-zinc-500">[</span>
          
          <button className="text-ide-string font-bold hover:brightness-110">
            &apos;EN&apos;
          </button>
          
          <span className="text-zinc-600">,</span>
          
          <button className="text-zinc-500 hover:text-ide-string transition-colors">
            &apos;CN&apos;
          </button>
          
          <span className="text-zinc-500">]</span>
        </div>
        
      </div>
    </header>
  );
}