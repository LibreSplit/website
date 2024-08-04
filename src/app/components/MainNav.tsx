import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { navLinks } from './navLinks';


export default function MainNav() {
    return (
      <div className="mr-4 hidden gap-2 md:flex text-2xl" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {navLinks.map(([item, url], index) => (
          <Link key={index} href={url} passHref>
            <Button variant="link" size="lg" className="hover:bg-[#3b3b3b] text-white hover:text-white">
              {item}
            </Button>
          </Link>
        ))}
      </div>
    );
  }