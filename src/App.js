import React, { useState, useEffect } from "react";
import "./style.css";
export default function App() {
  useEffect(() => {
    counter();
  }, []);

  useEffect(() => {
    timer();
  });

  let arr = [];

  async function counter() {
    for (let i = 10; i <= 100; i++) {
      if (i % 10 == 0) {
        arr.push(i);
      }
    }
    console.log(arr);
  }

  async function timer() {
    for (let i = 10; i <= 100; i++) {
      setTimeout(() => {
        if (i % 10 == 0) {
          console.log(i);
        }
      }, i * 1000);
    }
  }
  return <></>;
}
