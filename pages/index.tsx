import {getProjects} from "@/lib/projects";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage({projects, projectsForModal}) {

    return (
        <Layout>
            <Hero/>
            <About />
            <Projects projects={projects} projectsForModal={projectsForModal} />
            <Contact />
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            projects: getProjects().slice(0, 3),
            projectsForModal: getProjects()
        },
    };
}
