import React, { useEffect, useMemo, useRef, useState } from 'react'

const Menu = ({ element, children, onClose: close, center }) => {
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [visible, setVisible] = useState(false)
    const box = useRef()

    const childrenWidth = useMemo(() => {
        if (element) return box.current.offsetWidth
        else return 0
    }, [element])
    useEffect(() => {
        if (element) {
            function handleClose() {
                console.log('closing')
                setVisible(false)
                setTimeout(() => {
                    setTop(top)
                    setLeft(left)
                    close()
                }, 250)
            }

            let { top: up, left: side } = element.getBoundingClientRect()
            setTop(up + element.offsetHeight + 10)
            setLeft(side)
            document.addEventListener('click', handleClose)
        }

        return (() => {
            document.removeEventListener('click', handleClose)
        })
    }, [element])

    useEffect(() => {
        if (top) setVisible(true)
    }, [top])
    return (
        <div ref={box} className={`fixed drop-shadow-lg border rounded bg-gray-100 translate-x-[-80%] transition-all z-10  `} style={{ left: `${left}px`, top: `${top}px`, opacity: `${visible ? '1' : '0'}` }}>
            <div className='w-4 h-4 bg-gray-100 absolute left-[80%] rotate-45 top-[-.3rem]'></div>
            <div className='p-2'>
                {children}

            </div>
        </div>
    )
}

export default Menu