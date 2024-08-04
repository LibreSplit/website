import CodeBlock from "../components/CodeBlock";

export default function Home() {
  return (
    <>
      <div>
        <h1><b>LibreSplit does not currently have any officially distributed binary packages.</b></h1>
      </div>
      <br/><br/>
      <div>
        <h1><b>AUR (w/ helper)</b></h1>
        <CodeBlock>paru -S libresplit-git</CodeBlock>
      </div>
      <br/><br/>
      <div>
        <h1><b>AUR (manual)</b></h1>
        <CodeBlock>
          git clone https://aur.archlinux.org/libresplit-git.git<br/>
          cd libresplit-git<br/>
          makepkg -si
        </CodeBlock>
      </div>
    </>
  );
}
