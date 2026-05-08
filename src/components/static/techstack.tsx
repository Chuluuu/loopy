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
  const stacks = [...techStacksMn,...techStacksMn];
  return (
    
    <section className="relative py-8 overflow-hidden  ">
{/* Marquee Container */}
      <div className="overflow-hidden relative mx-12">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/50 to-transparent dark:from-slate-900 dark:via-slate-900/70 z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/50 to-transparent dark:from-slate-900 dark:via-slate-900/70 z-10" />
        <div className="flex gap-3   animate-marquee w-max">
          {stacks.map((row, index) => (
            <div
              key={index}
              className="shrink-0 min-w-[160px] p-3 pb-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
            >
              {/* Category Title */}
              <div className="mb-2 text-[11px] font-semibold tracking-[0.06em] uppercase text-sky-500 dark:text-sky-400 font-['Roboto']">
                {row.title}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {row.data.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="flex items-center p-2 gap-2 text-xs rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-['Roboto']"
                  >
                    <div className="text-xl text-blue-600">
                        {iconMap[item.icon] ?? iconMap["custom:question"]}
                      </div>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
        </section>
  );
};

export default TechStackGrid;
