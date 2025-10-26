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
            A: No. LiveSplit splits can be converted using <Link href="https://converter.libresplit.org"><u>this</u></Link> experimental tool.
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
            <b className="text-xl">Q: Does LibreSplit support native Linux executables?</b><br/>
            A: Technically, yes. However, due to differences between memory management between the operating systems, success may be limited.
        </p>
        <br/>
        <p>
            <b className="text-xl">Q: Where can I download splits and autosplitters?</b><br/>
            A: <Link href="https://resources.libresplit.org"><u>Here.</u></Link>
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
                    <li>- Components</li>
                    <li>- Signature/Pattern scanning</li>
                    <li>- Multiple executable support</li>
                </ul>
            </i>
        </p>
        <br/>
        </>
    );
}
