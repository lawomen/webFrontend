import MarkdownIt from "markdown-it";

export async function getStaticProps(context){
    const rawBlog = await fetch(`https://lawomen-admin.herokuapp.com/blog-entries?_sort=date_created:DESC&_where[id]=${context.params.id}&_limit=1`)
    const blogRes = await rawBlog.json()

    return{
        props:{
            blogRes: blogRes[0]
        }
    }
}

export async function getStaticPaths(){
    const enBlogRaw = await fetch(`https://lawomen-admin.herokuapp.com/blog-entries?_locale=en`)
    const enBlog = await enBlogRaw.json()
  
    const urBlogRaw = await fetch(`https://lawomen-admin.herokuapp.com/blog-entries?_locale=ur`)
    const urBlog = await urBlogRaw.json()
  
    const allBlog = [...urBlog, ...enBlog]

    const paths = allBlog.map(({id})=> ({params:{id: id.toString()}}))

    return{
        paths,
        fallback: false
    }
}


function blog({blogRes}){
    const md = MarkdownIt();
    const parsedBlog = md.render(blogRes.blog);

    return(
        <div dangerouslySetInnerHTML={{ __html: parsedBlog }} /> 
    )
}

export default blog;