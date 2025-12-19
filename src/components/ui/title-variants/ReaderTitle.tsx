export default function ReaderTitle({title} : {title: string}) {
    return (
        <div className="code-line">
            <span style={{color: '#dcdcaa'}}>read</span><span style={{color: '#d4d4d4'}}>(</span>
            <span style={{color: '#ce9178'}}>"{title}"</span>
            <span style={{color: '#d4d4d4'}}>)</span>
        </div>
    );
}
