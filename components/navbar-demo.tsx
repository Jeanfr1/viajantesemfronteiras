"use client";

import { Home, Globe2, MapPin, FileText } from 'lucide-react';
import { SVGProps } from 'react'; // Import SVGProps from React
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems: { name: string; url: string; icon: React.ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }> }[] = [
    { name: 'Início', url: '/', icon: Home as React.ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }> },
    { name: 'Destinos', url: '/destinos', icon: Globe2 as React.ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }> },
    { name: 'Guias', url: '/guias', icon: MapPin as React.ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }> },
    { name: 'Recursos', url: '/recursos', icon: FileText as React.ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }> },
    { name: 'Início', url: '/', icon: Home as React.ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }> },
    { name: 'Destinos', url: '/destinos', icon: Globe2 as React.ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }> },
    { name: 'Guias', url: '/guias', icon: MapPin as React.ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }> },
    { name: 'Recursos', url: '/recursos', icon: FileText as React.ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }> }
  ];

  return <NavBar items={navItems} />;
}
