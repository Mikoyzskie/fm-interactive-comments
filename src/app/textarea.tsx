"use client"
import clsx from "clsx"
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react"

export default function TextArea({ text }: { text: string }) {

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const [val, setValue] = useState<string>(text)
  const [focused, setFocused] = useState<boolean>(false)

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"
      textAreaRef.current.style.height = `${focused ? textAreaRef.current.scrollHeight + 1 : textAreaRef.current.scrollHeight}px`;
    }
  }, [val, focused]);

  const handleEditComment = useCallback(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
      const length = textAreaRef.current.value.length;
      textAreaRef.current.setSelectionRange(length, length);
    }

  }, [])

  return (
    <>
      <button onClick={handleEditComment} className={clsx("mb-5 w-fit border", focused && "pointer-events-none")}>Edit</button>
      <textarea
        value={val}
        onChange={handleOnChange}
        onMouseDown={(e) => e.preventDefault()}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={textAreaRef}
        rows={1}
        className="text-[#67727E] resize-none outline-none focus:border-[#5357B6] focus:border focus:rounded-lg focus:px-6 focus:py-3 overflow-hidden"
      />
    </>
  )
}
