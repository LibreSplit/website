import Link from "next/link";


export default function FAQ() {
    return(
        <>
        <h1 className="text-2xl"><b><u>For speedrunners</u></b></h1>
        <br/>
        <p>
            <b className="text-xl">Q: Can I run LiveSplit Autosplitter (ASL) files in LibreSplit?</b><br/>
            A: No. LiveSplit autosplitters must be manually ported into LibreSplit&apos;s Lua context.
        </p>
        <br/>
        <p>
            <b className="text-xl">Q: Can I use my LiveSplit layouts and splits in LibreSplit?</b><br/>
            A: No. LiveSplit splits can be converted using <Link href="https://github.com/Loomeh/LivesplitToLAST"><u>this</u></Link> experimental tool.
        </p>
        <br/>
        <p>
            <b className="text-xl">Q: Will all of my Urn layouts and splits work inside LibreSplit?</b><br/>
            A: Yes.
        </p>
        <br/>
        <p>
            <b className="text-xl">Q: Does LibreSplit support Windows games running through Wine/Proton?</b><br/>
            A: Yes.
        </p>
        <br/>
        <p>
            <b className="text-xl">Q: Where can I download autosplitters?</b><br/>
            A: <Link href="https://loomeh.github.io/AutosplittersForLAST/"><u>Here.</u></Link>
        </p>
        <br/><br/><br/>
        
        <h1 className="text-2xl"><b><u>For autosplitter developers</u></b></h1>
        <br/>
        <p>
            <b className="text-xl">What features of ASL are not currently supported in LibreSplit?</b><br/>
            <i>
                <ul>
                    <li>- Settings (can be substituted with variables)</li>
                    <li>- External libraries (such as ASL Help)</li>
                    <li>- Signature/Pattern scanning (is currently being worked on)</li>
                    <li>- Multiple executable support</li>
                </ul>
            </i>
        </p>
        <br/>
        </>
    );
}