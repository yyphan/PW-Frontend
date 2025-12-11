import Link from "next/link";
import Image from 'next/image'

export default function SeriesCard()
{
    return (
        <Link href="#" className="code-block">
            <div className="line-numbers">01<br />02<br />03</div>
            <div className="code-content">
                <div className="doc-comment">
                    // Implementing Ray Tracing manually.<br />
                    // No HDRP, using pure C# & Compute Shaders.
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-ide-keyword">const</span>
                    <span className="text-ide-var font-bold">Title</span>
                    <span className="text-white">=</span>
                    <span className="text-ide-string break-words">
                        "原子习惯"
                    </span>
                </div>

                <div className="code-line">
                    <span style={{color: '#dcdcaa'}}>read</span><span style={{color: '#d4d4d4'}}>(</span>
                    <span style={{color: '#ce9178'}}>"原子习惯"</span>
                    <span style={{color: '#d4d4d4'}}>)</span>
                </div>
            </div>
            <div className="preview-window">
                {/*<Image src=null alt="Cover" width={400} height={300}/>*/}
            </div>
        </Link>
    );
}
