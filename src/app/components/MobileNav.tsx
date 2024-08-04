import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { navLinks } from './navLinks';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function MobileNav() {
  return (
    <Drawer direction="right">
      <DrawerTrigger color="black">
        <MenuIcon color="white"/>
      </DrawerTrigger>
      <DrawerContent className="bg-[#1c1c1c]">
        <div className="flex flex-col gap-2 p-4">
          {navLinks.map(([item, url], index) => (
            <Link key={index} href={url} passHref>
              <Button variant="link" size="lg" className="hover:bg-[#3b3b3b] text-white">
                {item}
              </Button>
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}