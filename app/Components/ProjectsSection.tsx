"use client"
import { motion } from 'framer-motion';
import { PROJECTS } from '@/app/constants/projects';
import { FaFolderOpen, FaGithub } from 'react-icons/fa';
import { BsArrowUpRightSquare } from 'react-icons/bs';

const ProjectSection = () => {
    return (
        <main id='projects' className='flex flex-col space-y-4'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-bold my-8'>Projects </h1>
                <p>Projects I  build  checkout the codes  on Github </p>
            </div>
            <div className='mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-7 md:px-14'>
                {PROJECTS.map((pro, index) => (
                    <motion.div
                        key={pro.content}
                        className='bg-slate-100 dark:bg-slate-950 dark:text-slate-200 md:max-w-sm space-y-4 shadow-md rounded p-6'
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{ duration: 1, delay: 0.4 }}
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
                        <div className='flex space-x-1 flex-wrap'>
                            {pro.language.map(lan => (
                                <p key={lan} className='rounded-xl  text-blue-500 px-2 py-1'>{lan}</p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </main>
    );
};

export default ProjectSection;
