import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/app/constants/projects';
import { FaArrowRight, FaFolderOpen, FaGithub } from 'react-icons/fa';
import { BsArrowUpRightSquare } from 'react-icons/bs';

const ProjectCard = () => {
    return (
        <main className='grid gap-3 place-content-center justify-center place-items-center md:grid-cols-2'>
            {PROJECTS.map((pro, index) => (

                <motion.div key={pro.content} className='bg-slate-100 dark:bg-slate-950 dark:text-slate-200  max-w-sm space-y-4 shadow-md rounded p-5 '
                    initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -100 : 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{ duration: 1, delay: .4 }}
                >
                    <div className='flex justify-between px-8'>
                        <FaFolderOpen className="cursor-pointer text-xl text-blue-400" />
                        <div className='flex space-x-4 items-center'>
                            <a href={pro.githubUrl}>
                                <FaGithub className="cursor-pointer text-xl" />
                            </a>
                            <a href={pro.websiteUrl}>
                                <BsArrowUpRightSquare className="hover:text-slate-300" />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='text-2xl text-justify '>{pro.title} </h2>
                        <p className='text-justify'>{pro.content} </p>
                    </div>
                    <div className='flex space-x-1'>
                        {pro.language.map(lan => (
                            <p key={lan} className='rounded-xl  text-blue-500 px-2 py-1'>{lan}</p>
                        ))}

                    </div>

                </motion.div >
            ))}
        </main>

    )
}

export default ProjectCard