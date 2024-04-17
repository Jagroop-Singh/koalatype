'use client';
import Image from "next/image";
import {Fragment, useState, useRef} from 'react';
import {Dialog, Disclosure, Popover, Transition} from '@headlessui/react'
import TypingGame from './TypingGame';
import Header from './Header';
import{
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

export default function Home() {
  return (
    <main>
      <Header />
      <TypingGame />
    </main>
  );
}
