export default function Loading() {
    return (
        <div className="pt-[120px] max-w-[800px] mx-auto px-6 font-mono text-sm">
      
        <div className="flex flex-col gap-2">
          
          <div className="flex items-center gap-2 text-ide-comment">
            <span>&gt;</span>
            <span>System.Read(Request)...</span>
          </div>
  
          <div className="flex items-center gap-2 text-ide-comment">
            <span>&gt;</span>
            <span className="animate-pulse">Fetching data from backend...</span>
          </div>
  
          <div className="mt-2">
            <span className="text-ide-keyword">awaiting</span>
            <span className="inline-block w-2.5 h-5 ml-1 bg-ide-comment animate-soft-blink align-middle" />
          </div>
  
        </div>
      </div>
    );
  }
  