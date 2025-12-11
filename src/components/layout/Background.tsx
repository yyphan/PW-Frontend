export default function BackGround() {
    return (
        <div>
            <div className="bg-noise"></div>
            <div className="glow-blob" style={{top:'-10%', left:'-10%', width:'50vw', height:'50vw', background:'radial-gradient(circle, var(--neon-green), transparent 30%)'}}></div>
            <div className="glow-blob" style={{bottom:'-10%', right:'-10%', width:'60vw', height:'60vw', background:'radial-gradient(circle, var(--neon-blue), transparent 30%)'}}></div>  
        </div>
    );
}