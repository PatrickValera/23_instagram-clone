import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Home from './home'

export default function Index() {
  useEffect(() => {
    console.log('index')
  }, [])
  return (
    <>
      <Home />
    </>
  )
}
