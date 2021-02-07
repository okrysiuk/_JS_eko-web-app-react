import React from "react";
import LandingSection from "./../../components/landing-section";
import "./vacancies.css";

const VacancyItem = ({ imgUrl, title, desc }) => {
  return (
    <>
      <div className="vacancy-item">
        <div className="vacancy-photo">
          <img src={imgUrl} alt="vacancy item" />
        </div>
        <div className="vacancy-description">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

const Vacancies = () => {
  return (
    <>
      <LandingSection
        title="Join our team"
        titleColor="white"
        imgUrl="./images/vacancies.jpg"
        isButtons={false}
      />
      <div className="vacancies-container">
        {vacanciesList.map((vacancy) => {
          return (
            <VacancyItem
              key={vacancy.id}
              imgUrl={vacancy.imgUrl}
              title={vacancy.title}
              desc={vacancy.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Vacancies;

const vacanciesList = [
  {
    id: 1,
    title: "Economist",
    imgUrl: `./images/vacancies/buh-vacancy.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    enim magna, egestas ut rutrum et, tristique sit amet leo. Proin a
    commodo ex, vel viverra mauris. Nunc maximus turpis neque,
    vestibulum placerat ipsum lobortis sed. Nam vestibulum nulla
    pretium, consectetur tellus at, rutrum risus. Pellentesque in
    magna nunc. Duis diam est, accumsan non risus eget, ultrices
    volutpat nunc. Donec sagittis tortor eget nibh ornare egestas.
    Nunc efficitur eros id augue convallis rhoncus. Etiam nisl neque,
    scelerisque sed neque ut, lobortis eleifend lorem. Donec molestie
    lorem ante, sed rhoncus lacus sodales eget. Nunc suscipit tempus
    libero, non vestibulum urna pulvinar sed. Praesent aliquam
    lobortis metus.`,
  },
  {
    id: 2,
    title: "Electrical engeneer",
    imgUrl: `./images/vacancies/electro-vacancy.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    enim magna, egestas ut rutrum et, tristique sit amet leo. Proin a
    commodo ex, vel viverra mauris. Nunc maximus turpis neque,
    vestibulum placerat ipsum lobortis sed. Nam vestibulum nulla
    pretium, consectetur tellus at, rutrum risus. Pellentesque in
    magna nunc. Duis diam est, accumsan non risus eget, ultrices
    volutpat nunc. Donec sagittis tortor eget nibh ornare egestas.
    Nunc efficitur eros id augue convallis rhoncus. Etiam nisl neque,
    scelerisque sed neque ut, lobortis eleifend lorem. Donec molestie
    lorem ante, sed rhoncus lacus sodales eget. Nunc suscipit tempus
    libero, non vestibulum urna pulvinar sed. Praesent aliquam
    lobortis metus.`,
  },
  {
    id: 3,
    title: "Welding specialist (TIG, MIG/MAG)",
    imgUrl: `./images/vacancies/welding-vacancy.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    enim magna, egestas ut rutrum et, tristique sit amet leo. Proin a
    commodo ex, vel viverra mauris. Nunc maximus turpis neque,
    vestibulum placerat ipsum lobortis sed. Nam vestibulum nulla
    pretium, consectetur tellus at, rutrum risus. Pellentesque in
    magna nunc. Duis diam est, accumsan non risus eget, ultrices
    volutpat nunc. Donec sagittis tortor eget nibh ornare egestas.
    Nunc efficitur eros id augue convallis rhoncus. Etiam nisl neque,
    scelerisque sed neque ut, lobortis eleifend lorem. Donec molestie
    lorem ante, sed rhoncus lacus sodales eget. Nunc suscipit tempus
    libero, non vestibulum urna pulvinar sed. Praesent aliquam
    lobortis metus.`,
  },
  {
    id: 4,
    title: "Truck driver (Category C, CE)",
    imgUrl: `./images/vacancies/driver-vacancy.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    enim magna, egestas ut rutrum et, tristique sit amet leo. Proin a
    commodo ex, vel viverra mauris. Nunc maximus turpis neque,
    vestibulum placerat ipsum lobortis sed. Nam vestibulum nulla
    pretium, consectetur tellus at, rutrum risus. Pellentesque in
    magna nunc. Duis diam est, accumsan non risus eget, ultrices
    volutpat nunc. Donec sagittis tortor eget nibh ornare egestas.
    Nunc efficitur eros id augue convallis rhoncus. Etiam nisl neque,
    scelerisque sed neque ut, lobortis eleifend lorem. Donec molestie
    lorem ante, sed rhoncus lacus sodales eget. Nunc suscipit tempus
    libero, non vestibulum urna pulvinar sed. Praesent aliquam
    lobortis metus.`,
  },
  {
    id: 5,
    title: "Forklift driver",
    imgUrl: `./images/vacancies/forklift-driver-vacancy.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    enim magna, egestas ut rutrum et, tristique sit amet leo. Proin a
    commodo ex, vel viverra mauris. Nunc maximus turpis neque,
    vestibulum placerat ipsum lobortis sed. Nam vestibulum nulla
    pretium, consectetur tellus at, rutrum risus. Pellentesque in
    magna nunc. Duis diam est, accumsan non risus eget, ultrices
    volutpat nunc. Donec sagittis tortor eget nibh ornare egestas.
    Nunc efficitur eros id augue convallis rhoncus. Etiam nisl neque,
    scelerisque sed neque ut, lobortis eleifend lorem. Donec molestie
    lorem ante, sed rhoncus lacus sodales eget. Nunc suscipit tempus
    libero, non vestibulum urna pulvinar sed. Praesent aliquam
    lobortis metus.`,
  },
];
