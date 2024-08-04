import Link from "next/link";


export default function FAQ() {
    return(
        <>
        <p>
            <b>Q: Can I run LiveSplit Autosplitter (ASL) files in LibreSplit?</b><br/>
            A: No. LiveSplit autosplitters must be manually ported into LibreSplit&apos;s Lua context.
        </p>
        <br/>
        <p>
            <b>Q: Can I use my LiveSplit layouts and splits in LibreSplit?</b><br/>
            A: No. LiveSplit splits can be converted using <Link href="https://github.com/Loomeh/LivesplitToLAST"><u>this</u></Link> experimental tool.
        </p>
        <br/>
        <p>
            <b>Q: Will all of my Urn layouts and splits work inside LibreSplit?</b><br/>
            A: Yes.
        </p>
        <br/>
        <p>
            <b>Q: Does LibreSplit support Windows games running through Wine/Proton?</b><br/>
            A: Yes.
        </p>
        <br/>
        <p>
            <b>Q: Where can I download autosplitters?</b><br/>
            A: <Link href="https://loomeh.github.io/AutosplittersForLAST/"><u>Here.</u></Link>
        </p>
        
        </>
    );
}