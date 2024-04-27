import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";

export const Blogs = () => {
  return (
    <div>
      <Appbar/>
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorName={"Harshit Raj"}
            title={"Advice From a Software Engineer With 8 Years of Experience"}
            content={
              "In the beginning, I was part of the frontend team. The tech organisation was split between backend and frontend developers. At that time, we were no more than 30 engineers. When our new CTO arrived a year later, he introduced an organisation based on feature teams: the Spotify Model. Although there was some friction at the start (people don’t like change), this reorganisation definitely turned out to be for the better.I stayed for more than five years in the same feature team. I was there at its inception, so throughout the years, I became the tech referent of the project. Eventually, I joined another team, where I worked until I left for a whole new adventure a year later.All right, enough with the context. I hope you’ll enjoy reading the rest, and that the following advice will be actionable for your career progression!"
            }
            publishedDate={"2 April 2024"}
          />
          <BlogCard
            authorName={"Harshit Raj"}
            title={"Advice From a Software Engineer With 8 Years of Experience"}
            content={
              "In the beginning, I was part of the frontend team. The tech organisation was split between backend and frontend developers. At that time, we were no more than 30 engineers. When our new CTO arrived a year later, he introduced an organisation based on feature teams: the Spotify Model. Although there was some friction at the start (people don’t like change), this reorganisation definitely turned out to be for the better.I stayed for more than five years in the same feature team. I was there at its inception, so throughout the years, I became the tech referent of the project. Eventually, I joined another team, where I worked until I left for a whole new adventure a year later.All right, enough with the context. I hope you’ll enjoy reading the rest, and that the following advice will be actionable for your career progression!"
            }
            publishedDate={"2 April 2024"}
          />
          <BlogCard
            authorName={"Harshit Raj"}
            title={"Advice From a Software Engineer With 8 Years of Experience"}
            content={
              "In the beginning, I was part of the frontend team. The tech organisation was split between backend and frontend developers. At that time, we were no more than 30 engineers. When our new CTO arrived a year later, he introduced an organisation based on feature teams: the Spotify Model. Although there was some friction at the start (people don’t like change), this reorganisation definitely turned out to be for the better.I stayed for more than five years in the same feature team. I was there at its inception, so throughout the years, I became the tech referent of the project. Eventually, I joined another team, where I worked until I left for a whole new adventure a year later.All right, enough with the context. I hope you’ll enjoy reading the rest, and that the following advice will be actionable for your career progression!"
            }
            publishedDate={"2 April 2024"}
          />
        </div>
      </div>
    </div>
  );
};
