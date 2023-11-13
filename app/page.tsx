"use client"
import { Button, Spinner, } from '@nextui-org/react'
import Image from 'next/image';
import Section from './Components/Section';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Prog from './Components/Progress';
import { motion } from 'framer-motion'
import ProjectCard from './Components/Card';
import profile from '@/app/Asset/profile.png';
import { BsArrowUpRightSquare } from 'react-icons/bs';
export default function Home() {



  return (
    <Section>
      <main className='flex space-x-1 justify-evenly px-10 '>
        <aside className='fixed hidden md:block bottom-12 left-4 flex-col space-y-4'>
          <FaGithub className="text-xl transition-all duration-250 hover:translate-y-2 hover:text-blue-500 " />
          <FaTwitter className="text-xl transition-all duration-250 hover:translate-y-2 hover:text-blue-500 " />
          <FaInstagram className="text-xl transition-all duration-250 hover:translate-y-2 hover:text-blue-500 " />
          <FaLinkedinIn className="text-xl transition-all duration-250 hover:translate-y-2 hover:text-blue-500 " />
        </aside>
        <aside className='flex flex-col px-3'>
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
              <h3 className='text-4xl font-medium'>
                Tewodros Birhanu
              </h3>
              <p className=' text-3xl md:text-6xl  text-center font-bold px-10'>I&apos;m Teddy  passionate Javascript fullstack developer. </p>
            </motion.div>
            <a href="mailto:onesamket@gmail.con" target="_blank" rel="noopener noreferrer">
              <Button color='secondary' className='mt-5'>Get in touch</Button>
            </a>
          </section>

          {/* skills  section  */}

          <section className='md:flex flex-col md:flex-row justify-center items-center md:gap-8  gap-5 mn-h-[99vh] py-10 px-10 my-4' id='skills'>
            <motion.div className='text-center md:w-1/2'
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,

              }}
              transition={{
                duration: 0.6,
                delay: 0.3
              }}
            >
              <div>
                <h1 className='font-medium text-5xl'>Design Skill</h1>
                <p className='text-justify p-4 rounded-sm my-4 md:my-1 '>
                  As a web developer, I have expertise in various technologies and frameworks, including React, NextJs, Remix, Svelte, Typescript, MongoDB, Express, MySQL, and Flutter. I can also build applications using React Native, Ionic, and Svelte Native.

                  In addition to this, I have a strong knowledge of different serverless technologies, such as Firebase, Vercel, AWS, and more. I&apos;m dedicated to delivering top-notch web and mobile solutions that meet your business needs. Let&apos;s bring your ideas to life!
                </p>
              </div>
            </motion.div>
            {/* progress  */}
            <motion.div className='md:w-1/2  items-center '
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,

              }}
              transition={{
                duration: 0.6,
                delay: 0.3
              }}
            >
              <Prog name='React' value={89} color='default' />
              <Prog name='NextJs' value={80} color='danger' />
              <Prog name='Remix' value={90} color='warning' />
              <Prog name='Svelte' value={60} color='success' />
              <Prog name='Typescript' value={80} color='primary' />
              <Prog name='MongoDB' value={89} color='success' />
              <Prog name='Express' value={89} color='secondary' />
              <Prog name='MySQL' value={80} color='default' />
              <Prog name='Astro' value={50} color='primary' />
            </motion.div>
          </section>



          {/* projects section  */}
          <section id='projects' className='px-8 '>
            <h1 className='text-4xl font-bold my-8'>Projects </h1>
            <ProjectCard />
          </section>

          {/* about section  */}
          <motion.section id='about' className='my-10 px-10 py-20  space-y-1'
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
          >
            <h1 className='text-4xl self-start font-bold'>About Me</h1>
            <p className='text-justify p-3 w-1/2 mx-auto'>Hello, I&apos;m Tewodros Birhanu, a passionate and experienced Fullstack JavaScript Developer. With a love for coding and a creative approach to problem-solving, I specialize in crafting elegant, user-friendly, and high-performance web applications that not only look great but also rank well in search engines (SEO).</p>
            <p className='text-justify p-3 w-1/2 mx-auto'>I thrive on bringing ideas to life and building cool projects that push the boundaries of what&apos;s possible. My tech stack includes Remix, Next.js, Express, React Native, Ionic, Svelte, and SvelteKit Astro, complemented by database expertise in MongoDB, MySQL, and Prisma. I&apos;m also constantly exploring new technologies to stay at the forefront of web development trends.</p>
            <p className='text-justify p-3 w-1/2 mx-auto'>My goal is to create web applications that not only meet your specific requirements but also provide an exceptional user experience. I believe that code should be clean, maintainable, and scalable, and I take pride in writing code that is not only functional but also a work of art.</p>
            <p className='text-justify p-3 w-1/2 mx-auto'>Let&apos;s collaborate on your next project, and together, we can turn your ideas into digital reality. If you&apos;re looking for a developer who is not only passionate about technology but also deeply committed to your success, I&apos;d love to hear from you.</p>
          </motion.section>

          {/* contact section  */}
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
          {/* footer section  */}
          <section id='footer'>
            &copy; All Rights Reserved
          </section>
        </aside>

      </main>


    </Section >

  )
}
