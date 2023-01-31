import React from 'react'
import { FaReact, FaPython } from 'react-icons/fa'
import { SiJavascript, SiPostgresql, SiMongodb, SiGithub, SiHeroku, SiJirasoftware, SiNodedotjs, SiFlask, SiHtml5, SiCss3 } from 'react-icons/si'

const Skills = () => {
  return (
    <>
      <div class="bg-white h-screen py-24 px-10 lg:pt-40" id="skills">
        <p class="my-8-2 text-3xl font-bold  text-gray-900 md:text-center sm:text-4xl pb-10">Skills</p>

        <div class="mx-auto max-w-2xl lg:my-8 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-2 md:grid-cols-3 gap-y-10 md:max-w-none lg:grid-cols-5 lg:gap-y-16">    
              <dt class="flex align-middle text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiHtml5 />
                </div>
                HTML
              </dt>
        
              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiCss3 />
                </div>
                CSS
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiNodedotjs />
                </div>
                Node.js
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiFlask/>
                </div>
                Flask
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiJavascript />
                </div>
                Javascript
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <FaPython />
                </div>
                Python
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <FaReact />
                </div>
                React
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiPostgresql />
                </div>
                PostgreSQL
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiMongodb />
                </div>
                MongoDB
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiGithub />
                </div>
                Github
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiHeroku />
                </div>
                Heroku
              </dt>

              <dt class="flex justify-start text-base font-semibold leading-7 text-gray-900">
                <div class="mr-4 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiJirasoftware />
                </div>
                Jira
              </dt>

          </dl>
        </div>

        {/* <div class="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div class="mx-auto max-w-2xl lg:text-left py-5">
            <p class="my-8 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Databases</p>
          </div>
          <dl class="grid max-w-xl grid-cols-2 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">

            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">

                  <SiPostgresql />
                </div>
                PostgreSQL
              </dt>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7">
                <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiMongodb />
                </div>
                MongoDB
              </dt>
            </div>

          </dl>
        </div> */}
        {/* <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">

          <div class="mx-auto max-w-2xl lg:text-left py-5">
            <p class="my-8 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Management & Deployment</p>
          </div>
          <dl class="grid max-w-xl grid-cols-2 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiGithub />
                </div>
                Github
              </dt>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">
                  <SiHeroku />
                </div>
                Heroku
              </dt>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 text-2xl text-gray-700">

                  <SiJirasoftware />
                </div>
                Jira
              </dt>
            </div>
          </dl>
        </div> */}
      </div>

    </>

  )
}

export default Skills