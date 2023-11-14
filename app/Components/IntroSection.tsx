"use client";
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const IntroSection = () => {
    return (
        <div>
            <section className='flex flex-col items-center justify-center gap-3 my-7 '>
                <Image className='rounded-full' src={"https://avatars.githubusercontent.com/u/120477045?v=4"} alt='teddy' height={200} width={200} />
                <motion.div className='space-x-2'
                    initial={{
                        opacity: 0,
                        x: -50
                    }}
                    whileInView={
                        {
                            opacity: 1,
                            x: 0
                        }
                    }
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                    }}
                    exit={
                        {
                            opacity: 1
                        }
                    }
                >
                    <h3 className='text-4xl font-medium mx-auto flex items-center justify-center'>
                        Tewodros Birhanu
                    </h3>
                    <p className=' text-xl md:text-6xl  text-center font-bold px-10'>I&apos;m Teddy  passionate Javascript fullstack developer. </p>
                </motion.div>
                <a href="mailto:onesamket@gmail.con" target="_blank" rel="noopener noreferrer">
                    <Button color='secondary' className='mt-5'>Get in touch</Button>
                </a>
            </section>
        </div>
    )
}

export default IntroSection