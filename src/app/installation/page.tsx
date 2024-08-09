import React from "react";
import CodeBlock from "../components/CodeBlock";
import DownloadButton from "../components/DownloadButton";
import { Button } from "@/components/ui/button";

const FILE_URL:string = "https://libresplit.loomeh.tech/files/LibreSplit-x86_64.AppImage";

export default function Home() {
  return (
    <>
      <div>
        <h1><b>AppImage</b></h1><br/>
        <DownloadButton fileUrl={FILE_URL}/>
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
      <br/><br/>
      <div>
        <h1><b>Debian/Ubuntu (Source)</b></h1>
        <CodeBlock>
          sudo apt -y install git libgtk-3-dev libx11-dev libjansson-dev libluajit-5.1-dev<br/>
          git clone https://github.com/wins1ey/LibreSplit --recurse-submodules<br/>
          cd libresplit<br/>
          make<br/>
          sudo make install<br/>
        </CodeBlock>
      </div>
    </>
  );
}
