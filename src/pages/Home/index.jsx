import {
  Home,
  About,
  Portfolio,
  Experience,
  Contact,
  Social,
  Skill,
  Hobbies,
} from "../../components";
import React from "react";
import { MainLayout } from "../../layouts";

export const HomePage = ({ developer, links }) => {
  return (
    <MainLayout developer={developer} links={links}>
      <Home developer={developer} />
      <Skill skills={developer.skills} />
      <Experience companies={developer.experience} />
      <Hobbies hobbies={developer.hobbies} />
      <Social developer={developer} />
    </MainLayout>
  );
};
