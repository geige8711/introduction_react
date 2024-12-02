"use client";

import { skills } from "../../_lib/skills";
import SkillItem from "../components/SkillItem";
import { employmentHistories } from "../../_lib/employmentHistories";
import EmploymentItem from "../components/EmploymentItem";
import { educationHistories } from "../../_lib/educationHistories";
import EducationItem from "../components/EducationItem";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import ResumeSectionHeader from "../components/ResumeSectionHeader";

export default function Resume() {
  return (
    <PageContainer>
      <>
        <PageHeader title="Resume" />
        <div className="mt-6">
          <ResumeSectionHeader title="skills" />
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
            {skills.map((skill, index) => (
              <SkillItem skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className="mt-6">
          <ResumeSectionHeader title="employment history" />
          <div className="w-full h-full grid grid-cols-1 gap-4 mt-5">
            {employmentHistories.map((item, index) => (
              <EmploymentItem history={item} key={index} />
            ))}
          </div>
        </div>
        <div className="mt-6">
          <ResumeSectionHeader title="education background" />
          <div className="w-full h-full grid grid-cols-1 gap-4 mt-5">
            {educationHistories.map((item, index) => (
              <EducationItem history={item} key={index} />
            ))}
          </div>
        </div>
      </>
    </PageContainer>
  );
}
