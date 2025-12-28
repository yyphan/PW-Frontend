export default function TechieTitle({ title }: { title: string }) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <span className="text-ide-keyword">const</span>
            <span className="text-ide-var font-bold">Title</span>
            <span className="text-white">=</span>
            <span className="text-ide-string break-words">
                "{title}"
            </span>
        </div>
    );
}
