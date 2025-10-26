import React from "react";
import CodeBlock from "../components/CodeBlock";

export default function Home() {
  return (
    <>
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
      <br/><br/>
      <div>
        <h1><b>Debian/Ubuntu (Source)</b></h1>
        <CodeBlock>
          sudo apt -y install build-essential git libgtk-3-dev libx11-dev libjansson-dev libluajit-5.1-dev<br/>
          git clone https://github.com/LibreSplit/LibreSplit --recurse-submodules<br/>
          cd LibreSplit<br/>
          make<br/>
          sudo make install<br/>
        </CodeBlock>
      </div>
    </>
  );
}
