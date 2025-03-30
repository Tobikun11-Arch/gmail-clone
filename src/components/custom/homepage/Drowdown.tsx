"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronUp } from 'lucide-react';

export function DropdownMenuRadioGroupDemo() {
  const [ isOpen, setOpen ] = React.useState<boolean>(false)
  
  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className="relative">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 text-blue-700 mt-2 absolute -right-4">
        <DropdownMenuLabel>For my personal use</DropdownMenuLabel>
        <DropdownMenuLabel>For my work or business</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
