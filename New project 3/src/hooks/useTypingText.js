import { React } from "../lib/runtime.js";

const { useEffect, useState } = React;

export function useTypingText(phrases, options = {}) {
  const {
    typeSpeed = 70,
    deleteSpeed = 38,
    pause = 1400
  } = options;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let timeoutId;

    if (!isDeleting && text === current) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      }, 220);
    } else {
      timeoutId = window.setTimeout(() => {
        const nextText = isDeleting
          ? current.slice(0, Math.max(0, text.length - 1))
          : current.slice(0, Math.min(current.length, text.length + 1));
        setText(nextText);
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => window.clearTimeout(timeoutId);
  }, [phrases, phraseIndex, text, isDeleting, typeSpeed, deleteSpeed, pause]);

  return text;
}
