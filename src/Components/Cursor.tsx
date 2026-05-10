import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    let hover = false
    const cursor = cursorRef.current
    if (!cursor) return;

    const mousePos = { x: 0, y: 0 }
    const cursorPos = { x: 0, y: 0 }
    
    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX
      mousePos.y = e.clientY
    }
    document.addEventListener("mousemove", onMouseMove)

    let animationFrameId: number;
    
    const loop = () => {
      if (!hover) {
        const delay = 6
        cursorPos.x += (mousePos.x - cursorPos.x) / delay
        cursorPos.y += (mousePos.y - cursorPos.y) / delay
        gsap.to(cursor, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 })
      }
      animationFrameId = requestAnimationFrame(loop)
    }
    animationFrameId = requestAnimationFrame(loop)

    const items = document.querySelectorAll<HTMLElement>("[data-cursor]")
    items.forEach(item => {
      const onMouseOver = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement
        const rect = target.getBoundingClientRect()

        if (item.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons")
          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 })
          cursor.style.setProperty("--cursorH", `${rect.height}px`)
          hover = true
        }
        if (item.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable")
        }
      }

      const onMouseOut = () => {
        cursor.classList.remove("cursor-disable", "cursor-icons")
        hover = false
      }

      item.addEventListener("mouseover", onMouseOver)
      item.addEventListener("mouseout", onMouseOut)
      
      // Cleanup for listeners
      return () => {
        item.removeEventListener("mouseover", onMouseOver)
        item.removeEventListener("mouseout", onMouseOut)
      }
    })

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <div className="cursor-main" ref={cursorRef}></div>
}

export default Cursor
