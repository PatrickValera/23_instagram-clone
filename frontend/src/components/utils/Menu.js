import React, { useEffect, useRef, useState } from 'react'

const Menu = ({ element, children, onClose: close }) => {

    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const box = useRef()
    const handleClose = () => {
        close()
    }


    useEffect(() => {
        if (element) {
            console.log(element)
            let { top, left } = element.getBoundingClientRect()
            setTop(top + element.offsetHeight + 10)
            setLeft(left - box.current.offsetWidth / 2)
        }
    }, [element])

    useEffect(() => {
        function handleClose() {
            console.log('closing')
            close()
        }
        if (element) {
            document.addEventListener('click', handleClose)
            console.log('add')
        }
        return (() => {
            console.log('remove')
            document.removeEventListener('click', handleClose)
        })
    }, [element])

    useEffect(() => {
        console.log("UE")
    }, [])
    return (
        <div ref={box} className={`fixed bg-gray-200 rounded p-2 ${element ? 'block' : 'hidden'}`} style={{ left: `${left}px`, top: `${top}px` }}>
            {children}
        </div>
    )
}

export default Menu