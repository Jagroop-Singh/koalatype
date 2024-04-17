'use client';
import Image from "next/image";
import {Fragment, useState, useRef} from 'react';
import {Dialog, Disclosure, Popover, Transition} from '@headlessui/react'
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


const quotes = [ 
  {id: '1', content: 'whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.', author: 'Friedrich Neitzsche'},
  {id: '2', content: 'There is no hunting like the hunting of man, and those who have hunted armed men long enough and liked it, never care for anything else thereafter.', author: 'Ernest Hemingway'},
  {id: '3', content: 'Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.', author: 'Henry Van Dyke'},
]

var activeindex = 0;
var finalindex = quotes[1].content.length;
var typed_entries = 0;
var uncorrected_errors = 0;
var time_start = 0;

const validateinput = (c) => {
  if (quotes[1].content.charAt(activeindex) == c){
    let a = document.querySelector("#letter");
    let b = activeindex;
    while(b>0){
      a = a.nextElementSibling;
      b--;
    }
    a.classList.remove("text-red-400");   
    a.classList.add("text-green-400");
  }else{
    uncorrected_errors++;
    let a = document.querySelector("#letter");
    let b = activeindex;
    while(b>0){
      a = a.nextElementSibling;
      b--;
    }
    a.classList.add("text-red-400");   
    a.classList.remove("text-green-400");
  }

  activeindex++;
}

export default function TypingGame (){
  const [wpm, setWPM] = useState(0);

const keyboardinput = (e) => {
  if (time_start == 0) {
      time_start = Date.now();
    }
  var Exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
  if (!e.key.match(Exp) && activeindex < finalindex && e.ctrlKey == false){
    e.preventDefault();
    typed_entries++;
    validateinput(e.key);
  }else if(e.key === "Backspace" && activeindex!=0){
    e.preventDefault();
    activeindex--;
    let a = document.querySelector("#letter");
    let b = activeindex;
    while(b>0){
      a = a.nextElementSibling;
      b--;
    }
    if(a.classList.contains("text-red-400")){
      uncorrected_errors--;
      a.classList.remove("text-red-400");   
    }else{
      a.classList.remove("text-green-400");
    }
  }
  var el = document.getElementById('typingtest');
  var range = document.createRange()
  var sel = window.getSelection();
  range.setStart(el.childNodes[0],activeindex)
  range.collapse(true)
  sel.removeAllRanges()
  sel.addRange(range)
  if (activeindex >= finalindex){
    console.log("you win");
    let a = document.querySelector("#typingtest");
    a.removeAttribute("contentEditable");
  }
    setWPM((typed_entries/5)/(((Date.now()-time_start)/1000)/60) - uncorrected_errors );
}
    return (
    <>
  <div contentEditable="true" id='typingtest' className="flex items-center bg-white rounded-md justify-center" onKeyDown={keyboardinput}>
    <div id='words' className='inline-block rounded-md text-gray-900 w-11/12'>
    {quotes[1].content.split('').map((letter, index)=>(
        <div key={index} id='letter' className='inline'>{letter}</div>
          ))}
    </div>
  </div>
  
  <div className="flex">
        {wpm}
  </div>
  </>
  )
}
