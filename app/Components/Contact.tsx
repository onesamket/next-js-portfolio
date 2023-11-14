"use client"
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'
import { BsArrowUpRightSquare } from 'react-icons/bs'

const Contact = () => {
    return (
        <div>
            <motion.section
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.2,
                    delay: .7
                }}
                id='contact'
                className='my-10 py-10 flex items-center space-y-6 flex-col w-1/2 mx-auto'>
                <h1 className='text-4xl py-2 font-bold'>Get In touch</h1>
                <p className='text-justify'>I&apos;m always excited to
                    connect with fellow creators,
                    potential collaborators,
                    and those interested in my work.
                    Whether you have a project in mind, a question, or simply want
                    to say hello, don&apos;t hesitate to reach out.I look forward to hearing from you and exploring new opportunities together.
                </p>
                <a href="mailto:onesamket@gmail.com">
                    <Button size='lg' name='say hallo' color='primary' variant='bordered'>say hello <BsArrowUpRightSquare className="text-blue-600" /> </Button>
                </a>
            </motion.section>
        </div>
    )
}

export default Contact