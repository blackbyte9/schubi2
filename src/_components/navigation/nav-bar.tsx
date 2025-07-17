import Link from "next/link";
import { NavigationMenuLink, NavigationMenuList, NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export function NavBar() {
  return (
    <nav className="bg-green-800 text-white shadow">
      <NavigationMenu className="container mx-auto px-4 py-2" viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className="text-3x1 font-bold px-8">Schubi2</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/lease" >Ausleihen</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/return" >Zurückgeben</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Daten</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild>
                <Link href="/books">Bücher</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/students">Schüler:innen</Link>
              </NavigationMenuLink>
              <hr className="my-2 h-px bg-green-400 border-0" />
              <NavigationMenuLink asChild>
                <Link href="/students">Schüler:innen importieren</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className="text-3x1 font-bold px-8">Login</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
