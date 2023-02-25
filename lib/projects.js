import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {sortByDate} from '../utils/index'

const files = fs.readdirSync(path.join('projects'))

export function getProjects() {
    const projects = files.map((filename) => {
        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(
            path.join('projects', filename),
            'utf-8'
        )

        const {data: frontmatter} = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })
    // console.log(projects)
    return projects.sort(sortByDate)
}
