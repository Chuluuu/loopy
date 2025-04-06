// components/TechStackGrid.tsx
import React from "react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaSass,
  FaDocker,
  FaDatabase,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  SiSpring,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiFlutter,
  SiSqlite,
  SiMysql,
} from "react-icons/si";
import { techStacksMn } from "./techstacks";
// import { BiFiletypeXml } from "react-icons/bi";

const iconMap: Record<string, JSX.Element> = {
  "fa:react": <FaReact />,
  "fa:python": <FaPython />,
  "fa:java": <FaJava />,
  "fa:html5": <FaHtml5 />,
  "fa:css3": <FaCss3 />,
  "fa:sass": <FaSass />,
  "fa:docker": <FaDocker />,
  "si:spring": <SiSpring />,
  "si:typescript": <SiTypescript />,
  "si:javascript": <SiJavascript />,
  "si:postgresql": <SiPostgresql />,
  "si:mongodb": <SiMongodb />,
  "si:kubernetes": <SiKubernetes />,
  "si:flutter": <SiFlutter />,
  "si:sqlite": <SiSqlite />,
  "si:mysql": <SiMysql />,
  //   "bi:filetype-xml": <BiFiletypeXml />,
  "custom:mssql": <FaDatabase />,
  "custom:odoo": <FaDatabase />,
  "custom:react-spring": <FaReact />,
  "custom:react-python": <FaReact />,
  "custom:flutter-firebase": <SiFlutter />,
  "custom:react-node": <FaReact />,
  "custom:question": <FaQuestionCircle />,
};

type TechItem = {
  name: string;
  icon: string;
};

type TechStackSection = {
  title: string;
  data: TechItem[];
};

type Props = {
  stacks: TechStackSection[];
};

const TechStackGrid=() => {
  const stacks = techStacksMn;
  return (
    <div className="flex flex-col p-6 gap-2">
      <div className="overflow-hidden relative  mx-12">
        {/* Left and Right gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-slate-900 dark:via-slate-900/70 z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-slate-900 dark:via-slate-900/70 z-10" />

        <div className="whitespace-nowrap flex gap-4 animate-slide">
          {/* Duplicate for seamless looping */}
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex gap-4">
              {stacks.map((section, index) => (
                <div key={index} className="flex gap-2">
                  {section.data.map((item, i) => (
                    <div
                      key={`${loopIndex}-${index}-${i}`}
                      className="flex items-center gap-2 p-2 rounded-xl shadow-sm border hover:bg-blue-50 dark:hover:bg-slate-700 bg-white dark:bg-slate-800 transition"
                    >
                      <div className="text-xl text-blue-600">
                        {iconMap[item.icon] ?? iconMap["custom:question"]}
                      </div>
                      <div className="text-xs text-center whitespace-nowrap">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden relative  mx-12">
        {/* Left and Right gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-slate-900 dark:via-slate-900/70 z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-slate-900 dark:via-slate-900/70 z-10" />

        <div className="whitespace-nowrap flex gap-4 animate-slideReverse">
          {/* Duplicate for seamless looping */}
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex gap-4">
              {stacks.map((section, index) => (
                <div key={index} className="flex gap-2">
                  {section.data.map((item, i) => (
                    <div
                      key={`${loopIndex}-${index}-${i}`}
                      className="flex items-center gap-2 p-2 rounded-xl shadow-sm border hover:bg-blue-50 dark:hover:bg-slate-700 bg-white dark:bg-slate-800 transition"
                    >
                      <div className="text-xl text-blue-600">
                        {iconMap[item.icon] ?? iconMap["custom:question"]}
                      </div>
                      <div className="text-xs text-center whitespace-nowrap">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackGrid;
