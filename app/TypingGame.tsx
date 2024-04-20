'use client';
import { useState } from 'react';


const quotes = [
  { id: '1', content: 'whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.', author: 'Friedrich Neitzsche' },
  {
    id: '2', content: '.,/;\'[]\There is no hunting like the hunting of man, and those who have hunted armed men long enough and liked it, never care for anything else thereafter.', author: 'Ernest Hemingway'
  },
  { id: '3', content: 'Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.', author: 'Henry Van Dyke' },
]

var activeindex = 0;
var finalindex = quotes[1].content.length;
var typed_entries = 0;
var uncorrected_errors = 0;
var time_start = 0;

const validateinput = (c: string) => {
  if (quotes[1].content.charAt(activeindex) == c) {
    let a: Element | null = document.querySelector("#letter");
    let b = activeindex;
    while (a !== null && b > 0) {
      a = a.nextElementSibling;
      b--;
    }
    if (a !== null) {
      a.classList.remove("text-red-400");
      a.classList.add("text-green-400");
    }
  } else {
    uncorrected_errors++;
    let a: Element | null = document.querySelector("#letter");
    let b = activeindex;
    while (a !== null && b > 0) {
      a = a.nextElementSibling;
      b--;
    }
    if (a !== null) {
      a.classList.add("text-red-400");
      a.classList.remove("text-green-400");
    }
  }

  activeindex++;
}

export default function TypingGame() {
  const [wpm, setWPM] = useState(0);

  const keyboardinput = (e: React.KeyboardEvent) => {
    if (time_start == 0) {
      time_start = Date.now();
    }
    var Exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
    if (!e.key.match(Exp) && activeindex < finalindex && e.ctrlKey == false) {
      e.preventDefault();
      typed_entries++;
      validateinput(e.key);
    } else if (e.key === "Backspace" && activeindex != 0) {
      e.preventDefault();
      activeindex--;
      let a: Element | null = document.querySelector("#letter");
      let b = activeindex;
      while (b > 0 && a !== null) {
        a = a.nextElementSibling;
        b--;
      }
      if (a !== null && a.classList.contains("text-red-400")) {
        uncorrected_errors--;
        a.classList.remove("text-red-400");
      } else if (a !== null) {
        a.classList.remove("text-green-400");
      }
    }
    var el: Element | null = document.getElementById('typingtest');
    var range = document.createRange()
    var sel = window.getSelection();
    if (el !== null && sel !== null) {
      range.setStart(el.childNodes[0], activeindex)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
      if (activeindex >= finalindex) {
        console.log("you win");
        let a: Element | null = document.querySelector("#typingtest");
        if (a !== null) {
          a.removeAttribute("contentEditable");
        }
      }
      setWPM((typed_entries / 5) / (((Date.now() - time_start) / 1000) / 60) - uncorrected_errors);
    }
  }
  return (
    <div className="flex justify-center flex-col place-items-center  bg-white">
      <div contentEditable="true" id='typingtest' className="p-5 mt-5 w-11/12 rounded-lg border-2 border-slate-400" onKeyDown={keyboardinput}>
        <div id='words' className=''>
          {quotes[1].content.split('').map((letter, index) => (
            <div key={index} id='letter' className='inline'>{letter}</div>
          ))}
        </div>
      </div>

      <div className="flex justify-center place-items-center">
        {wpm.toFixed(0)}
      </div>

    </div>
  )
}
